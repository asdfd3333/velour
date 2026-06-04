// Velour — Productcatalogus

export const categories = [
  {
    id: 'woody',
    name: 'Woody & Warm',
    slug: 'woody-warm',
    description:
      'Geuren gebouwd op hout, hars en rook. Warm, aards en tijdloos — voor wie sporen wil achterlaten.',
  },
  {
    id: 'floral',
    name: 'Floral & Abstract',
    slug: 'floral-abstract',
    description:
      'Bloemen zoals je ze nooit geroken hebt. Geen boeketjes, maar karakters. Onverwacht, complex en onvergetelijk.',
  },
]

export const products = [
  {
    id: 'p1',
    name: 'Cendres',
    slug: 'cendres',
    category: 'woody',
    type: 'simple',
    price: 149,
    shortDescription:
      'Een as-koude opening van bergamot en gerookt ceder, die langzaam opwarmt tot amberhouten diepte.',
    longDescription: `Cendres — Frans voor "as" — opent met de koelheid van bergamot die langzaam oplost in gerookt cederhout. Op het hart verschijnt een laag van labdanum en benzoe, warm als smeulend vuur. De afdronk is lang, diep en meditatief: een combinatie van sandelhout, musk en een vleugje oud.

Dit is geen parfum voor de massa. Cendres is gemaakt voor momenten van stilte — een avond thuis, een lange rit, een gesprek dat nergens naartoe hoeft. Het is de geur van iets dat net is uitgedoofd, maar nog nagloeit.

Noten: bergamot, gerookt ceder, labdanum, benzoe, sandelhout, oud, witte musk.
Concentratie: Eau de Parfum — 20% geurstof.
Inhoud: 50ml.`,
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80',
      'https://images.unsplash.com/photo-1600612253971-32b1fbc3af35?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Brume',
    slug: 'brume',
    category: 'woody',
    type: 'variable',
    variants: [
      { label: '30ml', price: 89 },
      { label: '50ml', price: 149 },
      { label: '100ml', price: 219 },
    ],
    price: 149,
    shortDescription:
      'Ochtendmist boven water — groen, vochtig en mineraal, met een diepe basis van vetiver en mosachtig patchouli.',
    longDescription: `Brume is geboren uit het beeld van mist boven een stille rivier bij zonsopkomst. De opening is fris en groen: viooltjesblad, komkommer en een vleugje bergamot. Het hart ontvouwt zich langzaam — waterige iris, witte thee en een haast onmerkbaar rozenaccord.

De basis vertelt het echte verhaal: vetiver, mosachtig patchouli en ambergrijs geven Brume zijn gewicht en blijvende aanwezigheid. Dit is een geur die verandert met je huid, die 's ochtends anders ruikt dan 's avonds.

Noten: viooltjesblad, komkommer, bergamot, iris, witte thee, roos, vetiver, patchouli, ambergrijs.
Concentratie: Eau de Parfum — 18% geurstof.
Inhoud: keuze uit 30ml, 50ml of 100ml.`,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&q=80',
      'https://images.unsplash.com/photo-1616604426203-b7893104e5e4?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Sève',
    slug: 'seve',
    category: 'woody',
    type: 'simple',
    price: 129,
    shortDescription:
      'Rauwe dennenhars, groene sap en aarde na regen. Een bosgeur die ruikt alsof je er middenin staat.',
    longDescription: `Sève — sap — is het meest directe parfum in de Velour collectie. Geen omwegen. De opening is onmiddellijk en scherp: groene dennennaalden, barnsteenachtige hars en een vleugje citrus. Op het hart verschijnt een warme laag van cedarwood Virginia en een subtiel rookaccord.

De basis is aards en grondend: vetiverwortel, zwarte peper en een donkere toets van patchouli zorgen ervoor dat Sève lang blijft hangen — op je huid, je kleding, in een ruimte.

Dit parfum is voor buitenmensen en binnendenkers. Voor wie de natuur mee naar binnen wil nemen.

Noten: dennennaalden, hars, bergamot, cedarwood, rook, vetiver, zwarte peper, patchouli.
Concentratie: Eau de Parfum — 19% geurstof.
Inhoud: 50ml.`,
    images: [
      'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80',
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Murmure',
    slug: 'murmure',
    category: 'floral',
    type: 'variable',
    variants: [
      { label: '30ml', price: 95 },
      { label: '50ml', price: 159 },
    ],
    price: 159,
    shortDescription:
      'Een gefluisterd bloemaccord van iris en viooltje, gedragen door een wolk van poederachtige musk.',
    longDescription: `Murmure is zacht op de manier waarop alleen de meest zelfverzekerde geuren zacht kunnen zijn. De opening is poederig en sereen: iris, viooltjesblad en een haast onzichtbaar rozenaccord. Geen luidruchtige bloemen — alles fluistert.

Het hart is het meest complexe onderdeel van Murmure: ylang-ylang in de allerkleinste hoeveelheid geeft warmte zonder te overheersen. Witte musk en civet in de basis geven het parfum een bijna huidachtige intimiteit.

Murmure ruikt anders op iedereen. Dat is precies de bedoeling.

Noten: iris, viooltjesblad, roos, ylang-ylang, witte musk, civet, ambrette.
Concentratie: Eau de Parfum — 21% geurstof.
Inhoud: keuze uit 30ml of 50ml.`,
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80',
      'https://images.unsplash.com/photo-1588514912908-b4e8e0a8bdfa?w=800&q=80',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Lacune',
    slug: 'lacune',
    category: 'floral',
    type: 'simple',
    price: 169,
    shortDescription:
      'Een leegte vol betekenis. Witte bloemen, ozon en een vleugje teer op een basis van ambergris.',
    longDescription: `Lacune betekent "leegte" of "hiaat" — en dat is precies wat dit parfum uitdrukt. Een geur vol ruimte, vol stilte tussen de noten. De opening is wit en bijna klinisch: witte magnolia, ozon en een vleugje zout. Het voelt als een lege kamer met open ramen aan zee.

Op het hart verschijnt jasmine absolute — niet zoetig, maar groen en bijna dierlijk. Gecombineerd met een vleugje benzine (ja, benzine) creëert Lacune een onverwachte spanning die moeilijk te vergeten is.

De basis van ambergris, witte musk en een spoortje teer verankert alles. Dit is het parfum voor wie houdt van de ruimte tussen woorden.

Noten: witte magnolia, ozon, zout, jasmine absolute, benzine, ambergris, witte musk, teer.
Concentratie: Extrait de Parfum — 30% geurstof.
Inhoud: 50ml.`,
    images: [
      'https://images.unsplash.com/photo-1590156562745-5d53b8c15585?w=800&q=80',
      'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?w=800&q=80',
      'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=800&q=80',
    ],
    inStock: false,
  },
  {
    id: 'p6',
    name: 'Trame',
    slug: 'trame',
    category: 'floral',
    type: 'simple',
    price: 139,
    shortDescription:
      'Gedroogde bloemen, rokerige thee en een lange basis van tonkaboon en sandelhout.',
    longDescription: `Trame — weefsel, structuur — is opgebouwd als een tapijt van lagen. De opening is droog en florale: gedroogde roos, kamille en een vleugje honing. Warm maar niet zoet. Zacht maar niet timide.

Het hart brengt een rokerige lapsang souchong-thee die de bloemen in een ander licht plaatst — plotseling voelen ze ouder, meer doorleefd. Een accord van vanille en tonkaboon in de basis geeft Trame zijn ronde, omarmende karakter.

Dit is een avondparfum. Een parfum voor mensen die de tijd nemen.

Noten: gedroogde roos, kamille, honing, lapsang souchong thee, vanille, tonkaboon, sandelhout, musk.
Concentratie: Eau de Parfum — 22% geurstof.
Inhoud: 50ml.`,
    images: [
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
      'https://images.unsplash.com/photo-1588514913813-5a3d5e85c8eb?w=800&q=80',
    ],
    inStock: true,
  },
]
