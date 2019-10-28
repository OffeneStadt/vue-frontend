<template>
    <section class="slider-section hero-style-1" id="home" :style="bgImg">
        <carousel class="hero-carousel owl-dot-style owl-dot-style__2"
            :items = "1"
            :nav = "false"
            :autoplay = "false"
            :smartSpeed = "1000"
        >
            <!-- single slider item -->
            <div v-for="(slider, sliders) in sliders" :key="sliders" class="hero-slider-item">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="">
                                <img :src="slider.sliderThumb" alt="slider thumb" style="width: auto">
                            </div>
                            
                            <div style="float:left; margin: 20px 0 0 0;">
                                <img  :src="require('../assets/img/veranstalter/koerber-stiftung.svg')" height="90" style="float: left; width: auto; margin: 1px; background: rgba(255, 255, 255, 0.8);">  
                                <img  :src="require('../assets/img/veranstalter/okf.svg')" height="90" style="float:left; width: auto; margin: 1px; background: rgba(255, 255, 255, 0.8);">  
                            </div>
                            
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="slider-content">
                                <h2 class="slider-title" style="background-color: rgb(31, 68, 108,0.8); padding: 8px">{{ slider.sliderTitle }}</h2>
                                <p class="slider-desc" style="background-color: rgb(31, 68, 108,0.8); padding: 8px">{{ slider.sliderDesc }}</p>
                                <div class="slider-btn">
                                    <a href="https://www.koerber-stiftung.de/?id=2393" class="read-more active" style="width: 100%; text-align:center; font-size:2.5em; font-weight: bold;" target="_blank">Anmeldung</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            
            <!-- single slider end -->
        </carousel>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: 'Slider',
        components: {
            carousel 
        },
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/slider/1.jpg')})`
                },
                sliders: [
                    {sliderThumb: require("../assets/img/slider/inside4.jpg"), sliderTitle: 'FORUM Offene Stadt 2019', sliderDesc: 
                    'Wie können uns offene digitale Lösungen dabei helfen, unsere Stadt und Region mitzugestalten? '
                    + 'Dieser Frage gehen wir am 8. November in unterhaltsamen Talks, praktischen Workshops und einer interaktiven Ausstellung im KörberForum nach. Mach mit #offenestadt '},
                ]
                
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/slider.scss';
</style>
