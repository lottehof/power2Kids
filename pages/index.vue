<template>
  <div class="Home">
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

    <!-- <div class="review-box">
      <h2 class="review-title">Ervaringen van ouders</h2>
      <hr class="review-title-underline">

    </div> -->

  </div>
</template>

<script>
import LandingComponent from '@/components/Home/LandingComponent'
import HulpIdeaalComponent from '@/components/Home/HulpIdeaalComponent'
export default {
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
.review-title{
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.review{
  margin-bottom: 50px;
}


</style>
