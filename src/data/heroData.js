import { v4 as uuidv4 } from 'uuid'

import { SiGithub, SiWakatime } from 'react-icons/si'
import { IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

export const heroData = [
  {
    intro: {
      name: 'RJ Jefferson',
      role: 'Self-Taught Developer',
      summary:
        'As an independent student, I have spent more time creating projects and have faced many obstacles. I learn best by building projects, which has rapidly developed my skills.'
    },
    link: {
      social: [
        {
          id: uuidv4(),
          url: 'https://github.com/jeffersonrj14',
          label: 'Check out my Github',
          icon: SiGithub,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      ]
    }
  }
]
