<template>
    <div class="frame" :class="frameFlavour">
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'BoxContentFrame',
})
export default class BoxContentFrame extends Vue {
  @Prop({ type: String })
  private frameFlavour = 'defaultFrameFlavour';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../colors";

.frame {
  border-radius: 15px;
  padding: 8px;
  overflow-y: hidden;
}

.defaultFrameFlavour {
  border: solid $color_grey_4;
  background-color: $color_grey_0;
  max-width: 200px;
  max-height: 200px;
}

</style>
