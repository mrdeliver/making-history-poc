<template>
  <div class="slider-container">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" @click="setFlickitySlide(index, link.primaryLink.link )"
      v-for="(link, index) in allLinks" :key="index">
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

.flickity-viewport{
  height: 120px !important;
}
.carousel-cell {
  transition: 0.2s ease;
  text-align: center;
  width: 175px;
  height: 50px;
  margin-right: 10px;
  margin-left:10px;
  background-color: $color_grey_0;
  counter-increment: carousel-cell;
  border: 3px solid transparent;
  border-radius: 15px;
  text-overflow: ellipsis;

  a {
    color: $color_grey_6;
    text-decoration: none;
  }
}
.carousel-cell.is-selected {
  height: 100px;
  color:$color_grey_10;
  background-color: $color_grey_0;
  border-color: $color_grey_10;

  a {
    word-wrap: break-word;
    color: $color_grey_6;
    text-decoration: none;
    font-size:22px;
    }

}
</style>
