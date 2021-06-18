<template lang="html">
  <div class="landing-box">
    <div class="landing-container">
      <div class="landing-left">
        <div class="image-container">
          <figure>
            <img class="landing-image" :src="blok.image" alt="Hanne">
          </figure>
        </div>
      </div>
      <div class="landing-right">
        <div class="context">
        <div class="overmij-content">
          <h1 class="overmij-title">{{ blok.title}}</h1>
          <h3 class="overmij-sub-title">{{blok.sub_title}}</h3>
          <hr class="overmij-underline">
        </div>
        <div class="landing-content">
          <h1 class="landing-title">{{ blok.quote}}</h1>
          <section class="landing-content-p"  v-html="$options.filters.markdown(blok.content)"></section>
        </div>
      </div>
      </div>
  </div>
      <section class="button-container">
        <nuxt-link to="/aanpak"><button type="button" name="button" class="home-button">Mijn aanpak</button></nuxt-link>
        <nuxt-link to="/aanbod"><button type="button" name="button" class="home-button second">Aanbod</button></nuxt-link>
        <nuxt-link to="/succesverhalen"><button type="button" name="button" class="home-button third">Ervaringen</button></nuxt-link>
      </section>

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
  margin: 0 auto;
}
.landing-container{
  display: grid;
  grid-template-columns:  1fr;
}
.landing-left{
  grid-row: 2;
}
.image-container{

}
.landing-image{
  width: 90%;
  height: 90%;
}
.landing-right{

}
.landing-title{
  font-size: 24px;
  margin-bottom: 15px;
  line-height: 21px;
  color: #043652;
  width: 100%;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
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
figure{
  text-align: center;
  margin-top: 20px;
}

.button-container{
  text-align: center;
  margin-top: 10px;
}
.home-button{
  width: 250px;
  height: 55px;
  border-radius: 35px;
  padding: 20px;
  font-size: 18px;
  color: #043652;
  background-color: white;
  border: 2px solid #043652;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  text-align: center;
}

.home-button:hover{
  background-color: #9490A7;
  color: white;
  border: 2px solid white;
}
.overmij-content{
  margin-top: 50px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
}
.overmij-title{
  font-size: 26px;
  width: 100%;
  white-space: pre-line;
  text-align: center;
  text-transform: uppercase;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  color: #234A71;
  padding-top: 20px;
  text-align: center;
}
.overmij-sub-title{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  color: #234A71;
  width: 100%;
  margin-top: 20px;
}
.overmij-underline{
  width: 80%;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-top: 10px;
}

@media (min-width: 768px) {
  .landing-container{
    width: 600px;
    margin: 0 auto;
  }
  .landing-content{
    width: 600px;
    margin: 0 auto;
    text-align: center;

  }
  .overmij-title{
    font-size: 30px;
    margin: 0 auto;
  }
  .overmij-sub-title{
    font-size: 24px;
    margin: 0 auto;
    margin-top: 15px;
  }
}
@media (min-width:1300px) {
  .landing-container{
    width: 100vw;
    display: grid;
    height: auto;
    grid-template-columns: auto auto;
  }
  .landing-title{
    margin-bottom: 40px;
    padding-top: 20px;
    width: 100%;
    font-size: 36px;
    line-height: 41px;
    color: #234A71;
    margin-top: 25px;
    /* text-align: left; */
  }
  .landing-content{
    white-space: pre-line;
    font-family: "Arial";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #043652;
    text-align: justify;
    width: 654px;
    height: auto;
  }
  .landing-image{
    position: absolute;
    width: 659px;
    height: 100vh;
    left: 0px;
    top: 0px;
  }
  .landing-left{
    grid-column: 1 / span 1;
    grid-row: 1;
    width: 659px;
    height: 93vh;
  }
  .landing-right{
      grid-column: 2 / span 1;
      margin: 0 auto;
      width: calc(100vw - 659px);
  }

  .button-container{
    margin-bottom: 30px;
  }
  .home-button{
    width: 300px;
    height: 70px;
    font-size: 26px;
    margin-bottom: 0;
    text-align: center;
  }
  .second{
    margin: 0 170px;
  }
  .overmij-content{
    width: 605px;
    height: 180px;
    margin-top: 50px;
  }
  .overmij-title{
    font-size: 40px;
    width: 605px;
  }
  .overmij-sub-title{
    font-size: 24px;
    width: 605px;
  }
  .overmij-underline{
    width: 390px;
  }
}
  @media (min-width: 1500px) {
    .landing-container{
      height: auto;

    }
    .landing-right{
        grid-column: 2 / span 1;
        margin: 0 auto;
        width: calc(100vw - 659px);
    }
  }
@media (min-width: 1800px) {
  .landing-container{
    height: 950px;
  }
  .landing-image{
    position: absolute;
    width: 673px;
    height: 1010px;
    left: 0px;
    top: 0px;
  }
  .landing-left{
    grid-column: 1 / span 1;
    grid-row: 1;
    width: 673px;
    height: 93vh;
  }
  .landing-right{
      grid-column: 2 / span 1;
      margin: 0 auto;
      width: calc(100vw - 673180px);
  }

}

</style>
