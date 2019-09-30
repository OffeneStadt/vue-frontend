<template>
    <section class="about-area section-padding" id="about" :class="AboutStyle">
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
    name: 'About',
    props: ["AboutStyle"],
    data (){
        return {
             abouts:[
                {title: "200 Innovator*Innen", desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", icon: "fa fa-user"},
                {title: "FORUM", desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", icon: "fa fa-tablet"},
                {title: "100 % Openess: Apps, Designs, APIs und Ideen", desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", icon: "fa fa-code"},
                {title: "Zum dritten Mal!", desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", icon: "fa fa-clock-o"}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/about.scss';
</style>
