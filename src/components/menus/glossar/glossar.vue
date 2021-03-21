<template>
  <box-content-frame frameFlavour="glossarFrame">
    <div></div>
  </box-content-frame>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import BoxContentFrame from '../box-content-frame.vue';

@Options({
  name: 'ActionMenu',
  components: {
    BoxContentFrame,
  },
})
export default class ActionMenu extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../../../colors";

.menu {
  min-width: 500px;
}

.glossarFrame {
  border: 2px solid $color_orange;
  background-color: $color_orange_1;
  max-width: 400px;
  max-height: 700px;
}
</style>
