import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gabriel Calcagni - Portfolio',
    short_name: 'GC Portfolio',
    description: 'Portfolio de Gabriel Calcagni - Desarrollador Front End & Full Stack',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/open-graph-mgc.png',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
