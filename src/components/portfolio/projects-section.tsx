import { useTranslation } from "react-i18next"
import { ProjectCard } from "./project-card"

type ProjectItem = {
  key: string
  title: string
  description: string
  image: string | false
  tags: string[]
  projectInfo: {
    paragraphs: string[]
    images: string[]
  }
  liveUrl?: string | null
  repoUrl?: string[] | null
}

type ProjectItemRaw = Omit<ProjectItem, "projectInfo"> & {
  "project-info"?: {
    paragraphs?: string[]
    images?: string[]
  }
}

type CarouselSectionProps = {
  title: string
  items: ProjectItem[]
  variant?: "featured" | "additional"
  onInfo?: (payload: {
    title: string
    description: string
    paragraphs: string[]
    images: string[]
  }) => void
}

function ProjectsGroup({
  title,
  items,
  variant = "featured",
  onInfo,
}: CarouselSectionProps) {
  const containerStyles =
    variant === "featured"
      ? "rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm"
      : "rounded-2xl border border-border/50 bg-muted/20 p-6"

  return (
    <div className={`flex flex-col gap-5 ${containerStyles}`}>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-col gap-4">
        {items.map(({ key, ...project }) => (
          <ProjectCard key={key} {...project} onInfo={onInfo} />
        ))}
      </div>
    </div>
  )
}

type ProjectsSectionProps = {
  onInfo?: (payload: {
    title: string
    description: string
    paragraphs: string[]
    images: string[]
  }) => void
}

export function ProjectsSection({ onInfo }: ProjectsSectionProps) {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL

  const resolveAssetPath = (value: string) =>
    value.startsWith("/") ? `${baseUrl}${value.slice(1)}` : value

  const projects = (t("projects.items", {
    returnObjects: true,
  }) as ProjectItemRaw[]).map((project): ProjectItem => {
    const info = project["project-info"]
    const image = project.image === false ? false : resolveAssetPath(project.image)

    return {
      key: project.key,
      title: project.title,
      description: project.description,
      image,
      tags: project.tags,
      liveUrl: project.liveUrl || undefined,
      repoUrl: project.repoUrl?.length ? project.repoUrl : undefined,
      projectInfo: {
        paragraphs: info?.paragraphs?.filter(Boolean) ?? [],
        images:
          info?.images?.filter(Boolean).map(resolveAssetPath) ?? [],
      },
    }
  })

  // Proyectos destacados para mostrar usando la key
  const featuredKeys = ["videochat-app", "chat-app", "appointment-management-platform"]
  const featuredProjects = projects.filter((project) =>
    featuredKeys.includes(project.key)
  )
  const additionalProjects = projects.filter(
    (project) => !featuredKeys.includes(project.key)
  )

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t("projects.description")}
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <ProjectsGroup
            title={t("projects.sections.featured")}
            items={featuredProjects}
            variant="featured"
            onInfo={onInfo}
          />
          <ProjectsGroup
            title={t("projects.sections.additional")}
            items={additionalProjects}
            variant="additional"
            onInfo={onInfo}
          />
        </div>
      </div>
    </section>
  )
}
