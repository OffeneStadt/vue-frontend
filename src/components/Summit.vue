<template>
    <section class="features-area section-padding pt-100 fix" id="summit">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Code for Germany Summit 2019</h2>
                       <p class="paragraph">Direkt im Anschluss an die Fachkonferenz, findet am 09. - 10. November der Code for Germany Community Summit statt. Ein in diesem Jahr ins Leben gerufenes Austausch- & Innovations Festival der Open Knowledge & Open Source Community, das von nun an jährlich stattfinden soll. Im Vordergrund steht der Austausch der ehrenamtlich tätigen Innovator*innen, Wissenschaftler*innen, Entwickler*innen, Policy-Spezialist*innen und Designer*innen aus verschiedenen Städten in ganz Deutschland und die Weiterentwicklung der gemeinsamen Ideen und Ziele rund um offene Daten. Wenn Sie neben dem Forum Offene Stadt auch bei dem Community Summit teilnehmen möchten, melden Sie sich <b><a href="https://codefor.de/summit" target="_blank">hier</a></b> an.</p>
                    </div>
                </div>
            </div>
            <div class="feature-item-inner" style="display:inline">

                    <img :src="image" alt="slider thumb" class="center">
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
            image: require("../assets/img/summit.png")
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/feature.scss';

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        }
</style>
