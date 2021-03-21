<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$props.class"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <path fill="currentColor" :d="svgPath" />
  </svg>
</template>

<script lang="ts">
import {
  findIconDefinition, IconDefinition, IconName, IconPrefix,
} from '@fortawesome/fontawesome-svg-core';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'FontAwesomeIcon',
})
export default class ExpandabelButton extends Vue {
  @Prop({ type: String })
  private icon = '';

  @Prop({ type: String, required: false })
  private type = 'fas'

  @Prop({ type: String })
  private class = ''

  get definition(): IconDefinition {
    return findIconDefinition({
      prefix: this.type as IconPrefix,
      iconName: this.icon as IconName,
    });
  }

  get width(): string {
    return String(this.definition.icon[0]);
  }

  get height(): string {
    return String(this.definition.icon[1]);
  }

  get svgPath():string {
    return String(this.definition.icon[4]);
  }
}
</script>

<style lang="scss" scoped>

</style>
