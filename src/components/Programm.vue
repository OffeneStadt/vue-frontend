<template>
    <section class="features-area section-padding pt-100 fix" id="programm">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Programm</h2>
                       <!-- <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>-->
                    </div>
                </div>
            </div>
            <div class="row feature-item-inner" style="display:inline">
              <!-- <a :href="programmPDF" target="_blank"> -->
                    <img :src="programmImage" alt="slider" class="zoom">
                <!-- </a> -->
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
            programmImage: require("../assets/img/FOS19-Programm.jpg")
        }
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
