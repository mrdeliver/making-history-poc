<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
      <h1>{{heading}}</h1>
      <entry-text class="center-col" :text="text" :entryIds="entries"></entry-text>
    </div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TippArea from '../menus/tipps/tipp-area.vue';
import EntryText from './entry-text.vue';

@Options({
  components: {
    TippArea,
    EntryText,
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
  private entries: string[] = []
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
