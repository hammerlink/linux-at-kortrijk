# Case studie: oudere laptop met windows 10

Datum: 5 juli 2025

## Opkomst

Er was onder meer een wat oudere dame op bezoek die zich zorgen maakte over de
waarschuwingen die ze op haar laptop krijgt omtrent het einde van de windows 10
ondersteuning. Haar laptop is een HP uit 2009: SSD harde schijf van 256Gb, 8Gb
RAM, ... De precieze specs zijn
[hier te vinden](https://itsizer.com/product/hp-probook-645-g1-business-laptop-amd-a6-cpu-8gb-ddr3-ram-256gb-ssd-amd-radeon-hd-14-inch-display-windows-10-pro-refurbished-laptop?srsltid=AfmBOorcUspq0Bfm9djHUpMM6BQTr8FSSP9EVBiPix8un91BudmnhwCv).
Kortom, dit is niet meteen de meest performante laptop, maar voor dagelijks
gebruik (e-mails checken, internet surfen, ...) kan deze laptop zeker nog goed
mee. Door de SSD harde schijf is de opstarttijd aanvaardbaar en is het systeem
nog zeer reactief.

Helaas: na het runnen van
[de compatibiliteitscheck](https://support.microsoft.com/nl-nl/windows/controleren-of-een-apparaat-voldoet-aan-windows-11-systeemvereisten-na-het-wijzigen-van-apparaathardware-f3bc0aeb-6884-41a1-ab57-88258df6812b)
blijkt deze laptop niet meer geschikt voor windows 11. Deze dame heeft nu dus 3
opties:

- Blijven werken op een systeem dat niet meer gesupporteerd wordt
- Een nieuwe laptop kopen
- Een linux distributie installeren

De dame in kwestie zag optie 1 niet zitten. Ze doet haar bankverrichtingen op
deze laptop, en stelt zich vragen omtrent de veiligheid hiervan eens Windows 10
out of support is.

Hierbij moeten we wel de volgende kanttekeningen maken:

- Het internetbankieren waar we hier over spreken verloopt via de browser.
  Windows doet bijgevolg weinig ter zake als het op veiligheid aankomt. Web
  applicaties hebben hun eigen protocollen om het dataverkeer te beveiligen, en
  deze staan in principe los van het besturingssysteem waar ze op draaien.
- Het is ook niet zo dat eensklaps, na de vervaldatum van Windows 10, het
  systeem compleet onveilig wordt. Voor meer info omtrent de
  veiligheidsrisico's, zie ons
  [voorgaande artikel](einde-windows-10-een-mug-of-een-olifant)

> Het einde van Windows 10 betekent niet dat PCs met dit besturingssysteem plots
> niet meer zullen werken.

Toch zijn we in dit geval van mening dat een overstap naar linux hier een goede
oplossing is. De volgende vraag wordt dan: wat is de beste Linux distributie
voor iemand in deze situatie? Het grootste belang hier is dat we geen te grote
_cultuurshock_ veroorzaken. De distro ziet er idealiter gelijkaardig uit als
Windows, en de werking mag ook niet al te verschillend zijn. Dankzij de hulp van
Bernard zijn we dan uitgekomen bij
[Linux Mint](https://linuxmint.com/edition.php?id=319). Hieronder kan je een
voorbeeld zien van hoe zo'n systeem eruit ziet.

![Linux Mint, met de cinnamon desktop omgeving](/static/images/linux-mint.png)

In een volgende sessie zullen we deze laptop omzetten naar Linux Mint. Meer
hierover in een volgende post.
