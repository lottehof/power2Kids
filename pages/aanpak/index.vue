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
  data () {
   return {
     story: { content: {} }
   }
  },
  mounted () {
   this.$storybridge(() => {
     const storyblokInstance = new StoryblokBridge()
     storyblokInstance.on('input', (event) => {
       console.log(this.story.content)
       if (event.story.id === this.story.id) {
         this.story.content = event.story.content
       }
     })
     storyblokInstance.on(['published', 'change'], (event) => {
       this.$nuxt.$router.go({
         path: this.$nuxt.$router.currentRoute,
         force: true,
       })
     })
   })
  },
  asyncData (context) {
   return context.app.$storyapi.get('cdn/stories/aanpak', {
     version: context.isDev ? 'draft' : 'published'
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
.white-background{
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
}

@media (min-width: 1200px) {
  .white-background{
    background-color: transparent;
  }
  .aanpak{
    min-height: 100vh;
    /* background-image: url('@/assets/img/hoewerkikbg.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: scroll;
    /* background-color: #EFF8FF; */
    padding-bottom: 80px;
    width: 100vw;
    margin: 0;
    padding: 0;
    /* margin-top: 100px; */
  }
}
</style>
