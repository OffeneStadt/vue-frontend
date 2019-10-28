<template>
    <div class="main-container">

        <router-view></router-view>
        <!-- Navbar section -->
        <Navbar />

        <!-- Hero Banner section -->
        <HeroBannerThree />

<!-- slider section 
        <Slider />-->


        <!-- forum section 
        <Forum />-->
        
        <!-- programm app section -->
        <Programm />


        <!-- projekte section -->
        <Projekte />

        <!-- speaker section -->
        <!--<Speaker />-->

        <!-- partner area -->
        <!--<Partner />-->

        <!-- rueckblick area -->
        <!--<Rueckblick />-->

        <!-- veranstalter area -->
        <Veranstalter />

        <!-- video section -->
        <!--<Video />-->

        <!-- team section -->
        <Team />

         <!-- summit section -->
        <Summit />

        <!-- download section -->
        <!--<Download />-->

        <!-- contact section -->
        <Contact />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerThree from '../components/HeroBannerThree'
    import Forum from '../components/Forum'
    import Programm from '../components/Programm'
    import Projekte from '../components/Projekte'
    import Speaker from '../components/Speaker'
    import Partner from '../components/Partner'
    import Rueckblick from '../components/Rueckblick'
    import Veranstalter from '../components/Veranstalter'
    import Video from '../components/Video'
    import Team from '../components/Team'
    import Summit from '../components/Summit'
    import Download from '../components/Download'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            HeroBannerThree,
            Forum,
            Programm,
            Partner,
            Projekte,
            Speaker,
            Rueckblick,
            Veranstalter,
            Video,
            Team,
            Summit,
            Download,
            Contact,
            Footer
        }
    }
</script>

