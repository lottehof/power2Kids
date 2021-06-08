<template lang="html">
  <div>
    <main>
        <NavigationbarOvermij />
        <Nuxt />
          <Footer />
    </main>
  </div>
</template>

<script>
import NavigationbarOvermij from '@/components/Navigation/NavigationbarOvermij'
export default {
  components:{
    NavigationbarOvermij,
  }
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
