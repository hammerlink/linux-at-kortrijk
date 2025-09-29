import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Events' })

export default function Events() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Infosessies in de Bibliotheek
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Kom meer te weten over digitale alternatieven nu Windows 10 stopt.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none pt-4">
        <ul>
          <li>📍 Locatie: Maakbib -1, Bibliotheek Kortrijk</li>
          <li>🕑 Tijdstip: 13:30 – 15:30</li>
          <li>📅 Data: 4 oktober, 15 november, 29 november</li>
        </ul>
      </div>
      <div className="py-6">
        <Image
          src="/static/images/end-of-10.jpg" // Zorg dat dit pad klopt
          alt="End of 10"
          width={400}
          height={200}
          className="mx-auto rounded-xl shadow-md"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none pt-8">
        <p>
          Vanaf oktober 2025 stopt Microsoft de ondersteuning voor Windows 10. Dit betekent dat veel
          toestellen die technisch nog goed functioneren, niet langer veilig zijn of als ‘verouderd’
          worden gezien.
        </p>
        <p>
          In samenwerking met de bibliotheek van Kortrijk organiseren we laagdrempelige infosessies
          om burgers te informeren over mogelijke alternatieven zoals <strong>Linux</strong>, een
          gratis en duurzaam besturingssysteem.
        </p>
        <p>Tijdens de sessies bieden we:</p>
        <ul>
          <li>Informatie over de overstap van Windows naar Linux</li>
          <li>Laptops met Linux om uit te proberen</li>
          <li>De mogelijkheid om Linux tijdelijk op je eigen toestel te testen via USB-stick</li>
          <li>Hulp bij installatie of vragen</li>
        </ul>
        <p>
          Meer info via de officiële pagina van de stad:{' '}
          <a href="https://www.kortrijk.be/formulieren/digitafel-xl-overstappen-naar-linux-mint">
            kortrijk.be
          </a>
          .
        </p>
      </div>
    </div>
  )
}
