<template lang="html">
  <div class="second-box">
    <h2 class="hulp-title">{{blok.in_deze_situatie_title}}</h2>
    <hr class="hulp-title-underline">
    <section class="hulp-listitems"  v-html="$options.filters.markdown(blok.in_deze_situatie_content)"></section>
  </div>
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
.second-box{
  height: auto;
  background-color: #D3D1DB;
}
.hulp-title{
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.hulp-title-underline{
  width: 300px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
}
.hulp-listitems{
  padding: 20px;
  margin-left: 20px;
}

@media (min-width: 768px) {
  .hulp-listitems{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding: 0;
  }
  .listitem{
    width: 576px;
    margin-bottom: 30px;
    font-size: 20px;
    color: #043652;
  }
}

@media (min-width: 1440px) {
  .second-box{
    height: 550px;
  }
  .hulp-title{
    font-size: 36px;
  }
  .hulp-title-underline{
    width: 500px;
  }
}
</style>
