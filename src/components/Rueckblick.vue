<template>
    <section class="screenshot-area section-padding pt-100 fix" id="rueckblick">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Rückblick 2019</h2>
                        <p class="paragraph">CC-BY 4.0 <br />Fotos: Claudia Höhne<br /> noch mehr Bilder gibts <a href="https://www.flickr.com/photos/okfde/albums/72157711775343936" target="_blank">hier</a> </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                 <carousel :items = "2" :nav = "false" :smartSpeed = "1000">
          
                        <div v-for="(screenshot, screen) in screenshots" :key="screen">
                            <div class="screenshot-item" style="margin: 0 1px 0 1px;">
                                <img :src="screenshot.screenImg" alt="screenshot thumb">
                            </div>
                        </div>

                    </carousel>
                    <!--
                <div v-for="(screenshot, screen) in screenshots" :key="screen" class="col-lg-4 col-md-4">
                    <div class="screenshot-item">
                        <img :src="screenshot.screenImg" alt="screenshot thumb">
                    </div>
                </div>
                -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    name: 'Rueckblick',
    components: { 
      carousel 
    },
    data (){
        return {
            screenshots: [
                {screenImg: require("../assets/img/rueckblick_2019/1.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/2.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/3.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/4.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/5.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/6.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/7.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/8.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/9.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/10.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/11.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/12.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/13.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/14.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/15.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/16.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/17.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/18.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/19.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/20.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/21.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/22.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/23.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/24.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/25.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/26.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/27.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/28.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/29.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/30.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/31.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/32.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/33.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/34.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/35.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/36.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/37.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/38.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/39.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/40.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/41.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/42.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/43.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/44.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/45.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/46.jpg")},
                {screenImg: require("../assets/img/rueckblick_2019/47.jpg")}       
            ]
        }
    }
}

</script>