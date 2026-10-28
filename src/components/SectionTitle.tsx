type Props = {
  title: string
  intro?: string
}

export function SectionTitle({ title, intro }: Props) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="h-8 w-1.5 rounded-full bg-violet" />
        {title}
      </h2>

      {intro && <p className="mt-4 max-w-xl text-muted">{intro}</p>}
    </div>
  )
}
