export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Önemli İşlerim`,
    title: `Embacy Inc`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'Oyun Sunucusu',
    title: 'Hyrne Network',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
]
