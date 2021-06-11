<template lang="html">
  <section>
    <article class="rouw-container-two">
      <div class="rouw-content-two">
          <section class="aanpak-listitems second fourth"  v-html="$options.filters.markdown(blok.content_two)"></section>
      </div>
      <div class="rouw-content">
        <figure>
          <img :src="blok.image_one" alt="meisje met teddybear" class="hoewerkik-image">
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
.rouw-container-two{
  display: block;
  width: 100%;
}
.rouw-content-two{
  width: 90%;
  margin: 0 auto;
}
.rouw-sub-title{
  font-size: 14px;
  font-weight: bold;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  margin-top: 20px;
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
.rouw-content{
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
  margin-bottom: 20px;
}
figure{
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 1100px) {
  .rouw-container-two{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1160px;
    margin: 0 auto;
    column-gap: 100px;
  }
  .rouw-content-two{
    margin: 0;
  }
  .rouw-sub-title{
    font-size: 18px;
    margin-top: 40px;
  }
  .rouw-content-p{
    font-size: 14px;
    width: 530px;
  }
  .hoewerkik-image{
    width: 530px;
    height: 454px;
    margin-top: 50px;
  }
  .line{
    width: 60%;
  }
}
</style>
