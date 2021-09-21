<template lang="html">
  <section class="rouwenverlies">
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
.rouwenverlies{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.rouw-content-one{
  width: 90%;
  margin: 0 auto;
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
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  margin-top: 40px;
  margin-bottom: 10px;
}
.rouw-content-p{
  font-size: 14px;
  width: 100%;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
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
    width: 55%;
    padding: 5px;
    height: auto;
    margin: 0 auto;
    border: 4px solid #043652;
    margin-top: 100px;
  }
  .rouw-content-one{
    width: 100%;
  }

  .title-container{

  }
  .rouw-title{
    font-size: 36px;
    padding-top: 30px;
    /* width: 500px;
    text-align: left; */
  }
  /* .rouw-underline{
    width: 200px;
  } */
  .rouw-sub-title{
    font-size: 18px;
  }
  .rouw-content-p{
    font-size: 16px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0 20px;
    /* width: 500px; */
  }
  .line{
    width: 60%;
  }
}
</style>
