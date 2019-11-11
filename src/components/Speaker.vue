<template>
    <section class="speaker-area pt-100 fix" id="speaker" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title text-white">Redner*Innen</h2>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <carousel class="speaker-active owl-dot-style" :items = "3" :nav = "false" :smartSpeed = "1000">
                        <!-- speaker item start -->
                        <div v-for="(client, clients) in clients" :key="clients" class="speaker-item">
                            <div class="speaker-thumb">
                                <img :src="client.clientThumb" alt="client thumb">
                            </div>
                            <div class="speaker-content">
                                <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                                <p>{{ client.desc }}</p>
                            </div>
                        </div>
                        <!-- speaker item end -->
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'Speaker',
    components: { 
        carousel 
    },
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/download-bg-blue.jpg')})`
            },
            clients: [
                {clientThumb: require("../assets/img/speaker/lothar_dittmer.jpg"), name: "Dr. Lothar Dittmer", designation: "Vorstand Körber", desc: "Begrüßung"},
                {clientThumb: require("../assets/img/speaker/johanna_engman.png"), name: "Johanna Engman", designation: "CIO, Stadt Stockholm", desc: "Stockholm as smart and connected city / Stockholm als smarte und vernetzte Stadt && Abschlusspanel: „Zukunftsstädte: offen,inklusiv, datensouverän?!“"},
                {clientThumb: require("../assets/img/speaker/katja_günther.jpg"), name: "Katja Günther", designation: "Staatsrätin, Stadt Hamburg", desc: "Wie kann uns das Transparenzgesetz dabei helfen, unsere Stadt selbst mitzugestalten?"},
                {clientThumb: require("../assets/img/speaker/arne_semsrott.png"), name: "Arne Semsrott", designation: "Projektleiter FragdenStaat", desc: "Befreit die Daten! Wie Informationsfreiheit Partizipation ermöglicht"},
                {clientThumb: require("../assets/img/speaker/tobias_plate.jpg"), name: "Dr. Tobias Plate", designation: "Bundeskanzleramt", desc: "Open Government vom Bund in die Länder und Kommunen?"},
                {clientThumb: require("../assets/img/speaker/unbekannt.png"), name: "Dr. Kristina Schade", designation: "Bundesminist. d. Innern", desc: "Open Government vom Bund in die Länder und Kommunen?"},
                {clientThumb: require("../assets/img/speaker/oliver_rack.jpg"), name: "Oliver Rack", designation: "Open Government Netzwerk", desc: "Open Government vom Bund in die Länder und Kommunen?"},
                {clientThumb: require("../assets/img/speaker/helena_peltonen.jpg"), name: "Helena Peltonen", designation: "Transparency Deutschland", desc: "7 Jahre Transparenzgesetz – und jetzt? Digitalisierung und Weiterentwicklung"},
                {clientThumb: require("../assets/img/speaker/unbekannt.png"), name: "Dr. Florian Schwill", designation: "Justizbehörde Hamburg", desc: "7 Jahre Transparenzgesetz – und jetzt? Digitalisierung und Weiterentwicklung"},
                {clientThumb: require("../assets/img/speaker/michael_peters.jpg"), name: "Michael Peters", designation: "OKF DE", desc: "Fünf Jahre Code for Germany – Fünf Jahre Digitales Ehrenamt"},
                {clientThumb: require("../assets/img/speaker/juliane_krüger.jpg"), name: "Juliane Krüger", designation: "Mitorga. Bits & Bäume; OKF DE", desc: "Bits&Bäume: Wie Digitalisierung und Nachhaltigkeit zusammenhängen"},
                {clientThumb: require("../assets/img/speaker/stefan_kaufmann.jpg"), name: "Stefan Kaufmann", designation: "Stadt Ulm", desc: "Offene Mobilitätskonzepte als Alternative für autonome Städte"},
                {clientThumb: require("../assets/img/speaker/peter_bihr.jpg"), name: "Peter Bihr", designation: "Mitgründer ThingsCon e.V. Berlin", desc: "Abschlusspanel: „Zukunftsstädte: offen, inklusiv, datensouverän?!“"},
                {clientThumb: require("../assets/img/speaker/alexandra_kapp.jpg"), name: "Alexandra Kapp", designation: "Technologiestiftung Berlin", desc: "Barcamp: Offene Mobilitätskonzepte"},
                {clientThumb: require("../assets/img/speaker/boris_hekele.png"), name: "Boris Hekele", designation: "FixMyBerlin", desc: "Barcamp: Offene Daten und zivilgesellschaftliche Beteiligung"},
                {clientThumb: require("../assets/img/speaker/dykes_victoria.jpg"), name: "Victoria Dykes", designation: "Technologiestiftung Berlin", desc: "Barcamp: Offene Daten und zivilgesellschaftliche Beteiligung"},
                {clientThumb: require("../assets/img/speaker/mario_wiedemann.jpg"), name: "Mario Wiedemann", designation: "Bertelsmann Stiftung - Musterdatenkatalog", desc: "Barcamp: Offene Daten und zivilgesellschaftliche Beteiligung"},
                {clientThumb: require("../assets/img/speaker/maxi_richter.jpg"), name: "Maxi Richter", designation: "kleineAnfragen", desc: "Barcamp: Offene Daten und zivilgesellschaftliche Beteiligung"},
                {clientThumb: require("../assets/img/speaker/cecile_lecomte.jpg"), name: "Cécile Lecomte", designation: "Robin Wood e.V.", desc: "Fachgespräch: Öffentliche Daten nützen - Umwelt schützen"}
                

            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/speaker.scss';

    .owl-dot-style .owl-dots .owl-dot {
        margin: 0 10px;
    }
</style>
