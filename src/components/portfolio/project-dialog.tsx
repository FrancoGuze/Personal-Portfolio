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
  const hasParagraphs = paragraphs.length > 0
  const hasImages = images.length > 0

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
                        <img
                          src={src}
                          alt={`${title ?? "Project"} gallery ${index + 1}`}
                          className="h-32 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}
