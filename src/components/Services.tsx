import { ArrowUpRight, Code, Layers, LayoutTemplate, MonitorSmartphone, RefreshCw, Store } from 'lucide-react'
import { services } from '../data/content'
import { SectionTitle } from './SectionTitle'

const icones = {
  site: Store,
  responsive: MonitorSmartphone,
  maquette: LayoutTemplate,
  code: Code,
  maintenance: RefreshCw,
  fullstack: Layers,
}

export function Services() {
  return (
    <section id="services" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle
        title="Services"
        intro="Vous avez un projet web ? Voici comment je peux vous aider."
      />

      <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icone = icones[service.icon as keyof typeof icones]

          return (
            <li
              key={service.title}
              className="group rounded-2xl border border-violet/25 bg-surface/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/60 hover:shadow-[0_20px_50px_-20px_rgb(139_92_246/0.6)]"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-violet/15 text-violet-light transition group-hover:bg-violet group-hover:text-white">
                <Icone className="size-6" />
              </span>

              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </li>
          )
        })}
      </ul>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgb(139_92_246/0.7)] transition hover:-translate-y-0.5 hover:bg-violet-light"
        >
          Parlons de votre projet
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
