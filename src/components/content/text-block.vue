<template>
  <div>{{text}}</div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

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
</style>
