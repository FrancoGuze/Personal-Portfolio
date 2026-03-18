import { ExternalLink, Github, Info } from "lucide-react"
import { Badge } from "../ui/badge"
import { useTranslation } from "react-i18next"

interface ProjectCardProps {
  title: string
  description: string
  image: string | false
  tags: string[]
  projectInfo?: {
    paragraphs: string[]
    images: string[]
  }
  liveUrl?: string | null
  repoUrl?: string[] | null
  className?: string
  onInfo?: (payload: {
    title: string
    description: string
    paragraphs: string[]
    images: string[]
  }) => void
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  projectInfo,
  liveUrl,
  repoUrl,
  className,
  onInfo,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const displayTitle = title ? t(title) : ""

  
  return (
    <div className={`flex h-44 items-stretch gap-6 overflow-hidden rounded-lg border border-border bg-card/80 ${className ?? ""}`}>
      {image ? (
        <img
          src={image}
          className="h-full aspect-square rounded-md object-cover border-r border-muted"
          alt={displayTitle}
        />
      ) : (
        <div className="grid h-full aspect-square place-content-center rounded-md border border-dashed border-border/60 bg-muted/30 px-3 text-center text-xs text-muted-foreground">
          {displayTitle}
        </div>
      )}
      <main className="flex h-full w-full flex-row py-4 gap-4 pr-3">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground">{displayTitle}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="rounded-md border border-border/60 bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground hover:text-muted"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <aside className="ml-auto flex h-full flex-col items-end justify-end gap-1 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() =>
              onInfo?.({
                title: displayTitle,
                description,
                paragraphs: projectInfo?.paragraphs ?? [],
                images: projectInfo?.images ?? [],
              })
            }
            className="mb-auto inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 transition-colors bg-muted/70 hover:bg-accent hover:text-foreground"
            aria-label={`More info about ${displayTitle}`}
          >
            <Info className="size-4" />
            Info
          </button>
          {repoUrl &&
            repoUrl.length &&
            repoUrl.map((url, i) => (
              <a
                key={`${url}-${i}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                <Github className="size-4" />
                Repo {i + 1}
              </a>
            ))}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              <ExternalLink className="size-4" />
              Live url
            </a>
          )}
        </aside>
      </main>
    </div>
  )
}
