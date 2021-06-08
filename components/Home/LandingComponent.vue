<template lang="html">
  <div class="landing-box">
    <div class="white-background">
      <section class="landing-container">
        <div class="container-item">
          <h1 class="landing-title">{{ blok.title}}</h1>
          <section class="landing-content"  v-html="$options.filters.markdown(blok.content)"></section>
        </div>

        <div class="container-item">
          <figure>
            <img class="start-foto" :src="blok.image" alt="Hanne">
            <figcaption class="figcaption">{{blok.figcaption}}</figcaption>
          </figure>
        </div>
      </section>

      <section class="button-container">
        <nuxt-link to="/aanpak"><button type="button" name="button" class="home-button"><img src="@/assets/img/ster.png" alt="" class="star">Mijn aanpak</button></nuxt-link>
        <nuxt-link to="/aanbod"><button type="button" name="button" class="home-button second"><img src="@/assets/img/ster.png" alt="" class="star">Aanbod</button></nuxt-link>
        <nuxt-link to="/succesverhalen"><button type="button" name="button" class="home-button third"><img src="@/assets/img/ster.png" alt="" class="star">Succes verhalen</button></nuxt-link>
      </section>
    </div>
  </div>

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
.landing-box{
  height: auto;
  width: 100%;
  background-image: url("~/assets/img/homebg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* padding: 20px; */
    margin: 0 auto;
}
.white-background{
    background-color: rgba(255, 255, 255, 0.4);
    height: 100%;
}
.landing-container{
  width: 90%;
  margin: 0 auto;
}
.landing-title{
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
  padding-top: 20px;
  color: #043652;
  width: 100%;
}
.landing-content{
  white-space: pre-line;
  font-family: "Arial";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 30px;
  height: auto;
  width: 90%;
    margin: 0 auto;
}
.underline{
  text-decoration: underline;
}
.start-foto{
  width: 300px;

}
figure{
  text-align: center;
  margin-top: 20px;
}
.figcaption{
  font-size: 16px;
  color: #9490A7;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}
.button-container{
  text-align: center;
  margin-top: 50px;
}
.home-button{
  width: 250px;
  height: 55px;
  border-radius: 35px;
  padding: 20px;
  font-size: 18px;
  color: #043652;
  background-color: white;
  border: 2px solid #E2CFC5;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
}
.star{
  position: absolute;
  margin-top: -11px;
  left: 5%;
}
.home-button:hover{
  background-color: #9490A7;
  color: white;
  border: 2px solid white;
}

@media (min-width: 768px) {
  .landing-container{
    width: 600px;

  }
  .landing-content{
    width: 600px;
  }
  figure{
    text-align: center;
  }
}
@media (min-width:1440px) {
.landing-box{
  height: 90vh;
}
.landing-box::before{
  content: "";
  background-color: rgba(0,0,0,0.55);
}
.landing-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.landing-title{
  font-size: 40px;
  margin-top: 40px;
  text-align: left;
}
.container-item{
  height: 500px;
  margin-top: 150px;
}

.landing-content{
  width: 688px;
  white-space: pre-line;
  margin-right: 215px;
  font-size: 18px;

}
.start-foto{
  width: 440px;
  height: 494px;
  margin-right: 95px;

}
.figcaption{
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  width: 440px;
}
.button-container{
  margin: 0px 100px;
  text-align: center;
  margin-top: 100px;
}
.home-button{
  width: 300px;
  height: 70px;
  font-size: 26px;
  margin-bottom: 0;
}

.star{
  margin-top: -3px;
  left: 5%;
}
.second{
  margin: 0 170px;
}

}
</style>
