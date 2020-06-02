<template>
    <section class="slider-section hero-style-2 hero-style-3" id="home" :style="bgImg">
        <div class="hero-slider-item">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 order-1 order-md-1">
                        <div class="slider-banner-thumb">
                            <img src="../../assets/img/slider/inside4.jpg">
                                    <div style="float:left; margin: 20px 0 0 0;">
                                <img  :src="require('../../assets/img/veranstalter/koerber-stiftung.svg')" height="80" style="float: left; width: auto; background: rgba(255, 255, 255, 0.8);">  
                                <img  :src="require('../../assets/img/veranstalter/okf.svg')" height="80" style="float:left; width: auto; background: rgba(255, 255, 255, 0.8);">  
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 order-2 order-md-2">
                        <div class="slider-content slider-content__style-3">
                            <h2 class="slider-title"  style="background-color: rgb(31, 68, 108,0.8); padding: 8px">FORUM Offene Stadt 2019</h2>
                            <p class="slider-desc"  style="background-color: rgb(31, 68, 108,0.8); padding: 8px">Wie können uns offene digitale Lösungen dabei helfen, unsere Stadt und Region mitzugestalten? Dieser Frage gehen wir am 8. November in unterhaltsamen Talks, praktischen Workshops und einer interaktiven Ausstellung im KörberForum nach. Mach mit #offenestadt</p>
                            <div class="slider-btn">
                                <a href="https://twitter.com/OffeneStadt" class="read-more active" style="width: 100%; text-align:center; font-size:2.5em; font-weight: bold;" target="_blank">#OffeneStadt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HeroBanner2019',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../../assets/img/slider/1.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../../assets/scss/variables.scss';
    @import '../../assets/scss/components/slider.scss';
</style>
