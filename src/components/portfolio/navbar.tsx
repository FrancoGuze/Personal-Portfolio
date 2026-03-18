import { useState, useEffect } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { cn } from "../../lib/utils"
import { useTheme } from "../theme-provider"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "i18next"

export function Navbar() {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  const languageName =
    language === "es" ? t("navbar.language.spanish") : t("navbar.language.english")
  const alternateLanguageName =
    language === "es" ? t("navbar.language.english") : t("navbar.language.spanish")

  const navLinks = [
    { label: t("navbar.about"), href: "#about-me" },
    { label: t("navbar.skills"), href: "#skills" },
    { label: t("navbar.projects"), href: "#projects" },
    { label: t("navbar.contact"), href: "#contact" },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const activeTheme = theme === "system" ? resolvedTheme : theme
  const nextTheme = activeTheme === "light" ? "dark" : "light"
  const activeThemeLabel = t(`navbar.theme.${activeTheme}`)
  const nextThemeLabel = t(`navbar.theme.${nextTheme}`)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-screen transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl justify-between px-6 py-4 md:grid md:grid-cols-[20%_1fr_20%]">
        <a
          href="#"
          className="group text-center text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="mr-0.5 group-hover:text-orange-300 transition-colors duration-75">{'<'}</span>Franco Guze<span className="ml-0.5 group-hover:text-orange-300 transition-colors duration-75">{'/>'}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative md:h-full md:w-full">
          <div className="absolute inset-0 flex h-full w-full items-center justify-end gap-1">
            <div className="group hidden h-[40px] w-[41px] items-center justify-between overflow-hidden rounded-full border border-border bg-background/70 p-1 transition-all duration-300 ease-in-out hover:w-[80px] md:inline-flex">
              <button
                type="button"
                onClick={() => setTheme(nextTheme)}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-foreground transition-all duration-200"
                aria-label={t("navbar.theme.current", {
                  theme: activeThemeLabel,
                })}
              >
                {activeTheme === "light" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setTheme(nextTheme)}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground opacity-0 transition-all duration-200 hover:bg-accent group-hover:translate-x-0 group-hover:opacity-100 translate-x-1"
                aria-label={t("navbar.theme.switchTo", {
                  theme: nextThemeLabel,
                })}
              >
                {activeTheme === "light" ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="group hidden h-[40px] w-[41px] items-center justify-between overflow-hidden rounded-full border border-border bg-background/70 p-1 transition-all duration-300 ease-in-out hover:w-[80px] md:inline-flex">
                <button
                  type="button"
                  onClick={() => changeLanguage(language === "en" ? "es" : "en")}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-foreground transition-all duration-200"
                  aria-label={t("navbar.language.current", {
                    language: languageName,
                  })}
                >
                  {language === "en" ? "EN" : "ES"}
                </button>
                <button
                  type="button"
                  onClick={() => changeLanguage(language === "en" ? "es" : "en")}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-foreground opacity-0 transition-all duration-300 hover:bg-accent group-hover:translate-x-0 group-hover:opacity-100 translate-x-1"
                  aria-label={t("navbar.language.switchTo", {
                    language: alternateLanguageName,
                  })}
                >
                  {language === "en" ? "ES" : "EN"}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="relative text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t(mobileOpen ? "navbar.closeMenu" : "navbar.openMenu")}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "h-0 overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-all duration-150 md:hidden",
          mobileOpen && "h-80"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 *:ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <div className="group inline-flex w-auto items-center justify-between gap-1 rounded-full border border-border bg-background/70 p-1 transition-all duration-300 ease-in-out md:hidden">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground transition-all duration-200",
                  theme === "light" && "bg-accent"
                )}
                aria-label={t("navbar.theme.switchTo", {
                  theme: t("navbar.theme.light"),
                })}
              >
                <Sun className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-foreground transition-all duration-200",
                  theme === "dark" && "bg-accent"
                )}
                aria-label={t("navbar.theme.switchTo", {
                  theme: t("navbar.theme.dark"),
                })}
              >
                <Moon className="size-4" />
              </button>

            </div>
          </li>
          <li>
            <div className="group inline-flex w-auto items-center justify-between gap-1 rounded-full border border-border bg-background/70 p-1 transition-all duration-300 ease-in-out md:hidden">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={cn(
                  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-foreground transition-all duration-200",
                  language === "en" && "bg-accent"
                )}
                aria-label={t("navbar.language.switchTo", {
                  language: t("navbar.language.english"),
                })}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("es")}
                className={cn(
                  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-foreground transition-all duration-200",
                  language === "es" && "bg-accent"
                )}
                aria-label={t("navbar.language.switchTo", {
                  language: t("navbar.language.spanish"),
                })}
              >
                ES
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
