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
 return {
   story: { content: {} }
 }
},
mounted () {
 this.$storybridge(() => {
   const storyblokInstance = new StoryblokBridge()

   // Use the input event for instant update of content
   storyblokInstance.on('input', (event) => {
     console.log(this.story.content)
     if (event.story.id === this.story.id) {
       this.story.content = event.story.content
     }
   })

   // Use the bridge to listen the events
   storyblokInstance.on(['published', 'change'], (event) => {
     // window.location.reload()
     this.$nuxt.$router.go({
       path: this.$nuxt.$router.currentRoute,
       force: true,
     })
   })
 })
},
asyncData (context) {
 // // This what would we do in real project
 // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
 // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

 // Load the JSON from the API - loadig the home content (index page)
 return context.app.$storyapi.get('cdn/stories/aanpak', {
   version: 'draft'
 }).then((res) => {
   return res.data
 }).catch((res) => {
   if (!res.response) {
     console.error(res)
     context.error({ statusCode: 404, message: 'Failed to receive content form api' })
   } else {
     console.error(res.response.data)
     context.error({ statusCode: res.response.status, message: res.response.data })
   }
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
