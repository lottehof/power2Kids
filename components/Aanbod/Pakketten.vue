<template lang="html">
  <section class="aanbod-pakketten">
    <div class="pakket kind">
      <div class="pakket-top">
        <h3 class="pakket-title">{{blok.pakket_1_title}}</h3>
      </div>
        <section class="aanbod-listitems-pakket"  v-html="$options.filters.markdown(blok.content_pakket_1)"></section>
      <div class="pakket-bottom">
        <h3 class="pakket-prijs">€{{blok.price_pakket_1}},-</h3>
      </div>
    </div>

    <div class="pakket kindGezin">
      <div class="pakket-top">
        <h3 class="pakket-title">{{blok.pakket_2_title}}</h3>
      </div>
      <section class="aanbod-listitems-pakket"  v-html="$options.filters.markdown(blok.content_pakket_2)"></section>
      <div class="pakket-bottom">
        <h3 class="pakket-prijs">€{{blok.price_pakket_2}},-</h3>
      </div>
    </div>

    <div class="pakket losconsult">
      <div class="pakket-top">
        <h3 class="pakket-title">{{blok.pakket_3_title}}</h3>
      </div>
      <section class="aanbod-listitems-pakket consult"  v-html="$options.filters.markdown(blok.content_pakket_3)"></section>
      <div class="pakket-bottom">
        <h3 class="pakket-prijs">€{{blok.price_pakket_3}},-</h3>
      </div>
    </div>
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
.aanbod-pakketten{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.pakket{
  width: 300px;
  height: 462px;
  margin: 10px;
  background-color: white;
  margin-top: 20px;
  position: relative;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid lightgrey;
}
.pakket-top{
  height: 65px;
  background-color: #F6D6BE;
  position: absolute;
  top: 0;
  width: 298px;
}

.pakket-bottom{
  position: absolute;
  bottom: 0;
}
.pakket-title{
  font-size: 26px;
  font-weight: bold;
  margin-left: 58px;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 65px;
  color: #234A71;
}
.pakket-prijs{
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  width: 300px;
  height: 42px;
}
.aanbod-listitems-pakket{
  position: absolute;
  top: 17%;
  left: 4%;
}
.consult{
  top: 27%;
}
.losconsult{
  height: 300px;
}

@media (min-width: 1300px) {
  .aanbod-pakketten{
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .pakket{
    width: 390px;
    height: 562px;
  }
  .pakket-top{
    width: 390px;
  }
  .pakket-prijs{
    width: 390px;
  }
  .kindGezin{
    margin-left: 40px;
    margin-right: 40px;
  }
  .aanbod-listitems{
    display: flex;
    justify-content: left;
    align-items: center;
    height: 10vh;
  }
  .losconsult{
    height: 400px;
  }
  .consult{
    top: 22%;
  }
}
</style>
