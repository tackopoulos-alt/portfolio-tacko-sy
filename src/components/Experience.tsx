import { Briefcase } from 'lucide-react'
import { experiences } from '../data/content'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  return (
    <section id="experiences" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle
        title="Expériences"
        intro="Mon parcours professionnel, de la création de sites à leur maintenance."
      />

      <ol className="relative mx-auto max-w-3xl border-l border-violet/30 pl-8 sm:pl-10">
        {experiences.map((exp) => (
          <li key={exp.role + exp.organization} className="relative pb-12 last:pb-0">
            {/* Pastille sur la ligne verticale */}
            <span className="absolute top-0 -left-[3.05rem] grid size-9 place-items-center rounded-full border border-violet/50 bg-bg text-violet-light sm:-left-[3.55rem]">
              <Briefcase className="size-4" />
            </span>

            <div className="rounded-2xl border border-violet/25 bg-surface/80 p-6 transition duration-300 hover:border-violet/60">
              {exp.period && (
                <p className="text-sm font-semibold text-violet-light">{exp.period}</p>
              )}

              <h3 className="mt-1 text-xl font-semibold">{exp.role}</h3>
              <p className="text-muted">{exp.organization}</p>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-violet">
                {exp.missions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
