<template>
    <section class="about-area section-padding" id="forum" :class="AboutStyle">
        <div class="container">
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(about, abouts) in abouts" :key="abouts" class="col-lg-3 col-md-6">
                    <div class="about-item">
                        <div class="about-icon">
                            <i :class="about.icon"></i>
                        </div>
                        <div class="about-content">
                            <h6>{{ about.title }}</h6>
                            <p>{{ about.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- single item end -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Forum',
    props: ["AboutStyle"],
    data (){
        return {
             abouts:[
                {title: "für Neugierige", desc: " die verstehen wollen, wie digitale Lösungen helfen, das eigene Umfeld zu gestalten", icon: "fa fa-user"},
                {title: "für Hacker*innen", desc: " die geniale Lösungen haben, suchen und entwickeln", icon: "fa fa-user"},
                {title: "für öffentliche Verwaltung", desc: "die digitale Lösungen für eigene Arbeitsabläufe und die Integration von Bürger*innen nutzen und entdecken will", icon: "fa fa-user"},
                //{title: "für alle", desc: "die noch keine Antwort auf diese Fragen haben: Kann ich die Politik per App erreichen? Kann man Feinstaub sehen? Wie laut ist eigentlich meine Straße?", icon: "fa fa-user"},
                {title: "100 % Openess: Apps, Designs, APIs und Ideen", desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", icon: "fa fa-code"},
                //{title: "Zum dritten Mal!", desc: "Genau!", icon: "fa fa-clock-o"}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/about.scss';
</style>
