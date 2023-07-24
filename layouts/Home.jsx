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
    {/* {main.images?.[1] && (
      <div className="md:hidden">
        <Image
          src={main.images[1].src}
          width={main.images[1].width}
          height={main.images[1].height}
          alt={main.images[1].alt}
          className="mx-auto my-5"
          priority
        />
      </div>
    )} */}
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

const projects = [
  {
      "name": "My Wedding Website",
      "url": "https://www.abiika.space",
      "description": "My wedding invitation website built with React, Tailwind, i18n and Firebase",
      "language": "Javascript, Tailwind CSS, i18n, Firebase",
  },
  {
    "name": "PXL.GRAM",
    "url": "https://614ca838f142fc00b219d2a2--unruffled-euler-9afbe0.netlify.app/",
    "description": "Albums/Photos app to fetch Album and Photo data with their users relationship from jsonplaceholder.typicode.com",
    "language": "React, redux, framer-motion, styled-components",
  },
  {
    "name": "Pokemart",
    "url": "https://6130d79493e16ec6794ff5a0--elated-mcclintock-36039f.netlify.app/",
    "description": "Website about displaying All Pokemons including legendary pokemon and simulating cathing them based on 50% chance.",
    "language": "React, swiper, framer-motion, styled-components",
  },
  {
    "name": "Netflix UI Clone",
    "url": "https://pair-94-dts-mini-project.netlify.app/",
    "description": "Netflix website clone with Netflix API",
    "language": "React, Redux, Tailwind, Styled-components, Swiper",
  },
  {
    "name": "Pixel adventure",
    "url": "https://github.com/abifauzan/PixelAdventure",
    "description": "Game website Pixi.js Experiment.",
    "language": "Pixi.js, HTML",
  },
  {
    "name": "Sentiment Analysis",
    "url": "https://github.com/abifauzan/sentiment-analysis-lstm",
    "description": "Sentiment Analysis using LSTM Network and Yelp Dataset",
    "language": "Python",
  },
  {
    "name": "Mobile App Design",
    "url": "https://github.com/abifauzan/mobile-app-design",
    "description": "Mobile UI design in Adobe XD",
    "language": "Adobe XD",
  },
  {
    "name": "ICHAS 2019",
    "url": "https://github.com/abifauzan/ichas-2019",
    "description": "website for managing event at International Class Universitas Mercu Buana including registration and ticket management system",
    "language": "Laravel PHP, MySQL, JavaScript, CSS (Bootstrap), HTML",
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
              "description": "Bachelor of Computer Science",
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
          <div className="relative shrink-0 basis-1/2 text-center md:order-2 md:-ml-20 left-14">
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
            <div className="prose prose-invert grow text-center py-10 md:py-0">
              <a href="/cv_abi_fauzan_2023.pdf" target='_blank' className="relative inline-flex items-center justify-center leading-normal no-underline group cursor-pointer select-none focus:outline-none peer md:peer-even:ml-6">
                <div className="z-10 h-full w-full border-4 border-transparent group-active:border-alpha flex transform-gpu transition-transform not-prose font-mono py-4 px-8 text-base hover:translate-x-2 hover:translate-y-2 bg-white text-black">
                  <span className="mx-auto">Download Resume</span>
                </div>
                <div className="absolute h-full w-full bg-gradient-to-r from-alpha via-alpha-300 to-beta top-2 left-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    
      <div className='w-[80%] flex flex-col text-white pb-14 md:py-10 lg:py-24'>
        <h2 className='text-center md:text-left'>My Latest Projects</h2>
        <div className="w-full mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:20rem] md:mt-12 md:gap-6">
          {projects.map((item, i) => (
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

      <div className='md:py-12'>
        <Reveal
          animation="fade-in slide-in-right"
          className="prose prose-invert lg:mr-14"
        >
          <ContentRenderer source={contact} />
        </Reveal>
      </div>
    </>
  )
}

export default Layout
