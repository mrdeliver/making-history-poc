<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
        {{ text }}
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
