import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'

const Layout = ({ projects, github }) => {
  console.log('projects', projects)

  const projectsDummy = [
    {
        "layout": "Post",
        "title": "Crypto website development for DeFi X",
        "description": "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
        "date": "2022-11-22",
        "tags": [
            {
                "layout": "Blog",
                "title": "Next.js",
                "seo": {
                    "title": "Next.js Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "next-js"
                ]
            },
            {
                "title": "stripe"
            },
            {
                "title": "shopify"
            }
        ],
        "logo": {
            "src": "/icons/logo-3.svg",
            "alt": "Company X"
        },
        "images": [
            {
                "src": "/projects/project-3.png",
                "alt": "Control Panel Dashboard",
                "overlay": {
                    "src": "/projects/project-3-mobile.png",
                    "alt": "Control Panel Mobile"
                },
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-1.png",
                "alt": "Customers Dashboard",
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-2.png",
                "alt": "Inovice & Payments",
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-3.png",
                "alt": "Inovice & Payments",
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-4.png",
                "alt": "Inovice & Payments",
                "width": 1280,
                "height": 800
            }
        ],
        "attributes": [
            {
                "label": "Duration",
                "value": "3 Weeks"
            },
            {
                "label": "Role",
                "value": "NodeJS API Server"
            },
            {
                "label": "Atmosphere",
                "value": "Cool"
            },
            {
                "label": "Technology",
                "value": "GRaphQL"
            }
        ],
        "slug": [
            "projects",
            "crypto-website-development-for-defi-x"
        ]
    },
    {
        "layout": "Post",
        "title": "Agency website design for devops company",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot.",
        "date": "2022-11-21",
        "tags": [
            {
                "layout": "Blog",
                "title": "Next.js",
                "seo": {
                    "title": "Next.js Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "next-js"
                ]
            },
            {
                "title": "mdx"
            },
            {
                "layout": "Blog",
                "title": "React",
                "seo": {
                    "title": "React Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "react"
                ]
            }
        ],
        "logo": {
            "src": "/icons/logo-1.svg",
            "alt": "Company X"
        },
        "images": [
            {
                "src": "/projects/project-1.png",
                "alt": "image alt text",
                "overlay": {
                    "src": "/projects/project-1-mobile.png",
                    "alt": "overlay image"
                },
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-2.png",
                "alt": "image alt text",
                "width": 1280,
                "height": 800
            }
        ],
        "attributes": [
            {
                "label": "Duration",
                "value": "3 Months"
            },
            {
                "label": "Role",
                "value": "GraphQL Database"
            }
        ],
        "slug": [
            "projects",
            "agency-website-development-for-dev-x"
        ]
    },
    {
        "layout": "Post",
        "title": "Application design for finance startup",
        "description": "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
        "date": "2022-11-21",
        "tags": [
            {
                "title": "svelte"
            },
            {
                "layout": "Blog",
                "title": "Tailwind CSS",
                "seo": {
                    "title": "Tailwind CSS Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "tailwindcss"
                ]
            },
            {
                "title": "prisma"
            }
        ],
        "logo": {
            "src": "/icons/logo-4.svg",
            "alt": "Company X"
        },
        "images": [
            {
                "src": "/projects/project-4.png",
                "alt": "image alt text",
                "overlay": {
                    "src": "/projects/project-4-mobile.png",
                    "alt": "overlay image"
                },
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-4.png",
                "alt": "image alt text",
                "width": 1280,
                "height": 800
            }
        ],
        "attributes": [
            {
                "label": "Duration",
                "value": "6 months"
            },
            {
                "label": "Role",
                "value": "Accessibility"
            }
        ],
        "slug": [
            "projects",
            "application-design-for-finance-startup"
        ]
    },
    {
        "layout": "Post",
        "title": "Brand refresh for saas cloud platform application",
        "description": "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.",
        "date": "2022-11-21",
        "tags": [
            {
                "layout": "Blog",
                "title": "Next.js",
                "seo": {
                    "title": "Next.js Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "next-js"
                ]
            },
            {
                "layout": "Blog",
                "title": "Tailwind CSS",
                "seo": {
                    "title": "Tailwind CSS Articles",
                    "description": "Custom description for this page goes here"
                },
                "slug": [
                    "tags",
                    "tailwindcss"
                ]
            },
            {
                "title": "graphql"
            }
        ],
        "logo": {
            "src": "/icons/logo-2.svg",
            "alt": "Company X"
        },
        "images": [
            {
                "src": "/projects/project-2.png",
                "alt": "image alt text",
                "overlay": {
                    "src": "/projects/project-2-mobile.png",
                    "alt": "overlay image"
                },
                "width": 1280,
                "height": 800
            },
            {
                "src": "/projects/project-2.png",
                "alt": "image alt text",
                "width": 1280,
                "height": 800
            }
        ],
        "attributes": [
            {
                "label": "Duration",
                "value": "14 Weeks"
            },
            {
                "label": "Role",
                "value": "Admin Panel Design"
            }
        ],
        "slug": [
            "projects",
            "brand-refresh-for-technology-app"
        ]
    }
  ]

  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={github} />
        <div className="mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6">
          {github?.repositories?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
        <div className="my-6 md:my-12"></div>
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projectsDummy.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
