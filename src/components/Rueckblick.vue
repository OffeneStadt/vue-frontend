<template>
    <section class="screenshot-area section-padding pt-100 fix" id="rueckblick">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Rückblick 2018</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div v-for="(screenshot, screen) in screenshots" :key="screen" class="col-lg-4 col-md-4">
                    <div class="screenshot-item">
                        <a href="#"><img :src="screenshot.screenImg" alt="screenshot thumb"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Rueckblick',
        data (){
            return {
                screenshots: [
                    {screenImg: require("../assets/img/rueckblick/bild_1.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_2.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_3.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_4.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_5.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_6.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_7.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_8.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_9.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_10.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_11.jpg")},
                    {screenImg: require("../assets/img/rueckblick/bild_12.jpg")}
                ]
            }
        }
    }

</script>
