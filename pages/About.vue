<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2 class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">About</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        Here you can know more about me !
      </span>
    </div>

    <!-- page content -->
    <div class="flex flex-col w-full items-center h-5/6">
      <div class="relative flex flex-col w-11/12 rounded-lg h-full overflow-clip">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover" src="/Images/about.webp"
          alt="about me" />
        <div class="flex flex-col backdrop-blur-[1px] gap-1 w-full h-full bg-base-300/40 z-10 px-5 py-6 md:py-8 md:px-7">
          <p class="text-justify">
            &nbsp;I am energetic, creative, frank and love solving problems and new challenges.
          </p>
          <p>
            &nbsp;I enjoy working with people and teams who are crazy about improvement, I try to improve with the team and also make the team improve.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  meta: [
    {
      name: "description",
      property: "og:description",
      content: "Here you can know more about Mohammad Mahdi Noorani",
    },
    {
      name: "title",
      property: "og:title",
      content: "What kind of person am I?",
    }
  ],
});
</script>
