<template lang="html">
  <div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      <img class="nav-logo" src="@/assets/img/logo_small.png" alt="POWER2Kids logo">
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="nav-links">
    <nuxt-link to="/"  class="nav-link">Home</nuxt-link>
    <nuxt-link to="/aanpak"  class="nav-link">Aanpak</nuxt-link>
    <nuxt-link to="/aanbod"  class="nav-link">Aanbod</nuxt-link>
    <nuxt-link to="/rouw&verlies"  class="nav-link">Rouw&Verlies</nuxt-link>
    <nuxt-link to="/overmij"  class="nav-link">Over mij</nuxt-link>
    <nuxt-link to="/contact"  class="nav-link">Contact</nuxt-link>
  </div>
</div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.nav {
  height: 70px;
  width: 100vw;
  background-color: white;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 0;
  z-index: 2;
}
.nav-logo{
  width: 210px;
  height: 50px;
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
  margin-right: 70px;
}

.nav > .nav-links > a {
  display: inline-block;
  margin: 0px 15px;
  text-decoration: none;
  color: #234A71;
}

.nav > .nav-links > a:hover {
  border-bottom: 4px solid #234A71;
}
.nav-link.nuxt-link-exact-active {
   border-bottom: 4px solid #234A71;
 }

.nav > #nav-check {
  display: none;
}

@media (max-width:1200px) {
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
    border-top: 2px solid #234A71;
  }
  .nav{
    width: 100vw;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #9490A7;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
    padding: 20px;
  }
  .nav > .nav-links > a {
    display: block;
    padding: 20px;
  }
  .nav > .nav-header > .nav-title {
    display: inline-block;
    padding: 10px 10px 10px 10px;
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;

  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
@media (min-width:1300px) {
  .nav {
    height: 70px;
    width: 100vw;
    background-color: transparent;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0;
    z-index: 2;
  }
  .nav-logo{
    width: 210px;
    height: 50px;
  }

  .nav-links{
    max-width: 100vw;
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
    margin-right: 70px;
  }

  .nav > .nav-links > a {
    display: inline-block;
    margin: 0px 15px;
    text-decoration: none;
    color: white;
  }

  .nav > .nav-links > a:hover {
    border-bottom: 4px solid white;
  }
  .nav-link.nuxt-link-exact-active {
     border-bottom: 4px solid white;
   }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width:1200px) {
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
      border-top: 2px solid #234A71;
    }
    .nav{
      width: 100vw;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #9490A7;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      padding: 20px;
    }
    .nav > .nav-links > a {
      display: block;
      padding: 20px;
    }
    .nav > .nav-header > .nav-title {
      display: inline-block;
      padding: 10px 10px 10px 10px;
      margin-left: 0;
      text-align: center;
      width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;

    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
}

</style>
