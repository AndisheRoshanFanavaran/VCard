<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2
        class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">
        Skills</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        What I do as a software engineer.
      </span>
    </div>

    <!-- page content -->
    <div class="flex flex-col w-full items-center h-5/6">
      <div class="relative flex flex-col w-11/12 rounded-lg h-full overflow-clip">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover" src="/Images/skill.webp" alt="mySkills" />
        <div class="flex flex-col gap-7 w-full h-full bg-base-300/40 backdrop-blur-[1px] z-10 px-5 py-6 md:py-8 md:px-7">
          <h2 class="font-semibold">Programming</h2>
          <table class="flex flex-col gap-2 w-full text-xs">
            <thead>
              <tr class="grid grid-cols-4 gap-2">
                <th class="w-full text-start">Language</th>
                <th class="w-full text-start">Grade</th>
                <th class="w-full text-start">Framework</th>
                <th class="w-full text-start">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr class="grid grid-cols-4 gap-1 md:gap-2" v-for="skill in skills" :key="skill.id">
                <td>{{ skill.language }}</td>
                <td>
                  <Rating :id="skill.id" :rate="skill.rate" />
                </td>
                <td>{{ skill.framework }}</td>
                <td>
                  <Rating :id="skill.id * 2" :rate="skill.f_rate" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { id: 1, language: 'PHP', rate: 5, framework: 'Laravel', f_rate: 5 },
  { id: 2, language: 'C#', rate: 5, framework: '.Netframework', f_rate: 5 },
  { id: 3, language: 'JavaScript', rate: 4, framework: 'Nuxt', f_rate: 4 },
  { id: 4, language: 'CSS', rate: 4, framework: 'TailwindCSS', f_rate: 4 },
  { id: 5, language: 'Python', rate: 3, framework: 'Django', f_rate: 0 }
]
</script>
