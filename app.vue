<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const runtime = useRuntimeConfig()

/**
 * IMPORTANT:
 * For best SEO in SSG/SSR, set this in env:
 * NUXT_PUBLIC_SITE_URL=https://your-domain.com
 */
const siteUrl = computed(() => {
  const fromEnv = runtime.public.SITE_URL || runtime.public.SITE_BASE_URL || ''
  // fallback (client-only) if env not set
  if (fromEnv) return String(fromEnv).replace(/\/+$/, '')
  if (process.client && window?.location?.origin) return window.location.origin
  return ''
})

const appName = computed(() => runtime.public.APP_NAME || 'Noorani')
const authorName = computed(() => runtime.public.USER_NAME || 'Mohammad Mahdi Noorani')

// Social links (optional; used in structured data only)
const github = computed(() => runtime.public.GITHUB || '')
const telegram = computed(() => runtime.public.TELEGRAM || '')
const email = computed(() => runtime.public.EMAIL || '')

/**
 * Route -> SEO mapping
 * (Texts are aligned with your current page scripts; no content change in templates.)
 */
type SeoEntry = {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

const seoMap = computed<Record<string, SeoEntry>>(() => ({
  home: {
    title: `${appName.value} - home`,
    description: 'There you can know about Mohammad Mahdi Noorani',
    keywords: 'Mohammad Mahdi, Noorani, محمد مهدی, نورانی, محمد مهدی نورانی, developer, توسعه‌دهنده',
    ogImage: '/Images/software.jpg'
  },
  about: {
    title: `${appName.value} - about`,
    description: 'Here you can know more about Mohammad Mahdi Noorani',
    ogImage: '/Images/about.jpg'
  },
  contact: {
    title: `${appName.value} - contact`,
    description: 'There you can contact with Mohammad Mahdi Noorani',
    keywords: 'Contact me, Telegram, Github',
    ogImage: '/Images/network.jpeg'
  },
  skills: {
    title: `${appName.value} - skills`,
    description: 'What can I do as a software engineer.',
    // matches your computed keywords logic but centralized:
    keywords: 'PHP,C#,JavaScript,CSS,Python,Laravel,.Netframework,Nuxt,TailwindCSS',
    ogImage: '/Images/skill.jpg'
  }
}))

const pageKey = computed(() => {
  const slug = (route.path || '/').split('/')[1] || ''
  return slug === '' ? 'home' : slug
})

const currentSeo = computed<SeoEntry>(() => {
  return seoMap.value[pageKey.value] || {
    title: `${appName.value} - ${pageKey.value}`,
    description: `${authorName.value} personal website.`,
    ogImage: '/Images/software.jpg'
  }
})

const canonicalUrl = computed(() => {
  if (!siteUrl.value) return ''
  // ensure no double slashes
  const path = route.path?.startsWith('/') ? route.path : `/${route.path || ''}`
  return `${siteUrl.value}${path}`.replace(/\/+$/, (m) => (path === '/' ? '/' : ''))
})

/**
 * JSON-LD BreadcrumbList (Google-friendly)
 */
const breadcrumbJsonLd = computed(() => {
  if (!siteUrl.value) return null

  const segments = (route.path || '/')
    .split('/')
    .filter(Boolean)

  const items: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl.value + '/'
    }
  ]

  let accPath = ''
  segments.forEach((seg, idx) => {
    accPath += '/' + seg
    const name = seg.charAt(0).toUpperCase() + seg.slice(1)

    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name,
      item: `${siteUrl.value}${accPath}`
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
})

/**
 * Optional: Person JSON-LD (helps Knowledge Graph)
 * Kept minimal and based on your env links.
 */
const personJsonLd = computed(() => {
  const sameAs = [github.value, telegram.value].filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorName.value,
    jobTitle: 'Full-Stack developer',
    email: email.value ? `mailto:${email.value}` : undefined,
    sameAs: sameAs.length ? sameAs : undefined
  }
})

watchEffect(() => {
  const title = currentSeo.value.title
  const description = currentSeo.value.description
  const keywords = currentSeo.value.keywords
  const ogImagePath = currentSeo.value.ogImage || '/Images/software.jpg'
  const ogImageAbs = siteUrl.value ? `${siteUrl.value}${ogImagePath}` : ogImagePath

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    title,
    link: [
      ...(canonicalUrl.value ? [{ rel: 'canonical', href: canonicalUrl.value }] : [])
    ],
    meta: [
      // Basics
      { name: 'description', content: description },
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
      { name: 'author', content: authorName.value },
      { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: appName.value },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...(canonicalUrl.value ? [{ property: 'og:url', content: canonicalUrl.value }] : []),
      { property: 'og:image', content: ogImageAbs },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImageAbs },

      // Optional: theme color (helps PWA/browser UI)
      { name: 'theme-color', content: '#0f172a' }
    ],
    script: [
      ...(breadcrumbJsonLd.value
        ? [{
            type: 'application/ld+json',
            children: JSON.stringify(breadcrumbJsonLd.value)
          }]
        : []),
      {
        type: 'application/ld+json',
        children: JSON.stringify(personJsonLd.value)
      }
    ]
  })
})
</script>
