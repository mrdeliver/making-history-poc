<template>
  <div v-for="item in outline" :key="item.heading">
    {{ item.heading }}
  </div>
</template>

<script lang="ts">
import {
  Router, useRouter, useRoute, RouteLocationNormalized,
} from 'vue-router';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PageStore from '../../store/page-module';
import TextBlock from './text-block.vue';
import SourceBlock from './source-block.vue';
import { OutlineItem } from '../../store/data/data-types';

@Options({
  name: 'outline-frame',
  components: {
    TextBlock,
    SourceBlock,
  },
})
export default class OverviewFrame extends Vue {
  @Prop({ })
  private outline: OutlineItem[] = [];

  private router: Router = useRouter();

  private route = useRoute();
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
