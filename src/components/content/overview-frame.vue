<template>
  <div v-for="heading in overviewPage.chapterHeadings" :key="heading">{{ heading }}</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { OverviewPage } from '../../store/page-module';
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

  mounted(): void {
    console.log('Mounted in OverviewFrame');
    console.log(this.overviewPage);
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
