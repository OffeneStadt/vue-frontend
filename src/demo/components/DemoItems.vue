<template>
    <div class="demo-item-wrapper demo-padding" id="demo">
        <div class="demo-items">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-12 mb-50">
                        <div class="demo-item text-center">
                            <router-link target="_blank" :to="{ name: 'Home_one' }">
                                <div class="demo-thumb">
                                    <img src="../../assets/img/demo/preview/home-1.png" alt="Home Version 01">
                                </div>
                                <h2 class="version-title">Home version 01</h2>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-12 mb-50">
                        <div class="demo-item text-center">
                            <router-link target="_blank" :to="{ name: 'Home_two' }">
                                <div class="demo-thumb">
                                    <img src="../../assets/img/demo/preview/home-2.png" alt="Home Version 02">
                                </div>
                                <h2 class="version-title">Home version 02</h2>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-12 mb-50">
                        <div class="demo-item text-center">
                            <router-link target="_blank" :to="{ name: 'Home_three' }">
                                <div class="demo-thumb">
                                    <img src="../../assets/img/demo/preview/home-3.png" alt="Home Version 03">
                                </div>
                                <h2 class="version-title">Home version 03</h2>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DemoItems'
    }
</script>
