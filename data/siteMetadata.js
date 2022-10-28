const siteMetadata = {
  title: 'Mustafa Babayev',
  author: 'Mustafa Babayev',
  headerTitle: 'shrois',
  description: 'Embacy Inc Owner',
  language: 'tr-tr',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://shrois.tk',
  siteRepo: 'https://github.com/shrois/new-shrois.tk',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/profil.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'iamshrois@gmail.com',
  github: 'https://github.com/shrois',
  twitter: 'https://twitter.com/shrois',
  facebook: 'https://facebook.com/shrois',
  linkedin: 'https://www.linkedin.com/in/shrois/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/shrois/',
  locale: 'tr-tr',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || 'Shrois/new-shrois.tk',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || 'R_kgDOIU10YQ',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'Q&A',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOIU10Yc4CSPlJ',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'dark',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
