<template lang="html">
  <section class="contact">
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
          <p class="contact-listitem-p" onclick="window.location.href='https://www.google.com/maps/dir//Bredeweg+9,+1098+BR+Amsterdam/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47c609706cbbf0b7:0x1e35304ab9750498?sa=X&ved=2ahUKEwj-wtjNvIfxAhWNEBQKHSCpB-YQwwUwAHoECAYQAw'">Bredeweg 9-3, 1098
            BR Amsterdam</p>
        </div>
      </div>

    </section>

</section>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.contact{
  min-height: 100vh;
  background-image: url('@/assets/img/contactbg.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  padding-bottom: 30px;
}
.title-container{
  margin-bottom: 20px;
  width: 100vw;
  text-align: center;
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
  line-height: 128.4%;
  letter-spacing: 0.13em;
  white-space: pre-line;
  /* margin-left: 15px; */
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
.contact-box
{
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.contact-box:before, .contact-box:after
{
  content:"";
  position:absolute;
  z-index:-1;
  -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
  -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
  box-shadow:0 0 20px rgba(0,0,0,0.8);
  top:50%;
  bottom:0;
  left:10px;
  right:10px;
  -moz-border-radius:100px / 10px;
  border-radius:100px / 10px;
}
.contact-box:after
{
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
    width: 80%;
    height: 350px;
    background-color: #234A71;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 30px;
    margin-top: 30px;

  }
  .contact-image{
    width: 300px;
  }
  .contact-content{
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width:1300px) {
.contact{
  height: 100vh;
  background-image: url('@/assets/img/contactbg.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
.title-container{
  margin-bottom: 20px;
  width: 100vw;
  text-align: center;

}
.contact-title{
  font-size: 40px;
  padding-top: 50px;
  color: #043652;
  font-weight: bold;
  margin-bottom: 10px;

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
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center
}
.contact-content-p{
  font-size: 18px;
  width: 800px;
  line-height: 128.4%;
  letter-spacing: 0.13em;
  white-space: pre-line;
  text-align: center;
  margin-left: 50px;
}
.contact-box{
  width: 800px;
  height: 503px;
  background-color: #234A71;
  position: absolute;
  top: 40%;
  left: 22%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  display: grid;
}
.icon{
  width: 40px;
  height: 40px;
  color: white;
  margin-right: 15px;
}
.contact-listitem{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  white-space: pre-line;
  margin-top: 40px;
}
.contact-listitem-p{
  width: 270px;
}
.contact-image{
  width: 430px;
}
}
</style>
