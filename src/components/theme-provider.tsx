import * as React from "react"

export type Theme = "light" | "dark" | "system"

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
})

const getSystemTheme = () => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "light"
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

const applyThemeClass = (theme: Theme) => {
  if (typeof document === "undefined") {
    return "light"
  }
  const root = document.documentElement
  const resolved = theme === "system" ? getSystemTheme() : theme
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  return resolved
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    () => (typeof window === "undefined" ? "light" : getSystemTheme())
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(storageKey) as Theme | null
    if (stored) {
      setTheme(stored)
    }
  }, [storageKey])

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const resolved = applyThemeClass(theme)
    setResolvedTheme(resolved)
    window.localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  React.useEffect(() => {
    if (typeof window === "undefined" || theme !== "system") return
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      const resolved = applyThemeClass("system")
      setResolvedTheme(resolved)
    }
    if (media.addEventListener) {
      media.addEventListener("change", onChange)
    } else {
      media.addListener(onChange)
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", onChange)
      } else {
        media.removeListener(onChange)
      }
    }
  }, [theme])

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
