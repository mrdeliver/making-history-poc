<template>
  <div>
    <div v-for="(tipp, idx) in tipps" class="tipp-container" :key="idx">{{tipp.heading}}</div>
  </div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'tipp-area',
})
export default class TippArea extends Vue {
  @Prop({})
  private tipps: Tip[] = []

  mounted(): void {
    console.log('this is a tip');
    console.log(`tipp area: ${this.tipps}`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.tipp-container {
  margin: 0 auto;
  width: 30%;
  margin-bottom: 20px;
}

</style>
