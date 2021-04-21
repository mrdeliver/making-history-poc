<template>
  <expandable-button buttonFlavour="tippButton" buttonOpenIcon="lightbulb">
    <box-content-frame frameFlavour="tippFrame">
      <div class="tippHeading">{{tipp.heading}}</div>
      <div class="tippText">{{tipp.text}}</div>
    </box-content-frame>
  </expandable-button>
</template>

<script lang="ts">
import { Tip } from '@/store/data/data-types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import BoxContentFrame from '../box-content-frame.vue';
import ExpandableButton from '../expandable-button.vue';

@Options({
  name: 'TippButton',
  components: {
    ExpandableButton,
    BoxContentFrame,
  },
})
export default class TippButon extends Vue {
  @Prop({})
  private tipp: Tip = { heading: '', text: '' };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "src/colors";
@import "src/text";
@import "src/style";

.tippButton {
  @include drop-shadow-elevation-0;
  background-color: $color_green;
}

.tippFrame {
  @include drop-shadow-elevation-0;
  border: 2px solid $color_green;
  background-color: $color_green_2;
  width: 200px;
  height: 200px;
  z-index: 200;
}

.tippHeading {
  @include info-heading;
  margin-bottom: 5px;
  color: $color_green_9;
}

.tippText {
  @include info-text;
  color: $color_green_9;
}

</style>
