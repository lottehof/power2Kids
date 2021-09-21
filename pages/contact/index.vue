<template lang="html">
  <section class="contact">
    <div class="contact-bg">
    <div class="title-container">
      <h1 class="contact-title">Contact</h1>
      <hr class="contact-underline">
    </div>
    <section class="contact-content">
      <p class="contact-content-p">Heb je interesse en wil je graag kennismaken? Of heb je nog vragen?
        Neem gerust contact met me op. Ik help jouw kind of gezin graag.
      </p>
    </section>

    <section class="contact-box">
      <div class="left-side">
        <img src="@/assets/img/Contact-pagina.png" class="contact-image" alt="Hanne van Willigenburg">
      </div>
      <div class="right-side">
        <div class="contact-listitem">
          <img class="icon" src="@/assets/img/smartphone.svg" alt="smartphone icon">
          <p class="contact-listitem-p" href="tel://+31652638537">Mobiel
          +31(6)52638537</p>
        </div>

        <div class="contact-listitem">
          <img class="icon" src="@/assets/img/email.svg" alt="email icon">
          <p class="contact-listitem-p" onclick="window.location.href='mailto:Hanne@POWER2Kids.nl'">E-mailadres
            Hanne@POWER2Kids.nl</p>
        </div>

        <div class="contact-listitem">
          <img class="icon" src="@/assets/img/document.svg" alt="document icon">
          <p class="contact-listitem-p">KvK nummer
          73706485</p>
        </div>

        <div class="contact-listitem">
          <img class="icon" src="@/assets/img/placeholder.svg" alt="location icon">
          <p class="contact-listitem-p" onclick="window.location.href='https://www.google.com/maps/place/Bredeweg,+1098+BL+Amsterdam/@52.3556104,4.9279784,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609700d75c04d:0x429a4481281ebedd!8m2!3d52.3556104!4d4.9301671'">Bredeweg 9-3, 1098BL Amsterdam</p>
        </div>
      </div>

    </section>
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
.contact-bg{
  min-height: 100vh;
  background-image: url('@/assets/img/contactbg.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  padding-bottom: 30px;
}
.contact-title{
  text-align: center;
}
.title-container{
  margin-bottom: 20px;
  width: 100vw;

  padding-top: 30px;
}
.contact-underline{
  width: 110px;
  margin: 0 auto;
  height: 2px;
  color: #043652;
  background-color: #043652;
  border: none;
}
.contact-content{
  width: 90%;
  margin: 0 auto;
}
.contact-content-p{
  font-size: 14px;
  width: 90%;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  white-space: pre-line;
}
.contact-box{
  width: 300px;
  height: auto;
  background-color: #234A71;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 30px;
  margin-top: 30px;
}
.contact-box{
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.contact-box:after{
  right:10px;
  left:auto;
  -webkit-transform:skew(8deg) rotate(3deg);
  -moz-transform:skew(8deg) rotate(3deg);
  -ms-transform:skew(8deg) rotate(3deg);
  -o-transform:skew(8deg) rotate(3deg);
  transform:skew(8deg) rotate(3deg);
}
.contact-image{
  width: 300px;
}
.icon{
  width: 40px;
  height: 40px;
  color: white;
  margin-right: 15px;
  margin-left: 20px;
}
.contact-listitem{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  white-space: pre-line;
  margin-top: 40px;
}
.contact-listitem-p{
  width: 250px;
}
.contact-listitem-p:hover{
  cursor: pointer;
}

@media (min-width: 768px) {
  .contact-box{
    width: 620px;
    height: 350px;
    background-color: #234A71;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 100px;
  }
 .contact-content{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact-content-p{
    text-align: center;
  }
}
@media (min-width:1300px) {
  .contact-title{
    font-size: 40px;
    padding-top: 50px;
    color: #043652;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  .contact{
    padding-top: 100px;
  }

  .contact-content{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .contact-content-p{
    font-size: 18px;
    width: 800px;
    text-align: center;
    margin-left: 50px;
  }
  .contact-box{
    width: 800px;
    height: 503px;
    position: absolute;
    top: 33%;
    left: 22%;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
  }
  .left-side{
    width: 430px;
    height: 503px;
  }
  .right-side{
    margin-top: 30px;
    margin-left: 10px;
  }
  .contact-listitem{
    width: 370px;
    font-size: 18px;
  }
  .contact-listitem-p{
    width: 270px;
  }
  .contact-image{
    width: 430px;
  }
}
@media (min-width: 1800px) {
  .contact-box{
    width: 800px;
    height: 503px;
    position: absolute;
    top: 36%;
    left: 28%;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
