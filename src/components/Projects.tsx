import { CircleCheck, CircleDashed, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import { GithubIcon } from './BrandIcons'
import { SectionTitle } from './SectionTitle'

type Projet = (typeof projects)[number]

function Visuel({ projet }: { projet: Projet }) {
  // Si une capture existe, on l'affiche en entier
  if (projet.image) {
    return (
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-bg">
        <img
          src={projet.image}
          alt={`Capture d'écran du projet ${projet.name}`}
          loading="lazy"
          className="size-full object-contain"
        />
      </div>
    )
  }

  // Sinon, une fausse fenêtre de navigateur avec le nom du projet
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-bg">
      <div className="flex gap-1.5 border-b border-line px-3 py-2">
        <span className="size-2 rounded-full bg-muted/40" />
        <span className="size-2 rounded-full bg-muted/40" />
        <span className="size-2 rounded-full bg-muted/40" />
      </div>
      <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgb(139_92_246/0.35),transparent_60%)] px-4 pb-8 text-center text-2xl font-bold text-violet-light/80">
        {projet.name}
      </div>
    </div>
  )
}

function CarteProjet({ projet }: { projet: Projet }) {
  return (
    <article className="flex flex-col rounded-2xl border border-violet/25 bg-surface/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-[0_20px_50px_-20px_rgb(139_92_246/0.6)]">
      <div className="relative">
        <Visuel projet={projet} />
        {projet.inProgress && (
          <span className="absolute top-3 right-3 rounded-full bg-bg/90 px-3 py-1 text-xs font-semibold text-violet-light ring-1 ring-violet/50">
            En développement
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold">{projet.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{projet.summary}</p>

      {/* Fonctionnalités : coche si terminée, cercle pointillé si en cours */}
      <ul className="mt-4 space-y-1.5 text-sm">
        {projet.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2">
            {f.done ? (
              <CircleCheck className="size-4 shrink-0 text-violet-light" />
            ) : (
              <CircleDashed className="size-4 shrink-0 text-muted" />
            )}
            <span className={f.done ? 'text-ink' : 'text-muted'}>
              {f.label}
              {!f.done && <span className="text-muted/70"> (en cours)</span>}
            </span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {projet.stack.map((techno) => (
          <li key={techno} className="rounded-md bg-violet/10 px-2.5 py-1 text-xs text-violet-light ring-1 ring-violet/25">
            {techno}
          </li>
        ))}
      </ul>

      {/* Liens : affichés seulement s'ils existent */}
      {(projet.demo || projet.repo) && (
        <div className="mt-auto flex justify-end gap-5 pt-6 text-sm font-semibold">
          {projet.demo && (
            <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-violet-light hover:text-ink">
              Démo <ExternalLink className="size-4" />
            </a>
          )}
          {projet.repo && (
            <a href={projet.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-violet-light hover:text-ink">
              GitHub <GithubIcon className="size-4" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section id="projets" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle
        title="Projets"
        intro="Des applications et des sites conçus pour répondre à des besoins concrets."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((projet) => (
          <CarteProjet key={projet.name} projet={projet} />
        ))}
      </div>
    </section>
  )
}