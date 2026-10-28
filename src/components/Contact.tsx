import { useState, type FormEvent } from 'react'
import { CircleAlert, CircleCheck, LoaderCircle, Mail, Send } from 'lucide-react'
import { formspreeEndpoint, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { SectionTitle } from './SectionTitle'

type Champs = { nom: string; email: string; objet: string; message: string }
type Erreurs = Partial<Record<keyof Champs, string>>
type Statut = 'attente' | 'envoi' | 'succes' | 'erreur'

const vide: Champs = { nom: '', email: '', objet: '', message: '' }

// Vérifie chaque champ et renvoie la liste des erreurs
function valider(c: Champs): Erreurs {
  const e: Erreurs = {}
  if (c.nom.trim().length < 2) e.nom = 'Indiquez votre nom.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = 'Indiquez une adresse e-mail valide.'
  if (c.objet.trim().length < 3) e.objet = 'Indiquez un objet.'
  if (c.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.'
  return e
}

export function Contact() {
  const [champs, setChamps] = useState<Champs>(vide)
  const [erreurs, setErreurs] = useState<Erreurs>({})
  const [statut, setStatut] = useState<Statut>('attente')
  const [piege, setPiege] = useState('')

  function modifier(cle: keyof Champs, valeur: string) {
    setChamps({ ...champs, [cle]: valeur })
    setErreurs({ ...erreurs, [cle]: undefined })
  }

  async function envoyer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trouvees = valider(champs)
    setErreurs(trouvees)
    if (Object.keys(trouvees).length > 0) return

    setStatut('envoi')
    try {
      const reponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...champs,
          _subject: `Portfolio : ${champs.objet}`,
          _gotcha: piege, // champ anti-robots vérifié par Formspree
        }),
      })
      if (!reponse.ok) throw new Error()
      setStatut('succes')
      setChamps(vide)
    } catch {
      setStatut('erreur')
    }
  }

  const styleChamp = (cle: keyof Champs) =>
    `mt-2 w-full rounded-xl border bg-bg px-4 py-3 text-ink outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/30 ${
      erreurs[cle] ? 'border-red-400' : 'border-line'
    }`

  return (
    <section id="contact" className="px-8 py-20 sm:px-14 lg:px-22">
      <SectionTitle
        title="Contact"
        intro="Une offre de stage, d'emploi ou un projet de site ? Écrivez-moi, je vous réponds rapidement."
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.6fr]">
        {/* Colonne de gauche : moyens de contact */}
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-2xl border border-violet/25 bg-surface/80 p-5 transition hover:border-violet/60">
            <Mail className="size-6 shrink-0 text-violet-light" />
            <span className="min-w-0">
              <span className="block text-sm text-muted">E-mail</span>
              <span className="block font-semibold break-all">{profile.email}</span>
            </span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-violet/25 bg-surface/80 p-5 transition hover:border-violet/60">
            <LinkedinIcon className="size-6 text-violet-light" />
            <span className="font-semibold">LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-violet/25 bg-surface/80 p-5 transition hover:border-violet/60">
            <GithubIcon className="size-6 text-violet-light" />
            <span className="font-semibold">GitHub</span>
          </a>
        </div>

        {/* Colonne de droite : formulaire */}
        <form noValidate onSubmit={envoyer} className="relative rounded-2xl border border-violet/25 bg-surface/80 p-6 sm:p-8">
          {/* Champ piège invisible pour les robots */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={piege}
            onChange={(e) => setPiege(e.target.value)}
            className="absolute -left-[9999px]"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nom" className="text-sm font-semibold">Nom</label>
              <input id="nom" name="nom" type="text" autoComplete="name" value={champs.nom} onChange={(e) => modifier('nom', e.target.value)} className={styleChamp('nom')} />
              {erreurs.nom && <p className="mt-1.5 text-sm text-red-300">{erreurs.nom}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
              <input id="email" name="email" type="email" autoComplete="email" value={champs.email} onChange={(e) => modifier('email', e.target.value)} className={styleChamp('email')} />
              {erreurs.email && <p className="mt-1.5 text-sm text-red-300">{erreurs.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="objet" className="text-sm font-semibold">Objet</label>
            <input id="objet" name="objet" type="text" value={champs.objet} onChange={(e) => modifier('objet', e.target.value)} className={styleChamp('objet')} />
            {erreurs.objet && <p className="mt-1.5 text-sm text-red-300">{erreurs.objet}</p>}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows={6} value={champs.message} onChange={(e) => modifier('message', e.target.value)} className={`${styleChamp('message')} resize-y`} />
            {erreurs.message && <p className="mt-1.5 text-sm text-red-300">{erreurs.message}</p>}
          </div>

          <button
            type="submit"
            disabled={statut === 'envoi'}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet px-6 py-3.5 font-semibold text-white transition hover:bg-violet-light disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {statut === 'envoi' ? (
              <>Envoi en cours <LoaderCircle className="size-4 animate-spin" /></>
            ) : (
              <>Envoyer le message <Send className="size-4" /></>
            )}
          </button>

          {/* Message de retour après l'envoi */}
          <div aria-live="polite" className="mt-5">
            {statut === 'succes' && (
              <p className="flex items-start gap-2 rounded-xl bg-emerald-500/10 p-4 text-emerald-300">
                <CircleCheck className="mt-0.5 size-5 shrink-0" />
                Message envoyé ! Je vous réponds dès que possible.
              </p>
            )}
            {statut === 'erreur' && (
              <p className="flex items-start gap-2 rounded-xl bg-red-500/10 p-4 text-red-300">
                <CircleAlert className="mt-0.5 size-5 shrink-0" />
                <span>
                  Le message n'a pas pu être envoyé. Réessayez ou écrivez-moi directement à{' '}
                  <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}