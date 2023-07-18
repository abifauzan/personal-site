import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'
import RepositoryCard from '@/components/RepositoryCard'

const HeroPhoto = ({ main }) => (
  <>
    {main.images?.[0] && (
      <div className="hidden md:block">
        <Image
          src={main.images[0].src}
          width={main.images[0].width}
          height={main.images[0].height}
          alt={main.images[0].alt}
          animation="slide-in-top fade-in"
          priority
        />
      </div>
    )}
    {main.images?.[1] && (
      <div className="md:hidden">
        <Image
          src={main.images[1].src}
          width={main.images[1].width}
          height={main.images[1].height}
          alt={main.images[1].alt}
          className="mx-auto"
          priority
        />
      </div>
    )}
  </>
)

const HeroAbout = ({ main }) => (
  <Reveal
    animation="fade-in slide-in-right"
    className={classNames(
      'prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden',
      'prose-headings:my-6 prose-pre:max-w-[100vw] md:prose-p:block md:prose-pre:max-w-lg'
    )}
  >
    <ContentRenderer source={main} />
  </Reveal>
)

const Achievements = ({ achievements }) => (
  <div
    className={classNames(
      'prose prose-invert hidden grow grid-cols-2 gap-2 sm:grid md:gap-6 md:pr-6'
    )}
  >
    {achievements?.map((item, i) => (
      <div key={i} className="flex flex-col items-center justify-center md:flex-row">
        <h2 className="m-0 text-white md:pr-4">{item.number}</h2>
        <div className="dark:text-accent-400">{item.text}</div>
      </div>
    ))}
  </div>
)

const History = ({ title, list }) => (
  <>
    <h3>{title}</h3>
    <Reveal
      animation="fade-in scale-x"
      className="h-1.5 bg-gradient-to-r from-black via-beta to-alpha"
    />
    <div className="mt-6 flex flex-col md:mt-12">
      {list?.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          <div className="flex" key={`item-${i}`}>
            <div>
              <h6 className="pr-1 font-medium">{item.name}</h6>
              <div>{item.description}</div>
            </div>
            <small className="ml-auto shrink-0 opacity-60">{item.date}</small>
          </div>
          <hr className="my-6" />
        </React.Fragment>
      ))}
    </div>
  </>
)

const projectsDummy = [
  {
      "name": "leerob.io",
      "owner": "leerob",
      "url": "https://github.com/leerob/leerob.io",
      "description": "âœ¨  My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.",
      "language": "TypeScript, Javascript, React, Tailwind, Redux, Framer",
      "stars": 5824,
      "forks": 1173
  },
  {
      "name": "mdx-deck",
      "owner": "jxnblk",
      "url": "https://github.com/jxnblk/mdx-deck",
      "description": "â™ ï¸ React MDX-based presentation decks",
      "language": "JavaScript",
      "stars": 11115,
      "forks": 664
  },
  {
      "name": "og-image",
      "owner": "vercel",
      "url": "https://github.com/vercel/og-image",
      "description": "Open Graph Image as a Service - generate cards for Twitter, Facebook, Slack, etc",
      "language": "TypeScript",
      "stars": 4001,
      "forks": 1291
  },
  {
      "name": "leerob.io",
      "owner": "leerob",
      "url": "https://github.com/leerob/leerob.io",
      "description": "âœ¨  My portfolio built with Next.js, Tailwind CSS, PlanetScale, and Vercel.",
      "language": "TypeScript",
      "stars": 5824,
      "forks": 1173
  },
  {
      "name": "mdx-deck",
      "owner": "jxnblk",
      "url": "https://github.com/jxnblk/mdx-deck",
      "description": "â™ ï¸ React MDX-based presentation decks",
      "language": "JavaScript",
      "stars": 11115,
      "forks": 664
  },
  {
      "name": "og-image",
      "owner": "vercel",
      "url": "https://github.com/vercel/og-image",
      "description": "Open Graph Image as a Service - generate cards for Twitter, Facebook, Slack, etc",
      "language": "TypeScript",
      "stars": 4001,
      "forks": 1291
  },
  {
      "name": "mdx-deck",
      "owner": "jxnblk",
      "url": "https://github.com/jxnblk/mdx-deck",
      "description": "â™ ï¸ React MDX-based presentation decks",
      "language": "JavaScript",
      "stars": 11115,
      "forks": 664
  },
  {
      "name": "og-image",
      "owner": "vercel",
      "url": "https://github.com/vercel/og-image",
      "description": "Open Graph Image as a Service - generate cards for Twitter, Facebook, Slack, etc",
      "language": "TypeScript",
      "stars": 4001,
      "forks": 1291
  },
]

const histories = [
  {
      "title": "Employment",
      "list": [
          {
              "name": "SIRCLO",
              "description": "Software Engineer",
              "date": "Jul 2022 - Present"
          },
          {
              "name": "Bibit.id",
              "description": "Frontend Engineer",
              "date": "Nov 2021 - Jul 2022"
          },
          {
              "name": "WEEKEND Inc.",
              "description": "Front-End Developer",
              "date": "Aug 2020 - Nov 2021"
          }
      ],
      "content": null
  },
  {
      "title": "Education",
      "list": [
          {
              "name": "Universitas Mercu Buana",
              "description": "Bsc (Computer Science)",
              "date": "2016 - 2020"
          },
          {
              "name": "SMK Negeri 5 Tangerang",
              "description": "Vocational High School (Software Engineer)",
              "date": "2013-2016"
          },
      ],
      "content": null
  }
]

const Layout = ({ main = {}, cta = {}, achievements = [], companies, contact }) => {
  return (
    <>
      <div className="mx-auto my-auto py-4 md:p-10 lg:p-20 relative">
        <div className="absolute right-0 top-0 box-content hidden h-full w-1/4 bg-gradient-to-br from-alpha-100 via-alpha to-beta pl-5 md:block" />
        <div className="items-end text-center md:flex md:text-left">
          <div className="relative shrink-0 basis-1/2 text-center md:order-2 md:-ml-20">
            <HeroPhoto main={main} />
          </div>
          <div className="z-10 mt-6 basis-full md:mb-12 md:mt-0">
            <HeroAbout main={main} />
          </div>
        </div>
        <div className="relative z-10">
          <Sep line className="hidden md:block" />
          <div
            className={classNames(
              'md:bg-gradient-omega-900 flex flex-wrap items-center justify-between',
              'px-4 md:p-8 md:shadow-xl'
            )}
          >
            <Achievements achievements={achievements} />
            <div className="prose prose-invert grow text-center">
              <a className="relative inline-flex items-center justify-center leading-normal no-underline group cursor-pointer select-none focus:outline-none peer md:peer-even:ml-6" href="/contact">
                <div className="z-10 h-full w-full border-4 border-transparent group-active:border-alpha flex transform-gpu transition-transform not-prose font-mono py-4 px-8 text-base hover:translate-x-2 hover:translate-y-2 bg-white text-black">
                  <span className="mx-auto">Download Resume</span>
                </div>
                <div className="absolute h-full w-full bg-gradient-to-r from-alpha via-alpha-300 to-beta top-2 left-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    
      <div className='w-[80%] flex flex-col text-white pb-4 md:py-10 lg:py-24'>
        <h2 className='text-left'>My Latest Projects</h2>
        <div className="w-full mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:20rem] md:mt-12 md:gap-6">
          {projectsDummy.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
  
      <div className="w-full prose flex-wrap justify-between bg-white p-6 md:flex">
        {histories.map((props, i) => (
          <div key={i} className="flex-1 md:p-12">
            <History {...props} />
          </div>
        ))}
      </div>

      <div className='py-12'>
        <Reveal
          animation="fade-in slide-in-right"
          className="prose prose-invert basis-1/3 lg:mr-14"
        >
          <ContentRenderer source={contact} />
        </Reveal>
      </div>
    </>
  )
}

export default Layout
