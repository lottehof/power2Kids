<template lang="html">
  <section class="purple-box">
    <section class="aanbod-listitems">
      <section class="aanbod-listitems"  v-html="$options.filters.markdown(blok.price_information)"></section>
    </section>

  </section>

</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.purple-box{
  height: 15vh;
  background-color: #D3D1DB;
}
.aanbod-listitems{
  display: flex;
  justify-content: left;
  align-items: center;
  height: 15vh;
}

@media (min-width: 1300px) {
  .purple-box{
    height: 10vh;
    background-color: #D3D1DB;
  }
  .aanbod-listitems{
    height: 10vh;
  }

}
</style>
