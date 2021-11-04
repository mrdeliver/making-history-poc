<template>
  <outline-frame :outline="outlineItems"></outline-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PageStore, { Page } from '../../store/page-module';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';
import { OutlineItem } from '../../store/data/data-types';
import OutlineFrame from './outline-frame.vue';

@Options({
  name: 'chapter-outline',
  components: {
    TextBlock,
    SourceBlock,
    OutlineFrame,
  },
})
export default class ChapterOutline extends Vue {
  @Prop({ })
  private subchapterIds: string[] = [] as string[];

  get outlineItems() : OutlineItem[] {
    return this.subchapterPages.map((page, index) => (
      {
        heading: page.heading,
        pageId: page.id ? page.id : '0',
        number: (index + 1).toString(),
      }
    ));
  }

  get subchapterPages() {
    return this.subchapterIds.map((id) => PageStore.getPageForSubchapterId(id));
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
