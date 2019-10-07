<template>
    <div class="main-container">

        <router-view></router-view>
        <!-- Navbar section -->
        <Navbar />

        <!-- slider section -->
        <Slider />

        <!-- forum section -->
        <Forum />

        <!-- best app section -->
        <!--<Bestapp />-->
        
        <!-- programm app section -->
        <Programm />

        <!-- features section -->
        <!--<Features />-->

        <!-- projekte section -->
        <Projekte />

        <!-- testimonial section -->
        <!--<Speaker />-->

        <!-- partner area -->
        <Partner />

        <!-- rueckblick area -->
        <!--<Rueckblick />-->

        <!-- veranstalter area -->
        <Veranstalter />

        <!-- video section -->
        <!--<Video />-->

        <!-- team section -->
        <Team />

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
    import Slider from '../components/Slider'
    import Forum from '../components/Forum'
    //import Bestapp from '../components/Bestapp'
    import Programm from '../components/Programm'
    //import Features from '../components/Features'
    import Projekte from '../components/Projekte'
    import Speaker from '../components/Speaker'
    import Partner from '../components/Partner'
    import Rueckblick from '../components/Rueckblick'
    import Veranstalter from '../components/Veranstalter'
    import Video from '../components/Video'
    import Team from '../components/Team'
    import Download from '../components/Download'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            Slider,
            Forum,
            //Bestapp,
            Programm,
          //  Features,
            Partner,
            Projekte,
            Speaker,
            Rueckblick,
            Veranstalter,
            Video,
            Team,
            Download,
            Contact,
            Footer
        }
    }
</script>

