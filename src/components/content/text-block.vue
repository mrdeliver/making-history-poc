<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
      <h1>{{heading}}</h1>
      <glossar-text class="center-col" :text="text" :glossar-ids="glossarEntries"></glossar-text>
    </div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TippArea from './tipp-area.vue';
import GlossarText from './glossar-text.vue';

@Options({
  components: {
    TippArea,
    GlossarText,
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
