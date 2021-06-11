<template lang="html">
  <section class="aanbod-info">
    <div class="title-container">
      <h2 class="aanbod-title">{{blok.title}}</h2>
      <hr class="aanbod-underline">
    </div>
    <section class="aanbod-content">
      <section class="aanbod-content-p"  v-html="$options.filters.markdown(blok.content)"></section>
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
.aanbod-info{
  width: 90%;
  margin: 0 auto;
}
.aanbod-title{
  font-size: 20px;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
  width: 90%;
}
.aanbod-underline{
  width: 250px;
  margin-left: 20px;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 20px;
}
.aanbod-content-p{
  font-size: 14px;
  width: 95%;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  white-space: pre-line;
}

@media (min-width: 768px) {
  .aanbod-title{
    font-size: 26px;
    width: 100%;
  }
  .aanbod-content-p{
    font-size: 14px;
    width: 500px;
  }
}

@media (min-width: 1300px) {
  .title-container{
    width: 842px;
  }
  .aanbod-title{
    font-size: 36px;
    padding-top: 150px;
    width: 100%;
    margin-left: 70px;
  }
  .aanbod-underline{
    width: 370px;
    margin: 0 auto;
  }
  .aanbod-content{
    margin-top: 20px;
    margin-left: 70px;
  }
  .aanbod-content-p{
    font-size: 16px;
    width: 670px;
  }
}
@media (min-width: 1800px) {
  .aanbod-title{
    padding-top: 180px;
  }
}
</style>
