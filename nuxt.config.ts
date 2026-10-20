// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    hooks: {
        'nitro:config'(config) {
            config.prerender!.routes = config.prerender!.routes!.filter(r => r !== '/200.html')
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxt/image', "nuxt-schema-org"],
    css: ['~/assets/css/main.css'],
    site: {
        url: process.env.NUXT_WEBSITE,
        name: process.env.NUXT_APP_NAME
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: "Mohammad Mahdi Noorani | Personal website",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: "og:description",
                    property: "og:description",
                    content: "This is Mohammad Mahdi Noorani personal website"
                },
                {
                    name: "keywords",
                    content: "Noorani-mm, Noorani, Mohammad Mahdi Noorani, software engineer, Mohammad Mahdi, Mohammad, Mahdi, نورانی, محمد مهدی نورانی, محمدمهدی نورانی"
                },
                {
                    name: "author",
                    content: "Mohammad Mahdi Noorani"
                },
                {
                    name: "theme-color",
                    content: "#ffa600"
                },
                {
                    name: 'google-site-verification',
                    content: process.env.NUXT_GOOGLE_SITE_VERIFICATION
                }
            ]
        },
        pageTransition: {
            name: "page", mode: "out-in"
        }
    },
    runtimeConfig: {
        public: {
            SITE_URL: process.env.NUXT_WEBSITE,
            APP_NAME: process.env.NUXT_APP_NAME,
            USER_NAME: process.env.NUXT_USER_NAME,
            GITHUB: process.env.NUXT_GITHUB,
            TELEGRAM: process.env.NUXT_TELEGRAM,
            EMAIL: process.env.NUXT_EMAIL
        }
    }
})
