import { Github, Linkedin } from "lucide-react"
import { useTranslation } from "react-i18next"
import { myData } from "@/lib/myData"
export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">{t("footer.copy")}</p>

        <div className="flex items-center gap-5">
          <a
            href={myData.links.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.social.github")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href={myData.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.social.linkedin")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
         
        </div>
      </div>
    </footer>
  )
}
