<template>
    <section class="features-area section-padding pt-100 fix" id="projekte">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Projekte & Beiträge</h2>
                        <!--<p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>-->
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner">
                <!-- feature single item start -->
                <div v-for="(feature, features) in features" :key="features" class="col-lg-3 col-md-6">
                    <div class="feature-item">
                        <a :href="feature.link" target="_blank">
                            <div>
                            <!--<div class="feature-icon">-->
                                <img :src="feature.thumb" alt="team thumb">
                            </div>
                            <div class="feature-content">
                                <h6>{{ feature.title }}</h6>
                                <p>{{ feature.desc }}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <!-- feature single item start -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projekte',
    components: {
    },
    data () {
        return {
            features: [
                {title:"OFFENER HAUSHALT", link:"https://offenerhaushalt.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/offenerhaushalt.png")},
                {title:"URBAN PLATFORM", link:"https://www.hamburg.de/bsw/urban-data-hub/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/urbanplatform.png")},
                {title:"LUFTDATEN.INFO", link:"https://luftdaten.info", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/luftdaten.png")},
                {title:"ODAKI", link:"http://odaki.informatik.uni-hamburg.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/odaki.png")},
                {title:"OFFENE KOMMUNE.NRW", link:"https://oknrw.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/OKNRW.png")},
                {title:"CODING DA VINCI", link:"https://codingdavinci.de/", desc:"Offene Kultur", thumb: require("../assets/img/projekte/codingdavinci.png")},
                //{title:"KARTEN AUS FREIEN DATEN", link:"", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/kartenworkshop.png")},
                {title:"JUGEND HACKT", link:"https://jugendhackt.org/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/jugendhackt.png")},
                {title:"GOVDATA", link:"https://www.govdata.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/govdata.png")},
                {title:"FRAGDENSTAAT", link:"https://fragdenstaat.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/fragdenstaat.png")},
                //{title:"EINFACH KAUFEN", link:"", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/einfachkaufen.png")},
                {title:"TRINKWASSER APP", link:"http://codeforhamburg.org/trinkwasser/#12/53.5411/9.9780", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/trinkwasserapp.jpg")},
                {title:"WIR VERSILBERN DAS NETZ", link:"https://www.wegeausdereinsamkeit.de/internet-verstehen", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/Einsamkeit.png")},
                {title:"LANDKREIS MARBURG-BIEDENKOPF", link:"https://www.marburg-biedenkopf.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/offenestadt.png")},
                {title:"OPEN KNOWLEDGE FOUNDATION", link:"https://okfn.de/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/offenestadt.png")},
                {title:"ATOMMÜLLATLAS", link:"https://atommuell-atlas.de/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/atommuell_logo.png")},
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
