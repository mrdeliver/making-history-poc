<template>
  <div v-for="page in subchapterPages" :key="page.id" @click="updatePageId(page)">
    {{ page.heading }}
  </div>
</template>

<script lang="ts">
import {
  Router, useRouter, useRoute, RouteLocationNormalized,
} from 'vue-router';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PageStore, { Page } from '../../store/page-module';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';
import { OutlineItem } from '../../store/data/data-types';

@Options({
  name: 'chapter-outline',
  components: {
    TextBlock,
    SourceBlock,
  },
})
export default class ChapterOutline extends Vue {
  @Prop({ })
  private subchapterIds: string[] = [] as string[];

  private router: Router = useRouter();

  private route = useRoute();

  get outlineItems() : OutlineItem[] {
    return this.subchapterPages.map((page) => (
      {
        heading: page.heading,
        pageId: page.id ? page.id : '0',
        number: '1',
      }
    ));
  }

  get subchapterPages() {
    return this.subchapterIds.map((id) => PageStore.getPageForSubchapterId(id));
  }

  updatePageId(page: Page): void {
    const { bandId } = this.route.params;
    const id = page.id ? page.id : '0';
    this.router.push({ name: 'Page', params: { pageId: id, bandId } });
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
