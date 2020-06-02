<template>
    <div class="main-container">

        <router-view />

        <!-- Navbar section -->
        <Navbar />

        <!-- Hero Banner section -->
        <HeroBannerThree2019 />

        <!-- ressourcen section -->
        <Ressourcen2019 />
        
        <!-- programm app section -->
        <Programm2019 />

        <!-- projekte section -->
        <Projekte2019 />

        <!-- speaker section -->
        <Speaker2019 />

        <!-- rueckblick area -->
        <Rueckblick2019 />

        <!-- veranstalter area -->
        <Veranstalter2019 />

        <!-- team section -->
        <Team2019 />

         <!-- summit section -->
        <Summit2019 />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerThree2019 from '../components/archive2019/HeroBannerThree2019'
    import Programm2019 from '../components/archive2019/Programm2019'
    import Projekte2019 from '../components/archive2019/Projekte2019'
    import Speaker2019 from '../components/archive2019/Speaker2019'
    import Rueckblick2019 from '../components/archive2019/Rueckblick2019'
    import Veranstalter2019 from '../components/archive2019/Veranstalter2019'
    import Ressourcen2019 from '../components/archive2019/Ressourcen2019'
    import Team2019 from '../components/archive2019/Team2019'
    import Summit2019 from '../components/archive2019/Summit2019'
    import Footer from '../components/Footer'

    export default {
        name: 'app',
        components: {
            Navbar,
            HeroBannerThree2019,
            Programm2019,
            Projekte2019,
            Speaker2019,
            Rueckblick2019,
            Veranstalter2019,
            Ressourcen2019,
            Team2019,
            Summit2019,
            Footer
        }
    }
</script>

