<template>
  <outline-frame :outline="outlineItems"></outline-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PageStore, { OverviewPage } from '../../store/page-module';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';
import OutlineFrame from './outline-frame.vue';
import { OutlineItem } from '../../store/data/data-types';

@Options({
  name: 'overview-frame',
  components: {
    TextBlock,
    SourceBlock,
    OutlineFrame,
  },
})
export default class OverviewFrame extends Vue {
  @Prop({ })
  private overviewPage: OverviewPage = {} as OverviewPage;

  get outlineItems() : OutlineItem[] {
    return this.overviewPage.chapterHeadings.map((heading, index) => (
      {
        heading,
        pageId: PageStore.getPageIdForChapterHeading(heading),
        number: (index + 1).toString(),
      }
    ));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/size";
  .row {
    display: $row_display;
  }

  .side-col {
    flex: $side_col_width
  }

  .center-col {
    flex: $center_col_width
  }
</style>
