<template>
    <div class="main-container">

        <!-- Navbar section -->
        <Navbar />

        <Impressum />

        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Impressum from '../components/Impressum'
    import Footer from '../components/Footer'

    export default {
        name: 'impressum',
        components: {
            Navbar,
            Impressum,
            Footer,
        }
    }
</script>

