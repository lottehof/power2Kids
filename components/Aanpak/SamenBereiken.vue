<template lang="html">
  <section>
    <article class="aanpak-container-three">
      <div class="aanpak-content">
        <figure>
          <img :src="blok.image_two" alt="twee kindjes hand in hand" class="hoewerkik-image second">
        </figure>
      </div>
      <div class="aanpak-content-three">
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
.aanpak-container-three{
  display: block;
  width: 100%;
}
.aanpak-content-three{
  width: 90%;
  margin: 0 auto;
}
.hoewerkik-image{
  width: 90%;
}
/* .aanpak-sub-title{
  font-size: 16px;
  margin-top: 20px;
} */
.aanpak-content{
  text-align: center;
  margin-top: 20px;
}

@media (min-width:1200px) {
.aanpak-container-three{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1160px;
  margin: 0 auto;
  column-gap: 100px;
}
.aanpak-content-three{
  margin: 0;
}
.hoewerkik-image{
  width: 530px;
  height: 454px;
  margin-top: 70px;
}
.aanpak-sub-title{
  font-size: 18px;
  font-weight: bold;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  margin-top: 40px;
  margin-bottom: 10px;
}
.aanpak-content-p{
  font-size: 14px;
  width: 530px;
}
.listitem{
  width: 493px;
  font-size: 14px;
}
}
</style>
