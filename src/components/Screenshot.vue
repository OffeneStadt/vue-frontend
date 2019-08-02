<template>
    <section class="screenshot-area section-padding pt-100 fix" id="screenshot">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">SCREENSHOTS</h2>
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
        name: 'Screenshot',
        data (){
            return {
                screenshots: [
                    {screenImg: require("../assets/img/screenshot/1.jpg")},
                    {screenImg: require("../assets/img/screenshot/2.jpg")},
                    {screenImg: require("../assets/img/screenshot/3.jpg")},
                ]
            }
        }
    }

</script>
