import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-line">
      <div className="flex flex-col items-center justify-between gap-4 px-8 py-8 text-sm text-muted sm:flex-row sm:px-14 lg:px-22">
        <p>
          © {annee} {profile.name}. Développeuse web et mobile.
        </p>

        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-violet-light">
            <GithubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-violet-light">
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
