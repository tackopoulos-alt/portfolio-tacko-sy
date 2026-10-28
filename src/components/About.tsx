import { GraduationCap } from 'lucide-react'
import { about } from '../data/content'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="a-propos" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle title="À propos" />

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_auto]">
        {/* Texte de présentation */}
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((paragraphe) => (
            <p key={paragraphe}>{paragraphe}</p>
          ))}
        </div>

        {/* Carte : diplôme et qualités */}
        <aside className="h-fit rounded-2xl border border-violet/30 bg-surface/80 p-6 shadow-[0_10px_30px_-12px_rgb(139_92_246/0.5)] md:w-72">
          <span className="grid size-12 place-items-center rounded-xl bg-violet/15 text-violet-light">
            <GraduationCap className="size-6" />
          </span>

          <h3 className="mt-4 font-semibold">{about.diploma}</h3>
          <p className="text-sm text-violet-light">Obtenue en {about.diplomaYear}</p>

          <p className="mt-6 text-sm text-muted">Ce qui me caractérise</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.qualities.map((qualite) => (
              <li key={qualite} className="rounded-full bg-violet/15 px-3 py-1 text-sm text-violet-light">
                {qualite}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
