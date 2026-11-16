// The team, as each person describes themselves. Change a person's text only with their say.
export interface Member {
  name: string;
  role: string;
  photo: string;
  link: { href: string; label: string };
  bio: string[];
}

export const TEAM: Member[] = [
  {
    name: 'Alberto De Luigi',
    role: 'Co-Founder and Product Lead',
    photo: 'img/team/alberto-de-luigi.png',
    link: { href: 'https://www.linkedin.com/in/albertodeluigi/', label: 'LinkedIn' },
    bio: [
      'Alberto is the conceptual creator of Sequentia, as well as the author of its technical documentation and a co-founder of Concatena Labs.',
      'Alberto graduated with a Master’s Degree in Economics and Political Science from the University of Milan as well as Harvard University’s ‘Computer Science 50’ course, went on to work as an IT project consultant and led some major acquisition projects at Accenture.',
    ],
  },
  {
    name: 'Andreas Kohl',
    role: 'Co-Founder and Business Lead',
    photo: 'img/team/andreas-kohl.png',
    link: { href: 'https://www.linkedin.com/in/andreas-kohl/', label: 'LinkedIn' },
    bio: [
      'Andreas is the architect of the organizational structure and business strategies that support Sequentia through Concatena Labs, of which he is the CEO.',
      'Andreas is a self-taught former accountant, public policy analyst, and prize-winning Austrian Economist, recognised for writing about Liechtenstein’s unique political model. He launched his first Bitcoin start-up in 2013 and has also since joined the first wave of Bitcoiners in El Salvador.',
    ],
  },
  {
    name: 'Alex Voss',
    role: 'Financial Oversight',
    photo: 'img/team/alex-voss.png',
    link: { href: 'https://www.linkedin.com/in/alex-voss/', label: 'LinkedIn' },
    bio: [
      'Alex is Concatena Labs’ CFO and oversees the company’s financial strategy, including budget management and alignment of company resources with Sequentia’s advancement.',
      'Alex has degrees in Economics, Finance, and Austrian Economics. He also serves as CFO of Tipolis, the world-leading owner-operator and developer of Free Private Cities. His prior work experience is in asset management and M&A.',
    ],
  },
  {
    name: 'Mihailo Milenković',
    role: 'Chief Technology Officer',
    photo: 'img/team/mihailo-milenkovic.png',
    link: { href: 'https://www.linkedin.com/in/mihailomilenkovic/', label: 'LinkedIn' },
    bio: [
      'Mihailo, driven by curiosity for unraveling intricate systems, gravitated towards understanding the inner workings of technology. With experience in embedded development spanning various hardware platforms, he smoothly transitioned into core blockchain development. Specializing in integrating new custom consensus features into Bitcoin protocol-based blockchains, he remains dedicated to pushing the boundaries of innovation in this field.',
    ],
  },
  {
    name: 'Miloš Kresovic',
    role: 'Front-End Development',
    photo: 'img/team/milos-kresovic.png',
    link: { href: 'https://www.linkedin.com/in/kresovicmilos/', label: 'LinkedIn' },
    bio: [
      'Miloš currently leads the development of Sequentia’s Ambra wallet at Concatena Labs.',
      'Miloš is a seasoned software developer whose technical expertise spans multiple programming languages. He has held senior roles at DeFiChain/CakeDeFi, GameCredits, and Amazon as a member of the FireTV team. He holds an MSc in IT and helps organize the Flutter Serbia and Android Serbia meetups. In 2016, he won the IEEE Brain Computer Interface Hackathon.',
    ],
  },
  {
    name: 'François-René Rideau',
    role: 'Protocol Architecture and Engineering',
    photo: 'img/team/francois-rene-rideau.png',
    link: { href: 'https://www.linkedin.com/in/fahree/', label: 'LinkedIn' },
    bio: [
      'François-René is contributing to the design and implementation of Sequentia’s core features. He is the President and Chief Scientist of Mukn, which has partnered with Concatena Labs for the development of Sequentia.',
      'François-René is a Software Entrepreneur and Researcher specialized in Programming Languages, Distributed Systems, and Cooperation in Adversarial Environments, with prior experience in the Industry at Google, Bridgewater, and several cryptocurrency startups.',
    ],
  },
  {
    name: 'Fabio Cacciola',
    role: 'Graphic Design',
    photo: 'img/team/fabio-cacciola.png',
    link: { href: 'https://www.behance.net/conocane', label: 'Behance' },
    bio: [
      'Fabio oversees the visual development of various projects at Concatena Labs, especially the Ambra Wallet.',
      'Fabio has collaborated with various companies in the blockchain industry. Fabio’s blockchain journey began as a community manager, where he honed his ability to connect with audiences and learned how to serve the needs of the industry in several other areas, such as marketing and graphics. He draws inspiration from the vibrant world of pop culture, infusing his work with a touch of fantasy and playfulness, blending technical expertise with artistic flair.',
    ],
  },
  {
    name: 'Joe Betz',
    role: 'Advisor',
    photo: 'img/team/joe-betz.png',
    link: { href: 'https://www.linkedin.com/in/joe-betz-70b79576', label: 'LinkedIn' },
    bio: [
      'Joe is a former engineer at Mukn who made several contributions to and still occasionally advises on the design and implementation of Sequentia’s core features.',
      'Joe is a systems programmer with a broad range of experience across the industry. He enjoys solving fundamental and far-reaching problems, and is passionate about any opportunity to make the world more reprogrammable, whether through money, music, or software itself.',
    ],
  },
  {
    name: 'Steven Roose',
    role: 'Advisor',
    photo: 'img/team/steven-roose.png',
    link: { href: 'https://github.com/stevenroose', label: 'GitHub' },
    bio: [
      'Steven is advising Sequentia protocol developers, and sharing his highly specialized knowledge of the Elements codebase.',
      'Steven is an experienced developer who has contributed to Bitcoin for over 10 years and spent 5 years working on Liquid and Elements at Blockstream. He is perhaps best known as a proponent and author of the TXHASH proposal and for his ongoing work on the Ark Protocol.',
    ],
  },
];
