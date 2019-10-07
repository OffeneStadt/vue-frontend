<template>
    <section class="screenshot-area section-padding pt-100 fix" id="partner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Partner</h2>
                        <!--<p class="paragraph">Unsere unterstützer</p>-->
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div v-for="(parter, logo) in parter" :key="logo" class="col-lg-4 col-md-4">
                    <div class="screenshot-item">
                        <a href="#"><img :src="parter.logoImg" alt="screenshot thumb"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Partner',
        data (){
            return {
                parter: [
                    {logoImg: require("../assets/img/partner/odaki.png")},
                ]
            }
        }
    }

</script>
