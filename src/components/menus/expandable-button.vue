<template>
    <div v-on:click="expandContent" :class="[buttonFlavour, defaultStyle]">X</div>
    <slot v-if="expand"></slot>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'ExpandableButton',
})
export default class ExpandabelButton extends Vue {
  private expand = false;

  @Prop({ type: String })
  private buttonFlavour = 'defaultFlavour';

  private defaultStyle = 'defaultStyle'

  expandContent(): void {
    this.expand = !this.expand;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../colors";

.defaultStyle {
  height: 30px;
  width: 30px;
  display:block;
  border-radius: 50%;
}

.defaultFlavour {
  background-color: $color_grey_5;
}

</style>
