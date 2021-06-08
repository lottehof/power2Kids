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
    return { story: { content: {} } }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/rouw-verlies`, {
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
