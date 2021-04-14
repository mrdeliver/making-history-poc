<template>
  <div @click="toggleState" class="baseWrapper" :class="wrapperState">
    <div class="heading">{{heading}}</div>
    <div class="content" v-if="expand">
      <div class="subsection">
        <div class="subsectionHeading">Ziel</div>
        {{goal}}
      </div>
      <div class="subsection">
        <div class="subsectionHeading">Ausführung</div>
        {{execution}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'MethodEntryContainer',
})
export default class MethodEntryContainer extends Vue {
  @Prop({ })
  private goal = '';

  @Prop({ })
  private execution = '';

  @Prop({ })
  private heading = '';

  private expand = false;

  get wrapperState(): string {
    return this.expand ? 'openWrapper' : 'closedWrapper';
  }

  toggleState(): void {
    this.expand = !this.expand;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import 'src/text';
@import 'src/colors';

.subsection {
  margin-top: 5px;
  margin-bottom: 15px;

  .subsectionHeading {
    @include info-heading;
    color: $color_orange_4;
    margin-bottom: 5px;
  }
}

</style>
