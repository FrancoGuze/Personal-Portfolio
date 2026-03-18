import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslation } from "react-i18next"
import {myData} from "@/lib/myData"
export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {t("hero.eyebrow")}
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t("hero.headline")}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t("hero.description")}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">{t("hero.ctaProjects")}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t("hero.ctaContact")}</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={myData.links.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.social.github")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>
          <a
            href={myData.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.social.linkedin")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
         
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        {/* <a href="#skills" aria-label={t("hero.scroll")}>
          <ArrowDown className="size-5 text-muted-foreground" />
        </a> */}
      </div>
    </section>
  )
}
