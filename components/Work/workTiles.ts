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
    description: `VOL 1`,
    title: `Yakında Sizlerle`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'VOL 2',
    title: 'Yakında Sizlerle',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
]
