<template lang="html">
  <section>
    <article class="aanpak-container-two">
      <div class="aanpak-content-two">
          <section class="aanpak-listitems second"  v-html="$options.filters.markdown(blok.content_two)"></section>
      </div>
      <div class="aanpak-content">
        <figure>
          <img :src="blok.image_one" alt="werkplek" class="hoewerkik-image">
        </figure>
      </div>
    </article>
    <hr class="line">
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
.aanpak-container-two{
  display: block;
  width: 100%;
}
.aanpak-content-two{
  width: 90%;
  margin: 0 auto;
}
.aanpak-sub-title{
  font-size: 16px;
  /* text-align: center; */
  margin-top: 20px;
}
.aanpak-content-p{
  font-size: 12px;
  width: 100%;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  white-space: pre-line;
  margin-top: 20px;
}
.aanpak-content{
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.hoewerkik-image{
  width: 90%;
}
.line{
  height: 2px;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  background-color: #9490A7;
}

@media (min-width: 1200px) {
.aanpak-container-two{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1160px;
  margin: 0 auto;
  column-gap: 100px;
}
.aanpak-content-two{
margin: 0;
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
  line-height: 133.31%;
  letter-spacing: 0.13em;
  white-space: pre-line;
}

.hoewerkik-image{
  width: 530px;
  height: 454px;
  margin-top: 70px;
}
.line{
  height: 2px;
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  background-color: #9490A7;
}
}
</style>
