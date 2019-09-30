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
                        <div class="col-xl-6 col-lg-5 col-md-5">
                            <div class="slider-thumb">
                                <img :src="slider.sliderThumb" alt="slider thumb">
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7 col-md-7">
                            <div class="slider-content">
                                <h2 class="slider-title">{{ slider.sliderTitle }}</h2>
                                <p class="slider-desc">{{ slider.sliderDesc }}</p>
                                <div class="slider-btn">
                                    <a href="#" class="read-more active"><i class="fa fa-meetup"></i> Anmeldung</a>
                                    <a href="#" class="read-more"><i class="fa fa-heart"></i> Open Apps</a>
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
                    backgroundImage: `url(${require('../assets/img/slider/3.jpg')})`
                },
                sliders: [
                    {sliderThumb: require("../assets/img/slider/1.jpg"), sliderTitle: 'FORUM Offene Stadt 2019', sliderDesc: 'KÖRBERFORUM | KEHRWIEDER 12 | HAMBURG | 8. NOVEMBER 2019 | 10 - 17 UHR'},
                    {sliderThumb: require("../assets/img/slider/2.jpg"), sliderTitle: 'FORUM Offene Stadt 2019', sliderDesc: 'KÖRBERFORUM | KEHRWIEDER 12 | HAMBURG | 8. NOVEMBER 2019 | 10 - 17 UHR'},
                    {sliderThumb: require("../assets/img/slider/3.jpg"), sliderTitle: 'FORUM Offene Stadt 2019', sliderDesc: 'KÖRBERFORUM | KEHRWIEDER 12 | HAMBURG | 8. NOVEMBER 2019 | 10 - 17 UHR'},
                ]
                
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/slider.scss';
</style>
