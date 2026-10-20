<template>
  <div class="flex flex-col h-screen w-screen bg-base-100 text-base-content">
    <ClientOnly>
      <CustomParticles />
    </ClientOnly>
    <div class="flex flex-col gap-2 w-full h-full items-center justify-center z-10">
      <div class="flex flex-col gap-2 items-center w-11/12 max-w-xl">
        <!-- header / error banner -->
        <header class="flex flex-col gap-3 bg-base-300 rounded-t-md p-3 font-serif w-full uppercase">
          <div class="flex flex-col gap-1 px-2 py-1 text-lg sm:text-xl font-semibold">
            <span class="text-error">ERROR // {{ error.statusCode || 500 }}</span>
            <h1 class="text-2xl sm:text-3xl text-primary font-bold">
              {{ error.statusCode === 404 ? 'PAGE NOT FOUND' : 'AN ERROR OCCURRED' }}
            </h1>
            <p class="text-xs sm:text-sm text-base-content/70 lowercase">
              {{ error.message || 'The requested transmission could not be processed.' }}
            </p>
          </div>

          <!-- navigational action / fallback link -->
          <div
            class="flex flex-row items-center justify-between gap-1 text-base py-2 px-2 border-t border-t-base-content text-base-content/70">
            <span class="text-sm lowercase font-mono">status: failed</span>
            <button @click="handleError"
              class="transmission px-4 py-1.5 border-b-2 text-primary border-b-primary hover:bg-base-200 transition-colors cursor-pointer">
              Return Home
            </button>
          </div>
        </header>

        <!-- error diagnostic / details panel -->
        <div
          class="flex flex-col w-full min-h-[22rem] max-h-[28rem] rounded-b-md p-4 bg-base-300 justify-between font-mono text-sm">
          <div class="flex flex-col gap-3 overflow-y-auto">
            <div class="flex items-center gap-2 text-base-content/60 border-b border-base-content/10 pb-2">
              <span class="inline-block w-2 h-2 rounded-full bg-error animate-pulse"></span>
              <span>SYSTEM DIAGNOSTIC LOG</span>
            </div>

            <div class="bg-base-100 p-3 rounded text-xs text-base-content/80 overflow-x-auto">
              <p class="text-error font-bold mb-1">&gt; Exception Stack Trace:</p>
              <p class="whitespace-pre-wrap">{{ error.stack ||
                'No detailed stack trace available for this server response.' }}</p>
            </div>
          </div>

          <div class="text-center text-xs text-base-content/50 pt-2 border-t border-base-content/10">
            {{ useRuntimeConfig().public.USER_NAME }} // SSR Error Boundary
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// دریافت پروپ خطا از Nuxt
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

// متد پاکسازی خطا و هدایت کاربر به صفحه اصلی
const handleError = () => {
  clearError({ redirect: '/' });
};

// تنظیم داینامیک متا تایتل صفحه خطا
useHead({
  title: `Noorani - Error ${props.error.statusCode || 500}`,
});
</script>

<style scoped>
.transmission {
  transition: all 0.2s ease-in-out;
}
</style>
