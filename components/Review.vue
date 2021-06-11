<template lang="html">
  <div
  v-editable="blok"
  class="slider-content">
  <p class="post">{{ blok.review }}</p>
  <p class="person">{{ blok.persoon }}</p>
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
@media (min-width: 768px) {
  .slider-content{
    width: 650px;
    text-align: left;
  }
  .post{
    width: 100%;
  }
  .person{
    position: absolute;
    bottom: 7%;
  }
}
</style>
