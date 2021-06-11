<template lang="html">
  <div>
    <main>
        <TheHeaderOvermij />
        <TheSideNavOvermij />
        <Nuxt />
          <Footer />
    </main>
  </div>
</template>

<script>
import TheHeaderOvermij from '@/components/OvermijNavigation/TheHeaderOvermij'
import TheSideNavOvermij from '@/components/OvermijNavigation/TheSideNavOvermij'
export default {
  components:{
    TheHeaderOvermij,
    TheSideNavOvermij
  },
  
}
</script>

<style lang="css" scoped>
*, *::before, *::after{
  box-sizing: border-box;
}
*, *::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
html{
  font-family: Arial, sans-serif;
  color: #043652;
  margin: 0;
  padding: 0;
}
hr, body{
  margin: 0;
  padding: 0;
}
</style>
