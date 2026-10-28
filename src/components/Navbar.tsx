import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export function Navbar() {
  const [active, setActive] = useState('accueil')
  const [open, setOpen] = useState(false)

  // Surveille quelle section est au milieu de l'écran
  useEffect(() => {
    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (entree.isIntersecting) setActive(entree.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id)
      if (section) observateur.observe(section)
    })

    return () => observateur.disconnect()
  }, [])

  function choisir(id: string) {
    setActive(id)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5 lg:px-16">
      <nav className="relative flex w-full items-center justify-between rounded-2xl border border-violet/40 bg-gradient-to-r from-violet/15 via-surface/60 to-surface/60 px-4 py-3 shadow-[0_0_35px_-8px_rgb(139_92_246/0.6)] backdrop-blur-xl sm:px-6 sm:py-3.5">
        {/* Fine ligne de lumière en haut */}
        <span className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-violet-light to-transparent" />

        <a href="#accueil" onClick={() => choisir('accueil')} className="text-xl font-semibold tracking-tight sm:text-2xl">
          {profile.name}
        </a>

        {/* Liens : visibles seulement sur grand écran */}
        <ul className="hidden gap-2 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => choisir(link.id)}
                className={`relative px-3 py-2 text-sm transition-colors hover:text-violet-light ${
                  active === link.id ? 'text-violet-light' : 'text-ink/85'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-violet" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Bouton CV : caché sur téléphone */}
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-xl border border-violet-light/40 bg-gradient-to-r from-violet to-violet-light/80 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgb(139_92_246/0.7)] transition hover:brightness-110 sm:inline-flex"
          >
            Télécharger mon CV
            <Download className="size-4" />
          </a>

          {/* Bouton menu : visible seulement sur petit écran */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className="rounded-lg p-2 text-ink transition hover:bg-violet/20 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Menu déroulant pour petit écran */}
      {open && (
        <div className="mt-2 w-full rounded-2xl border border-violet/40 bg-surface/95 p-3 shadow-[0_0_35px_-8px_rgb(139_92_246/0.6)] backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => choisir(link.id)}
                  className={`block rounded-lg px-4 py-3 transition-colors hover:text-violet-light ${
                    active === link.id ? 'bg-violet/15 text-violet-light' : 'text-ink/85'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton CV dans le menu, seulement sur téléphone */}
          <a
            href={profile.cv}
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-violet-light/80 px-4 py-3 font-medium text-white sm:hidden"
          >
            Télécharger mon CV
            <Download className="size-4" />
          </a>
        </div>
      )}
    </header>
  )
}