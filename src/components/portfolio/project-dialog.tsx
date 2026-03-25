import { useEffect, useState } from "react"

type ProjectDialogProps = {
  open: boolean
  title?: string
  description?: string
  paragraphs?: string[]
  images?: string[]
  onClose: () => void
}

export function ProjectDialog({
  open,
  title,
  description,
  paragraphs = [],
  images = [],
  onClose,
}: ProjectDialogProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const hasParagraphs = paragraphs.length > 0
  const hasImages = images.length > 0

  useEffect(() => {
    if (!open) {
      setSelectedImage(null)
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return
      }

      if (selectedImage) {
        setSelectedImage(null)
        return
      }

      onClose()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose, selectedImage])

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-card p-6 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <div className="flex h-full flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="project-dialog-title"
                className="text-lg font-semibold text-foreground"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-transparent px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              Close
            </button>
          </div>
          {(hasParagraphs || hasImages) && (
            <div className="flex-1 overflow-y-auto pr-2">
              {hasParagraphs && (
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 32)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              )}
              {hasImages && (
                <div className={`${hasParagraphs ? "mt-6" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Project Gallery
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {images.map((src, index) => (
                      <figure
                        key={`${src}-${index}`}
                        className="overflow-hidden rounded-lg border border-border/60 bg-muted/20"
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedImage(src)}
                          className="group block w-full text-left"
                          aria-label={`Open ${title ?? "project"} image ${index + 1}`}
                        >
                          <img
                            src={src}
                            alt={`${title ?? "Project"} gallery ${index + 1}`}
                            className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </button>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
      {selectedImage && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title ?? "Project"} image preview`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative z-10 flex max-h-full w-full max-w-5xl flex-col gap-3">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                Close image
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
              <img
                src={selectedImage}
                alt={`${title ?? "Project"} enlarged preview`}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
