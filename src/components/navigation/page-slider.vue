<template>
  <Slider :allLinks="pageSliderLinks"></Slider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import PageStore, { Page } from '../../store/page-module';
import Slider from '../slider/slider.vue';
import SliderLink from '../slider/slider';

@Options({
  components: {
    Slider,
  },
})
export default class PageSlider extends Vue {
  @Prop({ type: String })
  private pageId = '';

  @Prop({ type: String })
  private bandId= '';

  private allPages: Page[] = []

  private pageSliderLinks: SliderLink [] = []

  created(): void {
    this.allPages = PageStore.allPages;
    this.pageSliderLinks = this.mapPageToSliderLink(this.allPages);
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
