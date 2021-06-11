
<template>
  <div class="nav-links-second">
    <nuxt-link to="/"  class="nav-link">Home</nuxt-link>
    <nuxt-link to="/aanpak"  class="nav-link">Aanpak</nuxt-link>
    <nuxt-link to="/aanbod"  class="nav-link">Aanbod</nuxt-link>
    <nuxt-link to="/rouw&verlies"  class="nav-link">Rouw&Verlies</nuxt-link>
    <nuxt-link to="/overmij"  class="nav-link">Over mij</nuxt-link>
    <nuxt-link to="/contact"  class="nav-link">Contact</nuxt-link>
  </div>
</template>

<style scoped>
/* .nav-links-second{
  margin-top: 10px;
} */
.nav-links-second{
  background-color: #9490A7;
  height: 100%;
  padding-top: 10px;
}
.nav-link{
    margin: 0px 25px;
    font-size: 20px;
}
.nav-links-second  a{
    color: #234A71;
    display: block;
    padding: 20px 0px;
    width: 150px;
}
.nav-links-second > a:hover {
  border-bottom: 4px solid #234A71;
}

@media (min-width: 1300px) {
  .nav-links-second{
    float: right;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-right: 70px;
    background-color: transparent;
    margin-top: 0;
    padding-top: 0;
  }
  .nav-link{
    margin: 0;
    font-size: 18px;
  }
  .nav-links-second  a {
    display: inline-block;
    margin: 0px 15px;
    text-decoration: none;
    color: #234A71;
    padding: 0;
    width: auto;
  }
  .nav-links-second > a:hover {
    border-bottom: 4px solid #234A71;
  }
  .nav-link.nuxt-link-exact-active {
     border-bottom: 4px solid  #234A71;
   }

}

</style>
