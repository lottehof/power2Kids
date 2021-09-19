<template lang="html">
  <section class="Footer">
    <section class="footer-flex">
    <div class="footer-logo">
      <img class="footer-logo-img" src="@/assets/img/logo_white_large.png" alt="Power2Kids logo">
    </div>
    <section class="footer-grid">
    <div class="socialmedia-icons">
      <a class="link" href="https://www.linkedin.com/in/hannevanwilligenburg/" target="_blank">
      <i class="fab fa-linkedin-in" ></i>
      </a>
      <a  class="link" href="https://www.instagram.com/hanne.vanwilligenburg/" target="_blank">
      <i class="fab fa-instagram" href="https://www.instagram.com/praktijk_power2kids/" target="_blank"></i>
      </a>
    </div>

    <div class="footer-content">
      <h4>Contact</h4>
      <ul>
        <li>Kindercoach praktijk POWER2Kids</li>
        <li>Hanne van Willigenburg</li>
        <li href="tel://+31652638537">+31(6)52638537</li>
        <li onclick="window.location.href='mailto:Hanne@POWER2Kids.nl'">Hanne@POWER2Kids.nl</li>
        <li class="last-listitem" onclick="window.location.href='https://www.google.com/maps/place/Bredeweg,+1098+BL+Amsterdam/@52.3556104,4.9279784,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609700d75c04d:0x429a4481281ebedd!8m2!3d52.3556104!4d4.9301671'">Bredeweg 9-3, 1098BL Amsterdam</li>
      </ul>
    </div>

    </section>
      </section>
    <div class="bottom-copyright">
      <p class="copyright">@POWER2Kids</p>
    </div>
  </section>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
*{
  text-align: left;
}
.Footer{
  height: 370px;
  width: 100vw;
  background-color: #234A71;
  color: white;
  padding-left: 20px;
  position: relative;
}
.link{
  color: white;
}
.footer-logo-img{
  width: 150px;
  height: 35px;
  margin-top: 40px;
}
.footer-content h4{
  font-size: 16px;
  margin-bottom: 0px;
}
ul li{
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  height: 20px;
  padding: 13px 0px;
  color: white;
  text-decoration: none;
}
/* .last-listitem{
  width: 231px;
} */
.bottom-copyright{
  text-align: center;
  padding-top: 30px;
}

.footer-grid{
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  margin-top: 30px;
}
.footer-content{
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}
.socialmedia-icons{
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.fab{
  font-size: 30px;
  margin: 10px;
}
.socialmedia-icons{
  display: flex;
  flex-direction: column;
  margin: 20px;
}
@media (min-width: 750px) {
  .Footer{
    height: 236px;
  }
  .footer-grid{
    display: flex;
  }
  .footer-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  .footer-logo-img{
    height: 50px;
    width: 210px;
    margin-top: 0;
  }
  .footer-content{
    font-weight: bold;
  }
  .bottom-copyright{
    padding-top: 20px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}
</style>
