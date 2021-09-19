<template>
  <div>
    <main>
      <TheHeader/>

     <TheSideNav/>
        <Nuxt />
          <Footer />
    </main>
  </div>
</template>

<script>

import Footer from '@/components/Footer/Footer'
import TheHeader from '@/components/Navigation/TheHeader'
import TheSideNav from '@/components/Navigation/TheSideNav'
export default {
  components:{
    Footer,
    TheHeader,
    TheSideNav,
  },

}
</script>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  text-align: justify;
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
    font-size: 18px;
}
.rouw-content-p h3{
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
}
.fourth h3{
  font-size: 14px;
  font-weight: bold;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.second h3{
  font-size: 18px;
  margin-top: 20px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
}
.aanpak-listitems ul li{
  padding: 10px 10px 10px 10px;
  margin-left: 15px;
}
.aanbod-listitems ul li
{
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
  width: 317px;
  font-size: 14px;

}
.aanbod-listitems-pakket ul li{
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
  margin-bottom: 15px;
  width: 90%;
  font-size: 14px;
  text-align: left;
}
.aanpak-listitems ul li{
  width: 95%;
  font-size: 14px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
}
.hulp-listitems ul li{
  padding: 15px 10px 15px 45px;
}
.aanpak-listitems ul{
  margin-bottom: 30px;
}
.aanpak-listitems p{
  font-size: 14px;
  width: 100%;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  white-space: pre-line;
  margin-top: 20px;
  /* padding-bottom: 50px; */
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
  }
  .aanbod-listitems ul li
  {
    padding: 10px 10px 10px 10px;
    margin-left: 20px;
    width: 100%;
    font-size: 14px;
  }
}
@media (min-width: 1200px) {
  .aanpak-listitems h3{
    font-size: 18px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: left;
  }
  .rouw-content-p h3{
      font-size: 18px;
  }
  .aanpak-listitems ul li{
    font-size: 16px;
    width: 515px;
  }
  .aanpak-listitems p{
    font-size: 16px;
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
  .aanbod-listitems-pakket ul {
    margin: 0 auto;
  }
  .aanbod-listitems-pakket ul li{
    font-size: 16px;
    padding: 10px 10px 10px 10px;
    width: 95%;

  }
  .losconsult{
    height: 400px;
  }
}
</style>
