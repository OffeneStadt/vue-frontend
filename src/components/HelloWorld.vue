<template>
    <section class="features-area section-padding pt-100 fix" id="programm">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Projekte & Beiträge</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner">
                <!-- feature single item start -->
                <div v-for="(feature, features) in features" :key="features" class="col-lg-3 col-md-6">
                    <div class="feature-item">
                        <div>
                        <!--<div class="feature-icon">-->
                            <img :src="feature.thumb" alt="team thumb">
                        </div>
                        <div class="feature-content">
                            <h6>{{ feature.title }}</h6>
                            <p>{{ feature.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- feature single item start -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Programm',
    components: {
    },
    data () {
        return {
            features: [
                {title:"OFFENER HAUSHALT", desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", thumb: require("../assets/img/offenerhaushalt.png")},
                {title:"URBAN PLATFORM", desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", thumb: require("../assets/img/urbanplatform.png")},
                {title:"LUFTDATEN.INFO", desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", thumb: require("../assets/img/luftdaten.png")},
                {title:"ODAKI", desc:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", thumb: require("../assets/img/odaki.png")}
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
