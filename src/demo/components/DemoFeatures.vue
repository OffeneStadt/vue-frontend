<template>
    <section class="demo-feature-wrapper demo-padding bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="demo-section-title">Fantasic Features</h2>
                </div>
            </div>
            <div class="row demo-feature-inner">
                    <div v-for="demoFeature in demoFeatures" :key="demoFeature.id" class="demo-single-feature col-lg-4 col-md-6">
                        <span class="icon float-left">
                            <i :class="demoFeature.icon"></i>
                        </span>
                        <div class="content fix">
                            <h4>{{ demoFeature.title }}</h4>
                            <p>{{ demoFeature.para }}</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'DemoFeatures',
        data () {
            return {
                demoFeatures: [
                    {title: 'Responsive Design', para: 'Fantasic is supper responsive & work perfectly in all devices.', icon: 'icon-mobile'},
                    {title: 'User Friendly', para: 'Fantasic easy to use for any technical & nontechnical People.', icon: 'icon-profile-male'},
                    {title: 'Creative Design', para: 'Its comes with creative & smart design layout.', icon: 'icon-beaker'},
                    {title: 'Icon Font', para: 'Its comes with most popular FontAwesome & Pe 7 stroke icon font.', icon: 'icon-puzzle'},
                    {title: 'Google Font', para: '600 Google Fonts. You can change font for all elements easily.', icon: 'icon-genius'},
                    {title: 'Clean Markup', para: 'We developed it followed by W3C Markup.', icon: 'icon-search'},
                    {title: 'Free Updates', para: 'Purchase once & get life-time free updates.', icon: 'icon-upload'},
                    {title: 'Real Support', para: 'We provide 7 days a week one by one real support.', icon: 'icon-megaphone'},
                    {title: 'Dynamic Contact Form', para: 'It comes with ajax contact form which makes messaging much more quicker.', icon: 'icon-envelope'},
                ]
            }
        }
    }
</script>
