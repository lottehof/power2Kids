<template>
  <div class="header">
    <header class="nav">
      <div class="nav-header">
        <div class="nav-title">
          <nuxt-link to="/">
          <img class="nav-logo" src="@/assets/img/logo_white_large.png" alt="POWER2Kids logo">
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

        <div class="nav-links">
            <app-links></app-links>
        </div>
    </header>

    <div class="mobile">
      <header class="nav-mobile">
        <div class="nav-header-mobile">
          <div class="nav-title-mobile">
            <nuxt-link to="/">
            <img class="nav-logo-mobile" src="@/assets/img/logo_small.png" alt="POWER2Kids logo">
          </nuxt-link>
          </div>
        </div>
          <div class="nav-btn-mobile" role="button" @click="$store.dispatch('nav/toggleSidebar')">
            <label for="nav-check-mobile">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links-mobile">
              <app-links></app-links>
          </div>
      </header>
    </div>
      </div>
</template>

<script>
    import AppLinks from '@/components/HomeMenu/HomeAppLinks'
export default {
    components: { AppLinks }
}
</script>

<style scoped>
.nav {
  /* height: 70px; */
  width: 100vw;
  background-color: transparent;
  position: relative;
  margin-top: 20px;
  margin-right: 0;
  z-index: 2;

  /* background-color: #234A71; */
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
  color: #234A71;
}
.nav-links > a:hover {
  border-bottom: 4px solid #234A71;
}
.nav-link.nuxt-link-exact-active {
  border-bottom: 4px solid #234A71;
}

.nav-mobile{
  display: none;
}


@media (max-width:1300px) {
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
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 8px;
    border-top: 2px solid white;
    border-top: 2px solid white;
  }

  .nav{
    width: 100vw;
      background-color: #234A71;
      margin-top: 0;
      display: none;
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

/*-------------------------*/
  .nav-mobile > .nav-btn-mobile {
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 20px;
  }
  .nav-logo-mobile{
    width: 126px;
    height: 30px;
  }
  .nav-mobile > .nav-btn-mobile > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav-mobile > .nav-btn-mobile > label > span {
    display: block;
    width: 25px;
    height: 8px;
    border-top: 2px solid #234A71;
    border-top: 2px solid #234A71;
  }
  .nav-mobile{
    display: block;
    width: 100vw;
      background-color: white;
      margin-top: 0;
      margin-top: 20px;
  }

  .nav-mobile > .nav-links-mobile {
    display: none;
  }
   .nav-mobile > .nav-links-mobile > a {
    display: none;
  }
  .nav-mobile > .nav-header-mobile > .nav-title-mobile {
    display: inline-block;
    padding: 10px 10px 10px 10px;
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
}




</style>
