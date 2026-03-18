import {  MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"
import { myData } from "@/lib/myData"
export function AboutSection() {
  const { t } = useTranslation()
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[]
  const highlights = [
 
    {
      icon: MapPin,
      label: myData.residence.country,
      value: myData.residence.town,
    },
  ]

  return (
    <section id="about-me" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="aspect-4/5 overflow-hidden rounded-2xl border border-border bg-secondary">
            <img
              src="/images/portrait.jpg"
              alt={t("about.imageAlt")}
              width={480}
              height={600}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Decorative accent */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/20" />
        </div>

        {/* Content */}
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("about.title")}
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            {paragraphs && paragraphs.length && paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
