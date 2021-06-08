<template lang="html">
  <section>
    <article class="rouw-container-one">
      <div class="rouw-content-one">
        <div class="title-container">
          <h2 class="rouw-title">{{blok.title}}</h2>
          <hr class="rouw-underline">
        </div>
          <section class="rouw-content-p first"  v-html="$options.filters.markdown(blok.content_one)"></section>
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
.rouw-container-one{
  display: block;
  width: 100%;
}
.rouw-content-one{
  width: 90%;
  margin: 0 auto;
}
.title-container{

}
.rouw-title{
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.rouw-underline{
  width: 110px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 20px;
}
.rouw-sub-title{
  font-size: 14px;
  font-weight: bold;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  margin-top: 40px;
  margin-bottom: 10px;
}
.rouw-content-p{
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
  margin-top: 30px;
  border: none;
  background-color: #9490A7;
  margin-bottom: 30px;
}

@media (min-width: 1100px) {
.rouw-container-one{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1160px;
  margin: 0 auto;
  column-gap: 100px;
}
.rouw-content-one{
  grid-column: 2 / span 1;
  grid-row: span 1 ;
  margin: 0;
}
.title-container{
  width: 230px;
}
.rouw-title{
  font-size: 36px;
  width: 530px;
  text-align: left;
}
.rouw-underline{
  width: 200px;
}
.rouw-sub-title{
  font-size: 18px;
}
.rouw-content-p{
  font-size: 14px;
  width: 530px;
}
.first{
  margin-bottom: 110px;
}
.line{
  width: 60%;
}
}
</style>
