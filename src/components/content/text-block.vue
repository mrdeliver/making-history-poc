<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col text-block">{{text}}</div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TippArea from './tipp-area.vue';

@Options({
  components: {
    TippArea,
  },
})
export default class TextBlock extends Vue {
  @Prop({ type: String })
  private text = 'hello'

  @Prop({ type: String })
  private heading = ''

  @Prop({})
  private tipps: Tip[] = []

  @Prop({})
  private glossarEntries: string[] = []

  mounted(): void {
    console.log(`tips: ${this.tipps}`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}
</style>
