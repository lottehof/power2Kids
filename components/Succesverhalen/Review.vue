<template>
  <div class="">
    <div>
      <h2 class="review-title">Ervaringen van ouders</h2>
      <hr class="review-title-underline">
    </div>
    <div class="review-container">
  <div class="review-box">
    <div class="review-box-container">
      <button @click.prevent="slidePrev" class="button-left"><i class="fas fa-chevron-left"></i></button>
      <div class="white-box">
        <hooper ref="carousel" @slide="updateCarousel">
          <slide class="slider" style="width: 100%" v-for="data in datas" :key="data.id">
            <div class="slider-content">
            <p class="post">{{data.post}}</p>
            <p class="person">{{data.person}}</p>
          </div>
          </slide>
        </hooper>
      </div>
      <button @click.prevent="slideNext" class="button-right"><i class="fas fa-chevron-right"></i></button>
    </div>
    </div>
    <div class="review-image-box">
      <img src="@/assets/img/review.jpg" alt="2 kindjes" class="review-image">
    </div>
  </div>

</div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components: {
  Hooper,
  Slide
},
data() {
  return {
    datas: [
    {
      post:'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
      person: '-Alike, moeder van Anna (7 jaar)'
    },
    {
      post:'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
      person: '-Alike, moeder van Anna (7 jaar)'
    },

    {
      post:'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
      person: '-Vanessa, moeder van Teun (6 jaar)'
    },
    {
      post:'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
      person: '-Vanessa, moeder van Teun (6 jaar)'
    },
    {
      post:'Hanne maakt gemakkelijk contact, is betrokken en boekt snel resultaat! Onze dochter was heel angstig. Hanne heeft onze dochter handvatten geboden door middel van oefeningen en gesprekken om met haar angsten om te gaan en deze te overwinnen. Ook als ouders ontvingen wij verschillende adviezen. Dit heeft ons enorm geholpen! Onze dochter kan nu beter met haar angst omgaan en zit weer goed in haar vel.',
      person: '-Alike, moeder van Anna (7 jaar)'
    },

    {
      post:'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',
      person: '-Vanessa, moeder van Teun (6 jaar)'
    },
    {
      post:'We hebben met ons 6-jarig zoontje een traject met Hanne gevolgd om hem te helpen met zijn boosheid en voor ons om beter te kunnen begrijpen waar zijn boosheid vandaan komt. Het vertrouwen in Hanne is zowel vanuit ons, maar ook vooral vanuit ons zoontje heel snel opgebouwd. Hanne heeft een hele prettige en fijne manier van praten, aanwezig zijn in een ruimte en verbinding maken. We merkten dit aan de openheid van ons zoontje naar haar toe. Hanne bespreekt de "moeilijke" onderwerpen met een kind op een speelse en visuele manier. We hebben het traject als prettig en hulpvol ervaren.',

      person: '-Vanessa, moeder van Teun (6 jaar)'
    },


    ]
  };
},
  watch: {
    carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  }
}
</script>
<style>
.review-title{
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.review-title-underline{
  width: 200px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 50px;
}
.review-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}
.review-box-container{
  height: 100%;
  width: 90%;
  background-color: #9490A7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-left{
  position: absolute;
  left: 1%;
  background-color: transparent;
  border: none;
}
.fas{
  font-size: 30px;
  color: white;
  background-color: transparent;
  border: none;
}
.white-box{
  width: 75%;
  height: 90%;
  max-height: 700px;
  border: 4px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.white-box::before{
  content: '“';
  height: 55px;
  font-size: 50px;
  background: #9490A7;
  color: white;
  top: 70px;
  padding-top: 10px;
  position: absolute;
  left: -3%;
}
.hooper{
  width: 70%;
  height: 100%;
  margin: 0 auto;
}
li.slider{
  background-color: #9490A7;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Arial", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
}
.button-right{
  position: absolute;
  right: 1%;
  background-color: transparent;
  border: none;
}
.review-image{
  width: 528.59px;
  height: 700px;
  display: none;
}
@media (min-width: 768px) {
  .review-title{
    font-size: 36px;
  }
  .review-title-underline{
    width: 300px;
  }
  .review-container{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
  .review-box{
    margin: 0 auto;
  }
  .review-box-container{
    height: 500px;
    width: 750px;
  }
  .fas{
    font-size: 60px;
  }
  .white-box{
    width: 610px;
    height: 410px;
  }
  .white-box::before{
    height: 65px;
    font-size: 100px;
    padding-top: 0;
  }
  .hooper{
    width: 570px;
    height: 400px;
  }
  li.slider{
    font-size: 18px;
  }
  .slider-content{
    width: 580px;
    padding: 2rem;
  }
  .person{
    position: absolute;
    bottom: 7%;
  }
  .review-image-box{
    width: 530px;
    margin: 0 auto;
  }
  .review-image{
    display: block;
    text-align: center;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
@media (min-width: 1200px) {
  .review-container{
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
  .review-box-container{
    height: 500px;
    width: 750px;
    margin: 0 auto;
    margin-left: 60px;
  }

}
</style>
