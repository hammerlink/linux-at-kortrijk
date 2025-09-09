import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Oefeningen' })

const EXERCISES: { id: number; nav: string; title: string }[] = [
  { id: 1, nav: '001-change-password', title: 'Paswoord wijzigen' },
  { id: 2, nav: '002-create-user', title: 'Gebruiker aanmaken' },
  { id: 3, nav: '003-background-change', title: 'Achtergrond wijzigen' },
  { id: 4, nav: '004-file-explorer', title: 'Verkenner - bestanden beheren' },
  { id: 5, nav: '005-pictures', title: "Werken met foto's" },
  { id: 6, nav: '006-web', title: 'Surfen op het web' },
  { id: 7, nav: '007-mails', title: 'Mails gebruiken' },
  { id: 8, nav: '008-libre-office', title: 'Office: Word, Excel...' },
  { id: 9, nav: '009-software', title: 'Software installeren' },
  { id: 10, nav: '010-gimp', title: "Foto's bewerken met GIMP" },
]

export default function Exercises() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl dark:text-gray-100">
          Linux Oefeningen
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Dit is een overzicht van basistaken die je stap voor stap kunt uitproberen. Hiervoor
          voorzien we een USB-stick met een voorgeïnstalleerde Linux Mint versie, maar je kunt de
          oefeningen ook rechtstreeks op je eigen systeem uitvoeren, bij voorkeur met Linux Mint 22.
          Zo maak je kennis met Linux als een toegankelijk en gebruiksvriendelijk systeem voor
          alledaags computergebruik.
        </p>
      </div>

      <div className="py-6">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXERCISES.map((ex) => (
            <li
              key={ex.id}
              className="rounded-2xl border p-4 transition hover:shadow-sm dark:border-gray-700"
            >
              <a
                href={`/exercises/${ex.nav || ex.id}`}
                className="block text-lg font-semibold dark:text-gray-100"
              >
                {ex.id}. {ex.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
