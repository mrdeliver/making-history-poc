<template>
  <component
    v-for="(contentBlock, idx) in contentBlocks"
    :is="getComponentType(contentBlock)"
    :key="idx"
    v-bind="contentBlock"
    ></component>
</template>

<script lang="ts">
import { ContentBlock, ContentBlockType, TextContentBlock } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';

@Options({
  name: 'content-frame',
  components: {
    TextBlock,
    SourceBlock,
  },
})
export default class ContentFrame extends Vue {
  @Prop({ })
  private contentBlocks: TextContentBlock[] = [];

  getComponentType(contentBlock: ContentBlock): string {
    switch (contentBlock.type) {
      case ContentBlockType.TEXT_CONTENT_BLOCK:
        return 'TextBlock';
      case ContentBlockType.SOURCE_CONTENT_BLOCK:
        return 'SourceBlock';
      default:
        return 'DefaultBlock';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.row {
  display: flex;
}

.side-col {
  flex: 10%
}

.center-col {
  flex: 80%
}
</style>
