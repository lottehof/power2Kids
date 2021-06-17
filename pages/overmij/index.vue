<template lang="html">
  <section class="overmij">
    <section class="overmij-container">
      <div class="overmij-left">
      <div class="overmij-content">
        <h1 class="overmij-title"> {{story.content.title}}</h1>
        <!-- <h3 class="overmij-sub-title">{{story.content.sub_title}}</h3> -->
        <hr class="overmij-underline">
      </div>

      <section class="overmij-content-article" v-html="$options.filters.markdown(story.content.content)"></section>
      <div class="socialmedia-icons">
        <!-- <i class="fab fa-facebook-f"></i> -->
        <a class="link" href="https://www.instagram.com/praktijk_power2kids/" target="_blank">
        <i class="fab fa-instagram"></i>
        </a>
        <a class="link" href="https://www.linkedin.com/in/hannevanwilligenburg/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <hr class="socialmedia-icons-line">
          </div>
          <div class="overmij-right">
            <div class="image-holder">
            <img src="@/assets/img/overmij.png" alt="Hanne van Willigenburg" class="overmij-image">
          </div>
          </div>
    </section>
    <div class="review">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component" />
        </div>
  </section>
</template>

<script>
export default {
    layout: 'overmijnav',
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
     return context.app.$storyapi.get('cdn/stories/over-mij', {
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
.overmij{
  min-height: 100%;
}
.overmij-left{
  margin: 0 auto;
}
.review{
  margin-bottom: 50px;
}
.overmij-content{
  margin-top: 50px;
  margin: 0 auto;
  width: 95%;
}
.overmij-title{
  font-size: 26px;
  width: 90%;
  white-space: pre-line;
  text-align: center;
  text-transform: uppercase;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  /* line-height: 128.4%; */
  color: #234A71;
  padding-top: 20px;
}
.overmij-sub-title{
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  text-align: center;
  color: #234A71;
  width: 90%;
  margin-top: 20px;
}
.overmij-underline{
  width: 80%;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
  margin-top: 10px;
}
.overmij-content-article{
  width: 90%;
  margin: 0 auto;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* line-height: 136.9%; */
  color: #043652;
  white-space: pre-line;
  margin-top: 20px;
}
.socialmedia-icons{
  display: flex;
  justify-content: center;
  align-items: center;
}
.fab{
  font-size: 45px;
  margin: 30px 29px;
}
.socialmedia-icons-line{
  width: 90%;
  margin: 0 auto;
  height: 8px;
  color: #043652;
  background-color: #043652;
  border: none;
}
.link{
  color: #043652;
}
.image-holder{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.overmij-image{
  width: 90%;
  height: 500px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .overmij-image{
    width: 400px;
  }
  .overmij-content-article{
    font-size: 16px;
    width: 500px;
  }
  .overmij-title{
    font-size: 30px;
    margin: 0 auto;
  }
  .overmij-sub-title{
    font-size: 24px;
    margin: 0 auto;
    margin-top: 15px;
  }
}
@media (min-width: 1300px) {
  .overmij{
    min-height: 100vh;
  }
  .overmij-container{
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
  .overmij-content{
    width: 605px;
    height: 100px;
    margin-top: 50px;
  }
  .overmij-title{
    font-size: 40px;
    width: 605px;
  }
  .overmij-sub-title{
    font-size: 24px;
    width: 605px;
  }
  .overmij-underline{
    width: 390px;
  }
  .overmij-content-article{
    width: 601px;
    height: 490px;
    left: 50px;
    top: 368px;
    font-size: 18px;
  }
  .socialmedia-icons-line{
    width: 235px;
  }
  .image-holder{
    width: 100%;
    height: 90vh;
  }
  .overmij-image{
    width: 50vw;
    height: 1024px;
    position: absolute;
    top: 0;
    margin: 0;
  }
}
</style>
