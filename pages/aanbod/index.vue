<template lang="html">
  <section class="aanbod-1">
    <section class="aanbod">
      <div class="white-background">
      <AanbodInfo
      :key="story.content._id"
      :blok="story.content"  />
      <Pakketten
      :key="story.content._id"
      :blok="story.content" />
      </div>
    </section>
    <PakkettenInfo
    :key="story.content._id"
    :blok="story.content"  />
  </section>

</template>

<script>
import AanbodInfo from '@/components/Aanbod/Aanbod-info'
import Pakketten from '@/components/Aanbod/Pakketten'
import PakkettenInfo from '@/components/Aanbod/Pakketten-info'
export default {
  components:{
    AanbodInfo,
    Pakketten,
    PakkettenInfo
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
   return context.app.$storyapi.get('cdn/stories/aanbod', {
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
.aanbod{
  min-height: 85vh;

}
.white-background{
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  padding-bottom: 80px;
}
@media (min-width: 768px) {
  .aanbod{
    min-height: 85vh;
    background-image: url('@/assets/img/aanbodbg.png');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
  }
}

@media (min-width: 1300px) {
  .aanbod-1{
    margin-top: 100px;
  }
  .white-background{
    background-color: transparent;
  }

}
</style>
