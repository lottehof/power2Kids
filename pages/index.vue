<template>
  <div class="home">
    <div class="white-background">
    <LandingComponent
    :key="story.content._id"
    :blok="story.content"  />
    </div>
    <HulpIdeaalComponent
    :key="story.content._id"
    :blok="story.content"  />
    <div class="review">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component" />
        </div>
  </div>
</template>

<script>
import LandingComponent from '@/components/Home/LandingComponent'
import HulpIdeaalComponent from '@/components/Home/HulpIdeaalComponent'
export default {
  layout: 'homelayout',
  components: {
    LandingComponent,
    HulpIdeaalComponent,
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
   return context.app.$storyapi.get('cdn/stories/landingpage', {
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

<style>
.review{
  margin-bottom: 50px;
}
</style>
