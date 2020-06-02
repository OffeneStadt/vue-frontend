<template>
    <section class="video-section section-padding pt-100 fix" :style="bgImg" id="ressourcen">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="bestapp-content-inner text-center">
                        <div class="section-title text-center">
                            <div class="title-icon"></div>
                            <h2 class="title text-white">Rückblick 2019</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="video-player">
                        <figure class="embed-responsive embed-responsive-16by9">
                            <iframe :src="ressourcen" width="1100" height="784" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="bestapp-content-inner text-center">
                        <br>
                        <p>Die Talks unserer Redner*innen und das Abschlusspanel findet ihr in der <a href="https://www.youtube.com/playlist?list=PL21YiU8i5e4FglIstTyBl7ukqedPcpaBo" target="_blank">Youtube-Playlist</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Ressourcen2019',
        data () {
            return {
                ressourcen: "https://www.youtube.com/embed/YL4pOe5VTqI",
                bgImg: {
                    backgroundImage: `url(${require('../../assets/img/download-bg-blue.jpg')})`
                }
            }
        }
    }
</script>

<style lang='scss'>
    @import '../../assets/scss/variables.scss';

    .video-style-2 {
        @media #{$sm-device} {
            padding-top: 75px;
        }
    }
    .video-section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .video-list {
        line-height: 1;
        li {
            display: inline-block;
            line-height: 1;
            margin-right: 80px;
            // responsive
            @media #{$xs-device} {
                margin-right: 30px;
            }
            &:last-child {
                margin-right: 0;
            }
            i {
                padding-right: 10px;
            }
        }
    }
    .video-player {
    position: relative;
    // responsive
    @media #{$md-device, $sm-device} {
        padding-top: 57px;
    }
    &:after {
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        background-image: url(../../assets/img/video-shadow.png);
        // responsive
        @media #{$md-device} {
            top: inherit;
        }
    }
}
</style>

