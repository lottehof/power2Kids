<template lang="html">
  <section>
    <article class="aanpak-container-one">
      <div class="aanpak-content-one">
        <div class="title-container">
          <h2 class="aanpak-title">{{blok.title}}</h2>
          <hr class="aanpak-underline">
        </div>
        <section class="aanpak-listitems"  v-html="$options.filters.markdown(blok.content_one)"></section>
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
.aanpak-container-one{
  display: block;
  width: 100%;
}
.aanpak-content-one{
  width: 90%;
  margin: 0 auto;
}
.aanpak-title{
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.aanpak-underline{
  width: 100px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 20px;
}
.aanpak-sub-title{
  font-size: 16px;
  /* text-align: center; */
}
.aanpak-content-p{
  font-size: 12px;
  width: 100%;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  white-space: pre-line;
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
.aanpak-container-one{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1160px;
  margin: 0 auto;
  column-gap: 100px;
}
.aanpak-content-one{
  grid-column: 2 / span 1;
  grid-row: span 1 ;
}
.aanpak-content-one{
  margin:0;
}
.title-container{
  width: 230px;
  margin-top: 30px;
}
.aanpak-title{
  font-size: 36px;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
  width: 230px;
}
.aanpak-underline{
  width: 150px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
}

.aanpak-content-p{
  font-size: 14px;
  width: 530px;
}
.first{
  margin-bottom: 100px;
}
.line{
  width: 60%;
}
}
</style>
