<template>
    <section class="team-area pt-100 section-padding fix" id="videorueckblick">
      <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <div class="title-icon"></div>
                        <h2 class="title">Rückblick</h2>
                        <!--<p class="paragraph">Verfügbar ab dem 6.November 9:30 Uhr</p>-->
                    </div>
                </div>
            </div>
        </div>
      <div class="container">
        <div class="row">
          <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL21YiU8i5e4FG3ngx0onK5_jfliYFxcMz" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen  style="margin: auto"></iframe>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
      name: 'VideoRueckblick',
      components: {},
      data (){
          return {}
      }
  }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';

</style>
