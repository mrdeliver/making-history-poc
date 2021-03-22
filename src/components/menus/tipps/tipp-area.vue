<template>
  <div class="tipp-container">
    <tipp class="tipp" v-for="(tipp, idx) in tipps" :key="idx" :tipp="tipp"></tipp>
  </div>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Tipp from './tipp.vue';

@Options({
  name: 'tipp-area',
  components: {
    Tipp,
  },
})
export default class TippArea extends Vue {
  @Prop({})
  private tipps: Tip[] = []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.tipp {
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
}

.tipp-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

</style>
