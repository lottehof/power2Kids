<template lang="html">
  <section>
   <component
     v-if="story.content.component"
     :key="story.content._uid"
     :blok="story.content"
     :is="story.content.component" />
 </section>
</template>

<script>
import Review from '@/components/Succesverhalen/Review'
export default {
  components:{
    Review
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
   return context.app.$storyapi.get('cdn/stories/review', {
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
.succesverhalen{
  height: 100vh;
}
.review-title{
  font-size: 36px;
  text-align: center;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;
}
.review-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}
.review-title-underline{
  width: 300px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-bottom: 50px;
}
.review-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  width: 90%;
  margin: 0 auto;
}
.review-image{
  width: 528.59px;
  height: 700px;
}
</style>
