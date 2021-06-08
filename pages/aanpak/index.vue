<template lang="html">
  <section class="aanpak">
    <div class="white-background">
    <NietZoalsJeWilt
    :key="story.content._id"
    :blok="story.content" />
    <Traject
    :key="story.content._id"
    :blok="story.content" />
    <SamenBereiken
    :key="story.content._id"
    :blok="story.content"/>
    </div>
  </section>
</template>

<script>
import NietZoalsJeWilt from '@/components/Aanpak/NietZoalsJeWilt'
import Traject from '@/components/Aanpak/Traject'
import SamenBereiken from '@/components/Aanpak/SamenBereiken'
export default {
  components:{
    NietZoalsJeWilt,
    Traject,
    SamenBereiken
  },
  /*CONNECTOR TO CMS STORYBLOK*/
/*--------------------------*/
data () {
  return { story: { content: {} } }
},
asyncData (context) {
  // Check if we are in the editor mode
  let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

  // Load the JSON from the API
  return context.app.$storyapi.get(`cdn/stories/aanpak`, {
    version: version
  }).then((res) => {
    return res.data
  }).catch((res) => {
    context.error({ statusCode: res.response.status, message: res.response.data })
  })
}

}
</script>

<style lang="css" scoped>
.aanpak{
  min-height: 100vh;
  background-image: url('@/assets/img/hoewerkikbg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: scroll;
  background-color: #EFF8FF;
  padding-bottom: 80px;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.white-background{
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
}
.aanpak-listitems ul li{
  background: url('~/assets/img/ster.png') no-repeat left center;
  padding: 15px 10px 15px 45px;
  list-style: none;
  margin: 0;
  vertical-align: middle;
}
.aanpak-listitems ul li{
  width: 95%;
  /* margin-bottom: 30px; */
  font-size: 12px;
  color: #043652;
  line-height: 133.31%;
  letter-spacing: 0.13em;
}

@media (min-width: 1200px) {
.white-background{
  background-color: transparent;
}
}
</style>
