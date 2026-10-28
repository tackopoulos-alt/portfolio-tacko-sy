import { useState } from 'react'
import { ArrowUpRight, Code, GraduationCap } from 'lucide-react'
import { highlights, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const forme = 'rounded-[42%_58%_63%_37%/41%_44%_56%_59%]'

// Position de chaque carte autour de la photo, sur grand écran
const positions = [
  'lg:top-4 lg:-left-20',
  'lg:top-1/2 lg:-right-10 lg:-translate-y-1/2 xl:-right-24',
  'lg:-bottom-6 lg:-left-6',
]

function IconeCarte({ type }: { type: string }) {
  if (type === 'dispo') {
    return (
      <span className="relative flex size-3">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
      </span>
    )
  }
  if (type === 'diplome') return <GraduationCap className="size-5" />
  return <Code className="size-5" />
}

export function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  const initiales = profile.name
    .split(' ')
    .map((mot) => mot[0])
    .join('')

  return (
    <section
      id="accueil"
      className="grid items-center gap-14 px-8 pt-36 pb-20 sm:px-14 md:grid-cols-[1.2fr_1fr] lg:px-22"
    >
      {/* Colonne de gauche : texte */}
      <div className="order-2 md:order-1">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-3 text-2xl font-semibold text-violet-light sm:text-3xl">
          {profile.title}
        </p>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgb(139_92_246/0.7)] transition hover:-translate-y-0.5 hover:bg-violet-light"
          >
            Découvrir mes projets
            <ArrowUpRight className="size-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-violet-light hover:text-violet-light"
          >
            Me contacter
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon profil GitHub"
            className="rounded-full p-2 text-violet-light transition hover:bg-violet/15 hover:text-ink"
          >
            <GithubIcon className="size-7" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon profil LinkedIn"
            className="rounded-full p-2 text-violet-light transition hover:bg-violet/15 hover:text-ink"
          >
            <LinkedinIcon className="size-7" />
          </a>
        </div>
      </div>

      {/* Colonne de droite : photo + cartes */}
      <div className="relative order-1 flex flex-col items-center md:order-2">
        <div className="relative aspect-square w-56 sm:w-72 lg:w-96">
          {/* Halo lumineux derrière */}
          <div className="absolute -inset-10 rounded-full bg-violet/30 blur-3xl" />

          {/* Contour fin décalé */}
          <div className={`absolute -inset-4 border border-violet-light/40 ${forme}`} />

          {/* Petits losanges décoratifs */}
          <div className="absolute -top-3 right-2 size-10 rotate-45 border border-violet-light/40" />
          <div className="absolute -bottom-4 -left-4 size-7 rotate-45 border border-violet-light/30" />

          {/* Forme violette avec la photo ou les initiales */}
          <div className={`relative size-full overflow-hidden bg-gradient-to-br from-violet to-[#4c2a9e] p-1.5 ${forme}`}>
            {photoOk ? (
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                onError={() => setPhotoOk(false)}
                className={`size-full object-cover ${forme}`}
              />
            ) : (
              <div className={`grid size-full place-items-center bg-surface text-6xl font-bold text-violet-light sm:text-7xl ${forme}`}>
                {initiales}
              </div>
            )}
          </div>
        </div>

        {/* Cartes : en ligne sous la photo sur petit écran, flottantes sur grand écran */}
        <ul className="mt-12 flex flex-wrap justify-center gap-3 lg:mt-0">
          {highlights.map((carte, i) => (
            <li
              key={carte.value}
              className={`flex items-center gap-3 rounded-2xl border border-violet/30 bg-surface/85 px-4 py-3 shadow-[0_10px_30px_-10px_rgb(139_92_246/0.6)] backdrop-blur-md lg:absolute ${positions[i]}`}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-light">
                <IconeCarte type={carte.icon} />
              </span>
              <span>
                <span className="block font-bold">{carte.value}</span>
                <span className="block text-xs text-muted">{carte.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}