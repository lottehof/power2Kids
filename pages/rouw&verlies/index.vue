<template lang="html">
  <section>
    <section class="rouwverlies">
      <div class="white-background">
      <RouwVerlies
      :key="story.content._id"
      :blok="story.content" />
      <Signalen
      :key="story.content._id"
      :blok="story.content" />
      <Begeleiding
      :key="story.content._id"
      :blok="story.content" />
      </div>
    </section>
  </section>
</template>

<script>
import RouwVerlies from '@/components/RouwVerlies/RouwVerlies'
import Signalen from '@/components/RouwVerlies/Signalen'
import Begeleiding from '@/components/RouwVerlies/Begeleiding'
export default {
  components:{
    RouwVerlies,
    Signalen,
    Begeleiding
  },
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
   return context.app.$storyapi.get('cdn/stories/rouw-verlies', {
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
.rouwverlies{
  min-height: 100vh;
  background-image: url('@/assets/img/r&vbg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  padding-bottom: 80px;
}
.white-background{
    background-color: rgba(255, 255, 255, 0.5);
    padding-bottom: 80px;
    height: 100%;
}
@media (min-width:1100px) {
.rouwverlies{
  min-height: 100vh;
  background-image: url('@/assets/img/r&vbg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  padding-bottom: 80px;
}
.white-background{
  background-color: transparent;
}
}
</style>
