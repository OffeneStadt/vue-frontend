<template>
    <section class="slider-section hero-style-2 hero-style-3" id="home" :style="bgImg">
        <div class="hero-slider-item">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 order-1 order-md-1">
                        <div class="slider-banner-thumb">
                            <img src="../assets/img/slider/inside6_neu.png">
                            <div style="float:left; margin: 20px 0 0 0;">
                                <img  :src="require('../assets/img/veranstalter/koerber-stiftung.svg')" height="55" width="130" style="padding:6px; margin-right:2px;float: left; background: rgba(255, 255, 255, 0.8);">  
                                <img  :src="require('../assets/img/veranstalter/okf.svg')" height="55" width="130" style="padding:4px; margin-right:2px;float:left; background: rgba(255, 255, 255, 0.8);">  
                                <img  :src="require('../assets/img/veranstalter/CFG.svg')" height="55" width="130" style="padding:4px;float:left; background: rgba(255, 255, 255, 0.8);">  
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 order-2 order-md-2">
                        <div class="slider-content slider-content__style-3">
                            <h2 class="slider-title"  style="background-color: #1f446c; background-color: rgba(31, 68, 108,0.8); padding: 15px; font-size:1.7em">Forum Offene Stadt. Partizipativ, digital, nachhaltig</h2>
                            <p class="slider-desc"  style="background-color: #1f446c; background-color: rgba(31, 68, 108,0.8); padding: 15px; font-size:0.95em">
                                Die Körber-Stiftung und Code for Germany, ein Projekt der Open Knowledge Foundation Deutschland, laden wieder zum Forum Offene Stadt nach Hamburg ein.
                                <br /><br />
                                Mit dem Untertitel partizipativ, digital, nachhaltig richtet sich der thematische Fokus auf die Gestaltung der digitalen Stadt der Zukunft. Was braucht es dafür, wie können Bürgerinnen und Bürger beteiligt werden, bei wem finden die Städte Unterstützung und wie kann die Digitalisierung den Verwaltungen dabei helfen, mit Herausforderungen wie der Corona- und Klimakrise umzugehen?
                                <br /><br />
                                Diesen und weiteren Fragen möchten wir gemeinsam in Impulsvorträgen, Workshops und Hintergrundgesprächen nachgehen und mit Ihnen von Best-Practice-Beispielen aus Deutschland und darüber hinaus lernen. 
                                <br /><br />
                                Das Programm finden Sie nun <a href="/#programm">hier</a>. Folgen Sie uns auch auf Twitter unter <a href="https://twitter.com/codeforde">@codeforde</a> und <a href="https://twitter.com/KoerberLBG">@KoerberLBG</a> sowie unter #FOS2020 für weitere Informationen. Die Vorträge und Paneldiskussionen können Sie ebenfalls im <a href="/#livestream">Live Stream</a> auf dieser Seite mitverfolgen.
                                <br /><br />
                                Um an Diskussionen und Workshops teilzunehmen, melden Sie sich bitte an. Sollte die Anmeldung bei Ihnen aus technischen Gründen nicht funktionieren, ist sie alternativ über <a href="mailto:dez@koerber-Stiftung.de">dez@koerber-stiftung.de</a> möglich
                            </p>
                            <div class="slider-btn" style="margin-top: 50px">
                                <a href="https://www.koerber-stiftung.de/?id=2393" class="read-more active" style="width: 100%; text-align:center; font-size:2.5em; font-weight: bold;" target="_blank">Anmeldung</a>
                            </div>
                            <!--
                            <div class="slider-btn">
                                <a href="https://twitter.com/OffeneStadt" class="read-more active" style="width: 100%; text-align:center; font-size:2.5em; font-weight: bold;" target="_blank">#OffeneStadt</a>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HeroBanner',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/slider/1.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/slider.scss';
</style>
