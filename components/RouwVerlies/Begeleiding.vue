<template lang="html">
  <section >
        <hr class="line">
    <article class="rouw-container-three">
      <div class="rouw-content">
        <figure>
          <img :src="blok.image_two" alt="meisje met bloem in hand" class="hoewerkik-image second">
        </figure>
      </div>
      <div class="rouw-content-three">
        <section class="aanpak-listitems second"  v-html="$options.filters.markdown(blok.content_three)"></section>
      </div>
    </article>
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
.rouw-container-three{
  display: block;
  width: 100%;
}
.rouw-content{
  text-align: center;
  margin-top: 20px;
  display: none;
}
.hoewerkik-image{
  width: 90%;
}
.rouw-content-three{
  width: 90%;
  margin: 0 auto;
}
figure{
  margin: 0 auto;
  text-align: center;
}
.line{
  height: 2px;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  background-color: #9490A7;
  margin-bottom: 20px;
}
@media (min-width: 1100px) {
  .rouw-container-three{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1160px;
    margin: 0 auto;
    column-gap: 100px;
  }
  .rouw-content{
    display: block;
  }
.rouw-content-three{
  margin: 0;
}
  .hoewerkik-image{
    width: 500px;
    height: auto;
    margin-top: 30px;
  }
  .line{
    width: 60%;
  }
}
</style>
