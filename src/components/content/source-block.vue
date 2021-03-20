<template>
  <div>{{sourceId}}</div>
</template>

<script lang="ts">
import { SourceType } from '@/store/data/data-types';
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class SourceBlock extends Vue {
  @Prop({ type: String })
  private sourceId = ''

  @Prop({})
  private sourceType: SourceType = SourceType.IMAGE_SOURCE
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
