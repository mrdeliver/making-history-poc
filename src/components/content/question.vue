<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
        {{ text }}
        <br>
        <textarea rows="4"></textarea>
    </div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Tip } from '@/store/data/data-types';
import { Prop } from 'vue-property-decorator';

export default class Question extends Vue {
@Prop({ type: String })
  private text = ''

  @Prop({})
  private tipps: Tip[] = []
}
</script>

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

    textarea{
        width:100%;
    }
</style>
