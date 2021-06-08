<template>
  <div>
    <main>
        <Navigationbar />
        <Nuxt />
          <Footer />
    </main>
  </div>
</template>

<script>
import Navigationbar from '@/components/Navigation/Navigationbar'
import Footer from '@/components/Footer/Footer'
export default {
  components:{
    Navigationbar,
    Footer
  }
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}
*, *::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
html{
  font-family: Arial, sans-serif;
  color: #043652;
  margin: 0;
  padding: 0;
}
hr, body{
  margin: 0;
  padding: 0;
}
.landing-content a{
  color: #043652;
  text-decoration: underline;
  cursor: auto;
}
.aanpak-listitems h3{
    font-size: 16px;
}
.rouw-content-p h3{
  font-size: 14px;
  font-weight: bold;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  margin-top: 40px;
  margin-bottom: 10px;
}
.fourth h3{
  font-size: 14px;
  font-weight: bold;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  margin-top: 20px;
  margin-bottom: 10px;
}
.second h3{
  font-size: 16px;
  margin-top: 20px
}
.aanpak-listitems ul li{
  background: url('~/assets/img/ster.png') no-repeat left center;
  padding: 15px 10px 15px 45px;
  list-style: none;
  margin: 0;
  vertical-align: middle;
}
.aanbod-listitems ul li
{
  background: url('~/assets/img/sterklein.png') no-repeat left center;
  padding: 10px 10px 10px 35px;
  list-style: none;
  margin: 0;
  vertical-align: middle;
  margin-left: 20px;
  width: 317px;
  font-size: 14px;
  color: #043652;
}
.aanbod-listitems-pakket ul li{
    font-size: 14px;
    color: black;
    background: url('~/assets/img/sterklein.png') no-repeat left center;
    padding: 10px 10px 10px 35px;
    list-style: none;
    margin: 0;
    vertical-align: middle;
    margin-left: 20px;
    margin-bottom: 15px;
    width: 90%;
    color: #043652;

}
.aanpak-listitems ul li{
  width: 95%;
  font-size: 12px;
  color: #043652;
  line-height: 133.31%;
  letter-spacing: 0.13em;
}
.hulp-listitems ul li{
  background: url('~/assets/img/ster.png') no-repeat left center;
  padding: 15px 10px 15px 45px;
  list-style: none;
  margin: 0;
  vertical-align: middle;
}
.aanpak-listitems ul{
  margin-bottom: 30px;
}
.aanpak-listitems p{
  font-size: 12px;
  width: 100%;
  line-height: 133.31%;
  letter-spacing: 0.13em;
  white-space: pre-line;
  margin-top: 20px;
}
.losconsult{
  height: 300px;
}
.consult{
  top: 27%;
}

@media (min-width: 768px) {
  .hulp-listitems ul li{
    width: 576px;
    margin-bottom: 30px;
    font-size: 20px;
    color: #043652;
  }
}
@media (min-width: 1200px) {
  .aanpak-listitems h3{
    font-size: 18px;
    font-weight: bold;
    line-height: 133.31%;
    letter-spacing: 0.13em;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .rouw-content-p h3{
      font-size: 18px;
  }
  .aanpak-listitems ul li{
    width: 95%;
    font-size: 14px;
    color: #043652;
    line-height: 133.31%;
    letter-spacing: 0.13em;
  }
  .aanpak-listitems p{
    font-size: 14px;
    width: 530px;
    margin-bottom: 100px;
  }
  .second p{
    margin-bottom: 20px;
  }
  .fourth h3{
    font-size: 18px;
    margin-top: 40px;
  }
  .aanbod-listitems-pakket ul li{
      font-size: 18px;
      color: black;
      background: url('~/assets/img/sterklein.png') no-repeat left center;
      padding: 10px 10px 10px 35px;
      list-style: none;
      margin: 0;
      vertical-align: middle;
      margin-left: 20px;
      margin-bottom: 15px;
      width: 317px;
      color: #043652;

  }
  .losconsult{
    height: 400px;
  }
}
</style>
