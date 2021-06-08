<template lang="html">
  <section>
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
    return { story: { content: {} } }
  },
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get(`cdn/stories/aanbod`, {
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
.aanbod{
  min-height: 85vh;
  background-image: url('@/assets/img/aanbodbg.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
.white-background{
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    padding-bottom: 80px;
}

@media (min-width: 1300px) {
.white-background{
  background-color: transparent;
}
}
</style>
