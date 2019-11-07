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
  /*              
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
                //{title:"LANDKREIS MARBURG-BIEDENKOPF", link:"https://www.marburg-biedenkopf.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/offenestadt.png")},
                //{title:"OPEN KNOWLEDGE FOUNDATION", link:"https://okfn.de/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/offenestadt.png")},
                {title:"ATOMMÜLLATLAS", link:"https://atommuell-atlas.de/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/atommuell_logo.png")},
*/
//NEU

                {title:"POLITIK BEI UNS", link:"https://politik-bei-uns.de/", desc:"Offene Gesellschaft", thumb: require("../assets/img/projekte/politik_bei_uns.png")},
                {title:"MMP", link:"https://mmport.de", desc:"MetaMitfahrPort", thumb: require("../assets/img/projekte/MetaMitfahrPort.jpg")},
                {title:"Code for Hamburg e.V.", link:"http://codeforhamburg.org", desc:"", thumb: require("../assets/img/projekte/code4hhlogo.jpg")},
                {title:"Code for Hamburg Community Forum", link:"https://community.codeforhamburg.org/", desc:"", thumb: require("../assets/img/projekte/community forum.jpeg")},
                {title:"URBAN DATA PLATFORM", link:"http://www.urbandataplatform.hamburg/", desc:"", thumb: require("../assets/img/projekte/logo urbandatahub.jpg")},
                {title:"Luftdaten.info", link:"https://luftdaten.info", desc:"", thumb: require("../assets/img/projekte/luftdaten.png")},
                {title:"GOVDATA", link:"https://www.govdata.de/", desc:"Offene Verwaltung", thumb: require("../assets/img/projekte/gov-data.png")},
                {title:"FragDenStaat", link:"https://fragdenstaat.de", desc:"", thumb: require("../assets/img/projekte/fragdenstaat.png")},
                {title:"LANDKREIS MARBURG-BIEDENKOPF", link:"https://www.marburg-biedenkopf.de/", desc:"", thumb: require("../assets/img/projekte/Landkreis_Marburg-Biedenkopf_Logo.svg")},
                {title:"Open Knowledge Foundation Deutschland", link:"https://okfn.de", desc:"", thumb: require("../assets/img/projekte/Logo_okfde-3-316711_630x210.png")},
                {title:"Kleine Anfragen", link:"https://kleineanfragen.de", desc:"", thumb: require("../assets/img/projekte/Kleine_Anfragen.png")},
                {title:"Code for Germany", link:"https://codefor.de", desc:"", thumb: require("../assets/img/projekte/code4de.jpeg")},
                {title:"Open Government Netzwerk", link:"https://opengovpartnership.de/", desc:"", thumb: require("../assets/img/projekte/ogp.jpg")},
                {title:"TRANSPARENCY INTERNATIONAL Deutschland e.V.", link:"https://www.transparency.de/", desc:"", thumb: require("../assets/img/projekte/Logo_Transparency_DT.png")},
                {title:"Stadtlabor Köln", link:"https://www.codefor.de/koeln/", desc:"", thumb: require("../assets/img/projekte/CodeForKoeln.png")},
                {title:"Robin Wood e.V.", link:"https://www.robinwood.de", desc:"", thumb: require("../assets/img/projekte/Robin_Wood.png")},
                {title:"TECHNOLOGIE STIFTUNG BERLIN", link:"https://www.technologiestiftung-berlin.de/de/startseite/", desc:"", thumb: require("../assets/img/projekte/logo-tech-stiftung-berlin.svg")},
                {title:"wheelmap.org", link:"wheelmap.org", desc:"", thumb: require("../assets/img/projekte/Logo_Wheelmap_org.jpg")},
                {title:"Stadt Köln", link:"https://www.stadt-koeln.de/", desc:"", thumb: require("../assets/img/projekte/Logo_Stadt_Koeln.png")},
                {title:"Stadt Moers", link:"https://www.moers.de/", desc:"", thumb: require("../assets/img/projekte/Logo_Moers.png")},
                {title:"Stadt Ulm ", link:"https://neuulm.ulm.de/stadt-ulm", desc:"", thumb: require("../assets/img/projekte/Logo_Stadt_Ulm.jpeg")},
                {title:"Hamburg Leitstelle Klima", link:"https://www.hamburg.de/klima/4358412/leitstelle-klima-hh/", desc:"", thumb: require("../assets/img/projekte/logo_LeitstelleKlima.jpg")},
                {title:"Hamburg Justizbehörde", link:"https://www.hamburg.de/justizbehoerde/", desc:"", thumb: require("../assets/img/projekte/Logo_Justizbehörde_Hamburg.png")},
                {title:"FixMyBerlin", link:"https://fixmyberlin.de/", desc:"", thumb: require("../assets/img/projekte/logo FixMyBerlin.png")},
                {title:"digitransit", link:"https://digitransit.fi/en/", desc:"", thumb: require("../assets/img/projekte/logo digitransit.png")},
                {title:"Deutsche Bahn", link:"https://www.bahn.de/p/view/index.shtml", desc:"", thumb: require("../assets/img/projekte/logo db.png")},
                {title:"Bundesministerium des Inneren, für Bau und Heimat", link:"https://www.bmi.bund.de/DE/startseite/startseite-node.html", desc:"", thumb: require("../assets/img/projekte/BMI Bund.png")},
                {title:"Bertelsmann Stiftung", link:"https://www.bertelsmann-stiftung.de/de/startseite/", desc:"", thumb: require("../assets/img/projekte/bertelsmann.png")},
                {title:"Hamburg Besser Machen ", link:"https://www.hamburgbessermachen.de", desc:"", thumb: require("../assets/img/projekte/logo_HBM.png")},
                {title:"Creative Space for Technological Innovation (CSTI)", link:"https://csti.haw-hamburg.de/", desc:"", thumb: require("../assets/img/projekte/CSTI.svg")},
                {title:"HAW Hamburg", link:"https://www.haw-hamburg.de/startseite.html", desc:"", thumb: require("../assets/img/projekte/logo-haw.png")},
                {title:"Aktivoli Landesnetzwerk", link:"https://aktivoli.de", desc:"", thumb: require("../assets/img/projekte/aktivoli.png")},
                {title:"Digitales Partizipationssystem DIPAS", link:"https://www.hamburg.de/dipas/", desc:"", thumb: require("../assets/img/projekte/logo-stadtwerkstatt.jpg")},
                {title:"OParl", link:"https://oparl.org/", desc:"", thumb: require("../assets/img/projekte/oparl.png")},
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';
</style>
