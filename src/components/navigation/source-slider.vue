<template>
  <div class="page-slider-container">
    <Slider :allLinks="sourceLinks"></Slider>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { Ressources } from '@/store/data/data-types';
import PageStore, { Page } from '../../store/page-module';
import Slider from '../slider/slider.vue';
import SliderLink from '../slider/slider';

@Options({
  components: {
    Slider,
  },
})
export default class SourceSlider extends Vue {
  @Prop({ type: String })
  private sourceType = '';

  @Prop({ type: String })
  private ressourceId = '';

  private allSources: Ressources[] = []

  private sliderLinks: SliderLink [] = []

  created(): void {
    this.allSources = this.pageSliderLinks = this.mapPageToSliderLink(this.allPages);
  }

  mapPageToSliderLink(pages: Page[]): SliderLink[] {
    // primary --> link = page/pageId | content = name
    return pages.map((page):SliderLink => ({
      primaryLink: {
        link: `/band/${this.bandId}/page/${page.id}`,
        content: page.heading,
      },
    }));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
