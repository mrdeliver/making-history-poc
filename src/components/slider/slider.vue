<template>

  <div class="slider-container">
    <div class="overlay-R"></div>
    <div class="overlay-L"></div>
    <flickity ref="flickity" :options="flickityOptions">
      <div :class="[sliderFlavour]" class="carousel-cell"
      @click="setFlickitySlide(index, link.primaryLink.link )"
      v-for="(link, index) in allLinks" :key="index" >
        <router-link :to="link.primaryLink.link">{{link.primaryLink.content}}</router-link>
      </div>
    </flickity>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Flickity from 'vue-flickity/src/flickity.vue';
import { Router, useRouter } from 'vue-router';
import SliderLink from './slider';

@Options({
  components: {
    Flickity,
  },
})

export default class Slider extends Vue {
  @Prop({ })
  allLinks: SliderLink[] = [];

  @Prop({ type: String })
  private sliderFlavour = 'defaultFlavour';

  private router: Router = useRouter();

  flickityOptions = {
    initialIndex: 3,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: false,

    // any options from Flickity can be used
  }

  $refs!:{
  flickity: typeof Flickity
}

  setFlickitySlide(index:number, link: string):void {
    this.$refs.flickity.select(index);
    this.router.push(link);
  }
}
</script>

<style lang="scss" >

@import "src/colors";
@import "src/text";

.slider-container{
  position: relative;
}
.overlay-L {
    height: 100%;
    width: 20%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-image:linear-gradient(to right,white , rgba(0,0,0,0));
    overflow-x: hidden;
    transition: 0.5s;
}
.overlay-R {
    height: 100%;
    width: 20%;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    background-image:linear-gradient(to left,white , rgba(0,0,0,0) );
    overflow-x: hidden;
}

.flickity-viewport{
  height: 120px !important;
}
.carousel-cell {
  transition: 0.2s ease;
  text-align: center;
  width: 250px;
  height: 50px;
  top: 20px;
  margin-right: 10px;
  margin-left:10px;
  counter-increment: carousel-cell;
  border: 3px solid transparent;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: $color_grey_6;
    text-decoration: none;
    font-weight: bold;
  }
}
.carousel-cell.is-selected {
  height: 100px;
  width: 250px;
  top: 0px;
  a {
    word-wrap: break-word;
    text-decoration: none;
    font-size:24px;
    }

}

.defaultFlavour {
  background-color: $color_grey_0;
  a {
    @include slider-heading;
    font-size: $font_size_text;
    color: $color_grey_6;
  }
  &.is-selected {
    a {
      @include slider-heading;
      color:$color_grey_10;
    }
    background-color: $color_grey_0;
    border-color: $color_grey_7;
  }
}
</style>
