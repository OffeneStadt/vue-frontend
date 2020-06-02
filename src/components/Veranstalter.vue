<template>
    <section class="veranstalter-area pt-100 section-padding fix" id="veranstalter">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Veranstalter </h2>
                       <!-- <p class="paragraph">Veranstalter</p>-->
                    </div>
                </div>
            </div>
        </div>

        <div class="veranstalter-member-inner" :style="bgImg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="veranstalter-content text-center">
                            <!--<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="veranstalter-member-slider">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        
                        <carousel class="veranstalter-carousel"
                            :item = "3"
                            :nav = "false"
                            :dots = "false"
                            :autoplay = "true"
                            :smartSpeed = "1000"
                            :responsive="{0:{items:1},576:{items:2}, 1024:{items:3}}">
                            <div v-for="(member, veranstalter) in veranstalter" :key="veranstalter" class="veranstalter-member">
                                <div class="member-thumb">
                                    <img :src="member.thumb" alt="veranstalter thumb" height="250" style="margin: 0 3px 0 3px; background: rgba(255, 255, 255, 0.8);">
                                    <div class="member-content">
                                        <h6 class="title">{{ member.title }}</h6>
                                        <p class="designation">{{ member.designation }}</p>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'Veranstalter',
    components: {
        carousel 
    },
    data (){
        return {
            veranstalter:[
                {title: "Körber-Stiftung", designation: "Die Körber-Stiftung stellt mit ihren operativen Projekten, Netzwerken und Kooperationspartnern derzeit drei aktuelle gesellschaftliche Herausforderungen in den Fokus: »Digitale Mündigkeit«, »Neue Lebensarbeitszeit« und »Russland in Europa«. 1959 von dem Unternehmer Kurt A. Körber ins Leben gerufen, ist die Stiftung heute von ihren Standorten Hamburg und Berlin aus national und international aktiv.", thumb: require("../assets/img/veranstalter/koerber-stiftung.svg")},
                {title: "Open Knowledgement Foundation Deutschland", designation: "Die Open Knowledge Foundation Deutschland tritt als gemeinnütziger Verein bei Themen der digitalen Gesellschaft aktiv für die Rechte der Bürger ein. Dabei setzt sich die Organisation in ihren Projekten insbesondere für offenes Wissen, offene Daten, Transparenz und Beteiligung ein.", thumb: require("../assets/img/veranstalter/okf.svg")},
                {title: "Code for Germany", designation: "Jede Woche treffen sich in ganz Deutschland Teams zu ihren Projekten für Code for Germany. Sie arbeiten gemeinsam an nützlichen Anwendungen und Visualisierungen rund um offene Daten und digitale Werkzeuge für Bürgerinnen. Diese lokalen Gruppen nennen wir Labs. Die Labs bestehen aus Interessierten zu Open Data. Dazu gehören auch Programmiererinnen und Designer. Sie erproben, wie Daten und Software dabei helfen können die Städte und Nachbarschaften zu verbessern. Dazu wird Code für Dienste geschrieben und bestehende Daten so aufbereitet, dass sie von allen genutzt werden können.", thumb: require("../assets/img/veranstalter/CFG.jpg")}
            ],
            bgImg: {
                backgroundImage: `url(${require('../assets/img/slider/3.jpg')})`
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/veranstalter.scss';
</style>
