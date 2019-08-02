<template>
    <!-- Start Hero Section -->
    <div class="hero-section section overlay" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="demo-hero-content text-center col-12">
                    <h1 class="demo-item-title"><strong>Fantasic</strong> Vue JS App Landing Page Template</h1>
                    <p>Fantasic is an excellent platform to maintain your app landing features. Fantasic builds your dream.</p>
                    <a class="buy-btn" href="#demo">View Demo</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero Section End -->
</template>

<script>
    export default {
        name: 'DemoBanner',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../../assets/img/demo/hero-bg.jpg')})`
                }
            }
        }
    }
</script>


