<template lang="html">
  <section>
    <hr class="line">
    <article class="aanpak-container-three">
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
.aanpak-content{
  text-align: center;
  margin-top: 20px;
  display: none;
}
figure{
  margin: 0 auto;
  text-align: center;
}

.line{
  height: 2px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  border: none;
  background-color: #9490A7;
}

@media (min-width:1200px) {
.aanpak-container-three{
  width: 55%;
  padding: 5px;
  height: auto;
  margin: 0 auto;
  border: 4px solid #043652;
  margin-top: 50px;
  margin-bottom: 50px;
}
.aanpak-content-three{
  margin: 0;
}
.aanpak-content{
  display: block;
}
.hoewerkik-image{
  width: 530px;
  height: 454px;
  margin-top: 30px;
}
.aanpak-sub-title{
  font-size: 18px;
  font-weight: bold;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  margin-top: 40px;
  margin-bottom: 10px;
}
.aanpak-content-p{
  font-size: 14px;
  width: 530px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
}
.listitem{
  width: 493px;
  font-size: 14px;
}
.line{
  width: 60%;
}
.aanpak-listitems{
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20px;
}
}
</style>
