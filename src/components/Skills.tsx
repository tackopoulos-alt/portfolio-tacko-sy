import { AppWindow, Database, Palette, Server, Wrench } from 'lucide-react'
import { skills } from '../data/content'
import { SectionTitle } from './SectionTitle'

const icones = {
  frontend: AppWindow,
  backend: Server,
  database: Database,
  tools: Wrench,
  design: Palette,
}

export function Skills() {
  return (
    <section id="competences" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle
        title="Compétences"
        intro="Les technologies que j'utilise dans mes projets, du frontend à la mise en ligne."
      />

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map((groupe) => {
          const Icone = icones[groupe.icon as keyof typeof icones]

          return (
            <article
              key={groupe.title}
              className="rounded-2xl border border-violet/25 bg-gradient-to-b from-surface to-bg p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-violet/60"
            >
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-violet/15 text-violet-light">
                <Icone className="size-7" />
              </span>

              <h3 className="mt-4 text-xl font-semibold">{groupe.title}</h3>

              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {groupe.items.map((techno) => (
                  <li
                    key={techno}
                    className="rounded-lg border border-line bg-bg/60 px-2.5 py-1 text-sm text-muted"
                  >
                    {techno}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}