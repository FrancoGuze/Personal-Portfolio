import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "./components/theme-provider"
import "./lang/i18n.ts"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
