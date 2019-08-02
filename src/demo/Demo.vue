<template>
    <div class="demo-main">
        <!-- demo header -->
        <DemoHeader />
        <!-- demo banner section -->
        <DemoBanner />

        <!-- demo item section -->
        <DemoItems />

        <!-- demo features section -->
        <DemoFeatures />

        <!-- Also like html section -->
        <LikeHtml />

        <!-- Also like wp section -->
        <LikeWp />

        <!-- footer section -->
        <DemoFooter />
    </div>
</template>

<script>
    import DemoHeader from '../demo/components/DemoHeader'
    import DemoBanner from '../demo/components/DemoBanner'
    import DemoItems from '../demo/components/DemoItems'
    import DemoFeatures from '../demo/components/DemoFeatures'
    import LikeHtml from '../demo/components/LikeHtml'
    import LikeWp from '../demo/components/LikeWp'
    import DemoFooter from '../demo/components/DemoFooter'

    export default {
        name: 'Demo',
        components: {
            DemoHeader,
            DemoBanner,
            DemoItems,
            DemoFeatures,
            LikeHtml,
            LikeWp,
            DemoFooter
        }
    }
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/demo.scss';
    @import '../demo/css/et-line.css';
</style>
