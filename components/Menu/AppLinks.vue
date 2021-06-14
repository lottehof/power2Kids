<template>
<div >
    <div class="nav-links-second">
      <nuxt-link to="/"  class="nav-link">Home</nuxt-link>
      <nuxt-link to="/aanpak"  class="nav-link">Aanpak</nuxt-link>
      <nuxt-link to="/aanbod"  class="nav-link">Aanbod</nuxt-link>
      <nuxt-link to="/rouw&verlies"  class="nav-link">Rouw&Verlies</nuxt-link>
      <nuxt-link to="/overmij"  class="nav-link overmij">Over mij</nuxt-link>
      <nuxt-link to="/contact"  class="nav-link">Contact</nuxt-link>
    </div>

    <div class="mobile-container">
      <div class="mobile-menu">
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/">Home</a></button>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/aanpak">Aanpak</a></button>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/aanbod">Aanbod</a></button>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/rouw&verlies">Rouw&Verlies</a></button>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/overmij">Over mij</a></button>
      <button class="MobileMenu-title"><a class="MobileMenu-title" href="/contact">Contact</a></button>
      <div class="icon-container">
        <a class="link" href="https://www.linkedin.com/in/hannevanwilligenburg/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="link" href="https://www.instagram.com/praktijk_power2kids/" target="_blank">
        <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    isOpenOverOns: false,
    isOpenBoten: false,
    isOpenJachthaven: false,
    isOpenShop: false,
    }
  }
}
</script>

<style scoped>
*{
  list-style: none;
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

.fa-linkedin-in,
.fa-instagram{
  font-size: 45px;
  color: white;
  margin: 30px;
}
.icon-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
}
.nav-links-second {
  display: none
}
.material-icons{
  font-size: 50px;
  color: white;
}
.nav-image{
  width: 90%;
  height: auto;
  display: none;
}
.MobileMenu-title{
  font-size: 28px;
  color: white;
  font-family: "Arial";
  margin: 15px;
  background: none;
  border: none;
  width: 100%;
}
.MobileMenu-title:active,
.MobileMenu-title:hover{
  color: #043652;
}
.one:after,
.two::after,
.three::after {
  content: '\276F';
  color: white;
  float: right;
  font-size: 15px;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.MobileMenu-link{
  font-size: 16px;
  color: white;
  font-family: "Arial";
  margin-top: 10px;
  height: 10px;
  text-align: center;
  width: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.nav-links-second > a:hover {
  border-bottom: 4px solid #234A71;
}



@media (min-width: 1300px) {
  .mobile-container{
    display: none;
  }
  .nav-links-second{
    /* float: right; */
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: white;
    margin-top: 0;
    padding-top: 0;
    width: 673px;
    /* margin: 0 auto; */
  }
  .nav-link{
    margin: 0;
    font-size: 18px;
  }
  .nav-links-second  a {
    margin: 0px 15px;
    text-decoration: none;
    color: #234A71;
    padding: 0;
    width: auto;
  }
  .nav-link.overmij{
    width: 67px;
  }
  .nav-links-second > a:hover {
    border-bottom: 4px solid #234A71;
  }
  .nav-link.nuxt-link-exact-active {
     border-bottom: 4px solid  #234A71;
   }
}

</style>
