<template>
    <section class="video-section section-padding pt-100 fix" :style="bgImg" id="ressourcen">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-2 order-lg-1">
                    <div class="video-player">
                        <figure class="embed-responsive embed-responsive-16by9">
                            <iframe :src="ressourcen" width="560" height="315" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2">
                    <div class="bestapp-content-inner text-center">
                        <div class="section-title text-center">
                            <div class="title-icon"></div>
                            <h2 class="title text-white">Ressourcen</h2>
                            <p>Die Talks unserer Redner*innen und das Abschlusspanel findet ihr in der <a href="https://www.youtube.com/playlist?list=PL21YiU8i5e4FglIstTyBl7ukqedPcpaBo" target="_blank">Youtube-Playlist</a></p>
                        </div>
                        <!--<div class="bestapp-content-text pb-0">
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                            <ul class="video-list">
                                <li> <i class="fa fa-check-square-o"></i> Perfect layout</li>
                                <li> <i class="fa fa-check-square-o"></i> Sweet moves</li>
                            </ul>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Ressourcen',
        data () {
            return {
                ressourcen: "https://www.youtube.com/embed/29mmdHURDec",
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/download-bg-blue.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/video.scss';
</style>

