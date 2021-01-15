<template>
    <section class="contact-area section-padding pt-100 fix" :style="bgImg" :class="ContactStyle" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center" :class="['title-style-2 title-line-2', ContactStyle]">
                        <div class="title-icon" ></div>
                        <h2 class="title">Kontakt</h2>
                        <!--<p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>-->
                    </div>
                </div>
            </div>
            <div class="row support-container">
               <!-- <GmapMap
                :center="{lat:53.5434675, lng:9.9853118}"
                :zoom="16"
                map-type-id="terrain"
                style="width: 650px; height: 560px"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>-->

                <!--
                <div class="col-md-8">
                    <form action="#" class="support-form">
                        <div class="input-box">
                            <input class="text-field" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div class="input-box">
                            <input class="text-field" type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div class="input-box">
                            <textarea class="text-field" name="message"  placeholder="Your Message" ></textarea>
                        </div>
                        <div class="input-box">
                            <input class="btn-submit" type="submit" value="SEND" />
                        </div>
                    </form>
                </div>
                -->
                <div class="col-md-6">
                    <div class="support-info text-center">
                        <div class="single-info">	
                            <div class="icon">
                                <i class="fa fa-map"></i>
                                </div>
                            <h6 class="support-title">Postanschrift:</h6>
                            <p>Körber-Stiftung | Kehrwieder 12, 20457 Hamburg</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="support-info text-center">
                        <div class="single-info">	
                            <div class="icon">
                                <i class="fa fa-twitter "></i>
                                </div>
                            <h6 class="support-title">Twitter</h6>
                            <p><a href="https://twitter.com/hashtag/FOS2020" target="_blank">#FOS2020</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'Contact',
    props: ["ContactStyle"],
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/download-bg-blue.jpg')})`
            },
            markers: [{
                label:"ads",
                position: {
                lat: 53.543476,
                lng: 9.983925
                }
          }]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/contact.scss';
</style>
