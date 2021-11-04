<template>
  <div class="row block">
    <div class="side-col"></div>
    <div class="center-col">
      <div class="frame">
        <div v-for="item in outline" :key="item.heading" class="item-wrapper"
        @click="updatePageId(item.pageId)">
            <div class="item-number">{{ item.number }}</div>
            <div class="item-heading">{{ item.heading }}</div>
        </div>
      </div>
    </div>
    <div class="side-col"></div>
  </div>
</template>

<script lang="ts">
import {
  Router, useRouter, useRoute, RouteLocationNormalized,
} from 'vue-router';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
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

  updatePageId(pageId: string): void {
    const { bandId } = this.route.params;
    this.router.push({ name: 'Page', params: { pageId, bandId } });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/size";
@import "src/colors";
@import "src/text";

  .row {
    display: $row_display;
  }

  .side-col {
    flex: $side_col_width
  }

  .block {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .center-col {
    flex: $center_col_width
  }

  .item-wrapper {
    width: 48%;
    vertical-align: middle;
    line-height: 40px;
    @include regular-text;
    margin: 4px;
    float: left;
    cursor: pointer;
  }

  .item-number {
    width: 30px;
    height: 30px;
    background: $color_grey_4;
    border-radius: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
    margin-right: -30px;;
    color: $color_grey_0;
    @include regular-text;
    font-weight: 700;
  }

  .item-heading {
    height: 30px;
    width: 280px;
    background: $color_grey_2;
    padding-left: 35px;
    border-radius: 30px;
    color: $color_grey_7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .frame {
      overflow: auto;
  }

</style>
