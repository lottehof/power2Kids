<template lang="html">

  <div class="review-box-container">
    <button @click.prevent="slidePrev" class="button-left"><i class="fas fa-chevron-left"></i></button>
    <div class="white-box">
      <hooper ref="carousel" @slide="updateCarousel"   v-editable="blok" :autoPlay="true" :playSpeed="4000">
        <slide class="slider" style="width: 100%" :key="blok._uid"
            v-for="blok in blok.columns" >
          <component :blok="blok" :is="blok.component" />
        </slide>
      </hooper>
    </div>
    <button @click.prevent="slideNext" class="button-right"><i class="fas fa-chevron-right"></i></button>
  </div>
</template>
<!--  -->
<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components: {
  Hooper,
  Slide
},
  props: {
  blok: {
    type: Object,
    required: true
  }
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

<style lang="css" scoped>
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
  max-height: 900px;
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
@media (min-width: 768px) {
  .review-box-container{
    height: 500px;
    width: 750px;
  }
  .fas{
    font-size: 60px;
  }
  .white-box{
    width: 610px;
    height: 420px;
  }
  .white-box::before{
    height: 65px;
    font-size: 100px;
    padding-top: 0;
  }
  li.slider{
    font-size: 16px;
  }
  .slider-content{
    width: 580px;
    /* padding: 2rem; */
  }
  .person{
    position: absolute;
    bottom: 7%;
  }
}
@media (min-width: 1200px) {
  .review-box-container{
    height: 500px;
    width: 750px;
    margin: 0 auto;
    margin-left: 60px;
  }

}
</style>
