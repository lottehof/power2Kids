<template lang="html">
  <section class="aanpak-1">
    <article class="aanpak-container-one">
      <div class="aanpak-content-one">
        <div class="title-container">
          <h2 class="aanpak-title">{{blok.title}}</h2>
          <hr class="aanpak-underline">
        </div>
        <section class="aanpak-listitems"  v-html="$options.filters.markdown(blok.content_one)"></section>
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
.aanpak-1{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.aanpak-container-one{
  display: block;
  width: 100%;
  margin-top: 100px;
}
.aanpak-content-one{
  width: 95%;
  padding: 5px;
  margin: 0 auto;
  border: 2px solid #043652;
}
.aanpak-title{
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.aanpak-underline{
  width: 100px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 20px;
}
.aanpak-sub-title{
  font-size: 16px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
}
.aanpak-content-p{
  font-size: 12px;
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
  margin-top: 50px;
  border: none;
  background-color: #9490A7;
}

@media (min-width: 1200px) {

  .aanpak-title{
    font-size: 36px;

  }

  .aanpak-content-one{
    width: 55%;
    padding: 5px;
    height: 750px;
    margin: 0 auto;
    border: 4px solid #043652;
  }
  .aanpak-listitems{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .aanpak-content-p{
    font-size: 14px;

  }
  .first{
    margin-bottom: 100px;
  }
  .line{
    width: 60%;
  }
}
</style>
