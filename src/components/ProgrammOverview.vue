<template>
    <section class="features-area section-padding pt-100 fix" id="programm">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Programm </h2>
                        <p class="paragraph">Weitere Details folgen in den nächsten Tagen</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="row" style="padding: 10px;margin-top:40px; background: lightgray">
                <div class="col-12 text-center" style="color:black; font-size: large">9:00 Uhr</div>
                <div class="col-12" data-toggle="modal" data-target="#speaker1" style="cursor:pointer">
                    <h1 class="text-center">Offene Daten nutzen</h1>
                    <h5 class="text-center">von Knut Perseke</h5>
                    <p class="paragraph">
                        Offene Daten versetzen mich in die Lage, Aussagen zu unterschiedlichen Themen überprüfen zu können. Während der Coronapandemie konnten beispielsweise verschiedene Aspekte der aktuellen Lage wie die Altersverteilung der Patienten oder die Situation in bestimmten Landkreisen untersucht werden.
                        Aber wie finde ich offene Daten und wie kann ich sie am besten nutzen? Wie interpretiere ich sie und was sind Fallstricke?
                        In diesem Workshop nehmen wir uns den Datensatz des Corona - Dashboards des RKI vor, bereiten ihn auf und erstellen damit unsere eigene Visualisierung.
                    </p>
                    <div class="modal fade" id="speaker1" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Knut Perseke</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <img src="../assets/img/speaker2020/knutperseke.jpg" width="200"/>
                                    <p class="paragraph">
                                        Knut arbeitet als Webentwickler für verschiedene Organisationen und setzt sich seit 2015 für offene Daten in verschiedenen Kontexten wie z.B. offene Kulturdaten ein. Er arbeiteite unter anderem an datengetriebenen Projekten wie jedeschule.de, offenesparlament.de oder transparenzranking.de
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="padding: 10px;margin-top:40px; background: lightgray">
                <div class="col-12 text-center" style="color:black; font-size: large">11:00 Uhr</div>
                <div class="col-6" data-toggle="modal" data-target="#speaker1" style="cursor:pointer">
                    <h1 class="text-center">Die OKF und ich</h1>
                    <h5 class="text-center">von Claudia Jach</h5>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
                <div class="col-6" data-toggle="modal" data-target="#speaker1" style="cursor:pointer">
                    <h1 class="text-center">Ich und die OKF</h1>
                    <h5 class="text-center">von Claudia Jach</h5>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import $ from 'jquery'
export default {
    name: 'Programm',
    components: {
    },
    data () {
        return {}
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';

    .zoom:hover {
        transform: scale(1.33);
    }
</style>
