<template>
  <div class="page-slider-container">
    <Slider :allLinks="pageSliderLinks" :currentIndex="pageId"></Slider>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import PageStore, { Page } from '../../store/page-module';
import Slider from '../slider/slider.vue';
import SliderLink from '../slider/slider';
import buildPageLinkString from './link-construction';

@Options({
  components: {
    Slider,
  },
})

export default class PageSlider extends Vue {
  @Prop({ type: String })
  pageId = '0';

  @Prop({ type: String })
  private bandId= '';

  private allPages: Page[] = []

  private pageSliderLinks: SliderLink [] = []

  created(): void {
    this.allPages = PageStore.allPages;
    this.pageSliderLinks = this.mapPageToSliderLink(this.allPages);
  }

  mapPageToSliderLink(pages: Page[]): SliderLink[] {
    return pages.map((page):SliderLink => ({
      primaryLink: {
        link: buildPageLinkString(this.bandId, page.id),
        content: page.heading,
      },
      secondaryLink: {
        link: buildPageLinkString(this.bandId, page.backwardNavigation),
        content: page.subheading,
      },
    }));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
