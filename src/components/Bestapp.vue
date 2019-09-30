<template>
    <section class="best-app-area pt-100 fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-content-inner text-center">
                        <div class="section-title text-center">
                            <div class="title-icon"></div>
                            <h2 class="title text-white">FORUM Offene Stadt 2019 </h2>
                            <p></p>
                        </div>
                        <div class="bestapp-content-text">
                            <p>Wie können uns offene digitale Lösungen dabei helfen, unsere Stadt und Region mitzugestalten?
                            Dieser Frage gehen wir in unterhaltsamen Talks, praktischen Workshops und einer Ausstellung beim 
                            FORUM Offene Stadt am Fr, 08. November 2019 im KörberForum in Hamburg nach.</p>
                            <!-- <a href="#" class="read-more active"><i class="fa fa-apple"></i> Apple Store</a>
                            <a href="#" class="read-more"><i class="fa fa-android"></i> Google Play</a> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-thumb">
                        <img src="../assets/img/bg/bg.jpg" alt="FORUM Offene Stadt thumb">
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Bestapp',
    props: ["bestappTwo"],
    data (){
        return {
            bgImg: {
                // backgroundImage: `url(${require('../assets/img/bg/bg.jpg')})`
                backgroundImage: `url(${require('../assets/img/slider/1.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/best-app.scss';
</style>
