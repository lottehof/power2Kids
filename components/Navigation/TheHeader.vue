<template>
  <header class="nav">
    <div class="desktop">
    <div class="nav-header">
      <div class="nav-title">
        <nuxt-link to="/">
        <img class="nav-logo" src="@/assets/img/logo_small.png" alt="POWER2Kids logo">
      </nuxt-link>
      </div>
    </div>
      <div class="nav-links">
        <app-links></app-links>
      </div>



    </div>
      <div class="nav-header mobile">
        <div class="nav-title">
          <nuxt-link to="/">
          <img class="nav-logo" src="@/assets/img/logo_small.png" alt="POWER2Kids logo">
        </nuxt-link>
        </div>
      </div>
        <div class="nav-btn" role="button" @click="$store.dispatch('nav/toggleSidebar')">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
    </header>
</template>

<script>
import AppLinks from '~/components/Menu/AppLinks'
export default {
  components: {
    AppLinks
  }
}
</script>

<style scoped>
.nav {
  width: 100vw;
  background-color: transparent;
  position: relative;
  margin-top: 20px;
  margin-right: 0;
  z-index: 2;
}
.desktop{
  display: none;
}
.nav-logo{
  width: 210px;
  height: 50px;
  z-index: 2;
}
.nav-links{
  max-width: 100vw;
  z-index: 2;
}
.nav > .nav-header {
  display: inline;
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  padding: 10px 10px 10px 10px;
  margin-left: 110px;
}
.nav > .nav-btn {
  display: none;
}
.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}
.nav > .nav-links > a {
  display: inline-block;
  margin: 0px 15px;
  text-decoration: none;
  color: white;
}
.nav-links > a:hover {
  border-bottom: 4px solid #234A71;
}
.nav-link.nuxt-link-exact-active {
  border-bottom: 4px solid #234A71;
}
.nav > .nav-btn {
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
}
.nav-logo{
  width: 126px;
  height: 30px;
}
.nav > .nav-btn > label {
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 13px;
  margin-left: 10px;
}
.nav > .nav-btn > label > span {
  display: block;
  width: 25px;
  height: 8px;
  border-top: 2px solid #234A71;
  border-top: 2px solid #234A71;
}

.nav > .nav-links {
  display: none;
}
 .nav > .nav-links > a {
  display: none;
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  padding: 10px 10px 10px 10px;
  margin-left: 0;
  text-align: center;
  width: 100%;
}
@media (min-width: 768px) {
  .nav > .nav-btn > label {
    margin-left: 20px;
  }
}
@media (min-width: 1300px) {
  .desktop{
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr;
    height: 70px
  }
  .nav-header.mobile{
    display: none;
  }
  .nav {
    width: 100vw;
    background-color: transparent;
    position: relative;
    margin-top: 20px;
    margin-right: 0;
  }
  .nav-logo{
    width: 210px;
    height: 50px;
  }
  .nav-links{
    max-width: 100vw;
    z-index: 2;
    grid-column: 2;
  }
  .nav-title{
    width: 210px;
    grid-column: 1;
  }

  .nav > .desktop > .nav-header > .nav-title {
    padding: 10px 10px 10px 10px;
    margin-left: 110px;
  }
  .nav > .nav-btn {
    display: none;
  }
  /* .nav > .desktop > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
  } */
  .nav >  .desktop > .nav-links > a {
    display: inline-block;
    margin: 0px 15px;
    text-decoration: none;
    color: #234A71;
  }
  .nav-links > a:hover {
    border-bottom: 4px solid #234A71;
  }
  .nav-link.nuxt-link-exact-active {
    border-bottom: 4px solid #234A71;
  }
  .nav-link{
    width: auto;
  }
}

</style>
