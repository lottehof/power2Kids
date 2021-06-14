<template>
  <div class="sidenav-container">
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>
    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav">
        <span class="material-icons" @click="hideSidebar">close</span>
        <a href="/"><img src="@/assets/img/logo_white_large.png" alt="Logo" class="nav-logo"></a>
        <app-links></app-links>
      </div>
    </transition>
  </div>
</template>

<script>
import AppLinks from '~/components/Menu/AppLinks'
export default {
  components: {
    AppLinks
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('nav/toggleSidebar')
    }
  },
  computed: {
    isSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    }
  }
}
</script>


<style scoped>
.material-icons:hover{
  color: black;
}
.nav-logo{
  width: 60%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.sidenav-container {
  height: auto;
  width: 100%;
  overflow-y: scroll;
 -webkit-overflow-scrolling:touch;
 /* z-index: 9999;
 position: fixed; */
}
.sidenav {
  height: 100vh;
  width: 100%;
  background-color: #9490A7;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: scroll;
 -webkit-overflow-scrolling:touch;
}
.sidenav span {
  position: absolute;
  left: 20px;
  color: white;
  font-size: 25px;
}
.backdrop {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 768px) {
  .sidenav-container {
    height: auto;
    width: 100%;
    overflow-y: scroll;
   -webkit-overflow-scrolling:touch;
   z-index: 9999;
   position: fixed;
  }
}
@media (min-width: 750px) {
  .sidenav {
    width: 100%;
    height: 400px;
  }
}
@media (min-width: 900px) {
  .nav-logo{
    width: auto;
    height: 100%;
  }
  .sidenav{
    height: auto;
  }
  .sidenav-container {
    height: 100%;
    width: 100%;
  }
  .sidenav span {
    position: absolute;
    left: 30px;
    color: white;
    font-size: 30px;
  }
  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>
