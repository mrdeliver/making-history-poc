<template>
  <div v-for="heading in overviewPage.chapterHeadings" :key="heading"
  @click="updatePageId(heading)">
    {{ heading }}
  </div>
</template>

<script lang="ts">
import {
  Router, useRouter, useRoute, RouteLocationNormalized,
} from 'vue-router';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PageStore, { OverviewPage } from '../../store/page-module';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';

@Options({
  name: 'overview-frame',
  components: {
    TextBlock,
    SourceBlock,
  },
})
export default class OverviewFrame extends Vue {
  @Prop({ })
  private overviewPage: OverviewPage = {} as OverviewPage;

  private router: Router = useRouter();

  private route = useRoute();

  mounted(): void {
    console.log('Mounted in OverviewFrame');
    console.log(this.overviewPage);
  }

  updatePageId(heading: string): void {
    const pageIdForChapter = PageStore.getPageIdForChapterId(heading);
    const { bandId } = this.route.params;
    this.router.push({ name: 'Page', params: { pageId: pageIdForChapter, bandId } });
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
