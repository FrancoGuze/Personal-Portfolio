import { ArrowUpRight, Mail, Github, Linkedin, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"
import { myData } from "@/lib/myData"

export function ContactSection() {
  const { t } = useTranslation()
  const location = [
    myData.residence.city,
    myData.residence.town,
    myData.residence.country,
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t("contact.eyebrow")}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t("contact.detailsEyebrow")}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {t("contact.locationLabel")}
                  </span>
                  <span className="font-medium text-foreground">
                    {location || t("contact.locationFallback")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {t("contact.availabilityLabel")}
                  </span>
                  <span className="font-medium text-foreground">
                    {t("contact.availabilityValue")}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("contact.availability")}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t("contact.methodsEyebrow")}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {t("contact.methodsTitle")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("contact.methodsDescription")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${myData.email}`}
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5 group-hover:stroke-detail/70" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t("contact.emailLabel")}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {myData.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {t("contact.emailCta")}
                  <ArrowUpRight className="size-3" />
                </div>
              </a>

              <a
                href={myData.links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="size-5 group-hover:stroke-detail/70" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t("contact.linkedinLabel")}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {myData.links.linkedIn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {t("contact.linkedinCta")}
                  <ArrowUpRight className="size-3" />
                </div>
              </a>

              <a
                href={myData.links.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Github className="size-5 group-hover:stroke-detail/70" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t("contact.githubLabel")}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {myData.links.gitHub}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {t("contact.githubCta")}
                  <ArrowUpRight className="size-3" />
                </div>
              </a>

              <a
                href={`tel:${myData.phone.replace(/\\s+/g, "")}`}
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/70 bg-background/50 p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5 group-hover:stroke-detail/70" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t("contact.phoneLabel")}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {myData.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {t("contact.phoneCta")}
                  <ArrowUpRight className="size-3" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
