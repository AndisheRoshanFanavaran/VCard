<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2
        class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">
        Contact</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        I'd love to hear from you.
      </span>
    </div>

    <!-- page content -->
    <div class="flex flex-col w-full items-center h-5/6">
      <div class="relative flex flex-col w-11/12 rounded-lg h-full overflow-clip">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover" src="/Images/network.webp" alt="contact" />
        <div
          class="flex flex-col backdrop-blur-[1px] gap-16 w-full h-full bg-base-300/40 z-10 px-5 py-6 md:py-8 md:px-7">
          <div class="flex flex-col gap-2">
            <h2 class="text-xl font-semibold">My communication</h2>
            <p class="text-justify">
              &nbsp;You can contact me through the links below.
            </p>
          </div>
          <!-- footer -->
          <div class="flex flex-col gap-8 items-center justify-center">
            <!-- links -->
            <div class="flex flex-row items-center gap-4">
              <NuxtLink draggable="false" aria-label="telegram" target="_blank" :to="telegram"
                class="hover:scale-110 transmission">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-telegram fill-base-content w-14"
                  viewBox="0 0 32 32">
                  <path
                    d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />
                </svg>
              </NuxtLink>
              <NuxtLink draggable="false" aria-label="github" target="_blank" :to="github"
                class="hover:scale-110 transmission">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-github fill-base-content w-14" viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </NuxtLink>
              <NuxtLink draggable="false" aria-label="gmail" target="_blank" :to="`mailto:${email}`"
                class="hover:scale-110 transmission">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="fill-base-content w-14">
                  <path
                    d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z" />
                </svg>
              </NuxtLink>
            </div>
            <div class="flex flex-col gap-1 bg-base-300/85 rounded-md p-1 justify-center items-center">
              <p class="text-center text-sm">
                Knowledge is a precious heritage, and manners are always fresh ornaments, and thought is a transparent
                mirror.
              </p>
              <span class="font-semibold">Ali ibn Abi Talib</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const telegram = ref('')
const email = ref('')
const github = ref('')

onMounted(() => {
  telegram.value = useRuntimeConfig().public.TELEGRAM
  email.value = useRuntimeConfig().public.EMAIL
  github.value = useRuntimeConfig().public.GITHUB
})

useSchemaOrg([
  definePerson({
    sameAs: useRuntimeConfig().public.GITHUB,
    jobTitle: "Full-Stack developer"
  })
])
</script>
