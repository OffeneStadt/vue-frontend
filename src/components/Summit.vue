<template>
    <section class="features-area section-padding pt-100 fix" id="summit">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">CfG Summit 2019</h2>
                       <p class="paragraph">Code for Hamburg lädt die Code for Germany Community aus ganz Deutschland zum <a href="https://codefor.de/summit/" target="_blank">Code for Germany Summit 2019</a> ein.</p>
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner">
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
            image: require("../assets/img/veranstalter/CFG.svg")
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
