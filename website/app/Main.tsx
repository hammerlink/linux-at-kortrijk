import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="space-y-6 pb-8">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Welkom bij Linux @ Kortrijk
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Wat je ook doet op je computer (surfen, werken, creëren of gewoon alles daartussen)
              met Linux kan het minstens even goed. Betrouwbaar, gebruiksvriendelijk en helemaal
              gratis. Wij zorgen voor begeleiding en installatiehulp, zodat jij vlot en zonder
              zorgen de overstap maakt.
            </p>
            <h2 className="text-xl leading-8 font-bold text-gray-900 dark:text-gray-100">
              Van Windows 10 naar een toekomst met Linux
            </h2>

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              In oktober stopt Microsoft de ondersteuning voor Windows 10. Dat betekent: geen
              updates meer, minder veiligheid, en vaak de drang om nieuwe hardware te kopen. Maar
              dat is nergens voor nodig.
            </p>

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Linux @ Kortrijk maakt deel uit van de{' '}
              <Link
                href="https://endof10.org"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                End of 10
              </Link>
              -campagne. Dat is een initiatief om mensen te helpen vlot, veilig en bewust over te
              stappen naar Linux: een krachtig, betrouwbaar en gratis besturingssysteem dat werkt op
              élke computer.
            </p>

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Onze missie sluit ook aan bij de Eurostack-visie: een digitale toekomst waarin Europa
              minder afhankelijk is van grote Amerikaanse techbedrijven. Door open source software
              te gebruiken, nemen we controle over onze eigen technologie, zonder spyware,
              advertenties of ongewenste AI-functies.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Wat doen wij?</h3>

              <div className="space-y-2">
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Informeren:
                  </span>{' '}
                  We leggen uit waarom het einde van Windows 10 geen probleem is, maar een kans. Je
                  ontdekt de voordelen van Linux, open source software en digitale autonomie.
                </p>

                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Demo's:</span>{' '}
                  Test Linux zelf uit op voorgeïnstalleerde laptops of op je eigen toestel via een
                  USB-stick. Zie hoe eenvoudig en gebruiksvriendelijk het is.
                </p>

                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Installeren:
                  </span>{' '}
                  We helpen je om Linux veilig te installeren, zonder gedoe. Inclusief hulp bij
                  back-ups en het kiezen van de juiste versie.
                </p>

                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Troubleshooting:
                  </span>{' '}
                  Vragen of problemen? We bieden ondersteuning, ook na installatie.
                </p>

                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Gesprekken:
                  </span>{' '}
                  We praten graag over Linux, Desktop Environments, Open Source Software.
                </p>
              </div>
            </div>

            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Of je nu gewoon wilt surfen en e-mails lezen, of je oude laptop nieuw leven wil geven:
              Linux is voor iedereen.
            </p>

            <div className="border-primary-500 border-l-4 pl-4 italic">
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Windows 10 stopt. Jij hoeft dat niet te doen.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Stap mee over, veilig, gratis en klaar voor de toekomst.
              </p>
            </div>
          </div>
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Laatste berichten
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'Geen berichten gevonden.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Gepubliceerd op</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Lees meer: "${title}"`}
                        >
                          Lees meer &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Alle berichten"
          >
            Alle Berichten &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
