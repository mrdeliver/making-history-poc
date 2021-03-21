<template>
  <div>
    <div v-on:click="expandContent" :class="[buttonFlavour, defaultStyle]" ref="button">
      <fa :icon="iconToDisplay" class="icon"></fa>
    </div>
    <div v-if="expand" class="positionAbsolute" :class="expandDirectionClass">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'ExpandableButton',
})
export default class ExpandableButton extends Vue {
  private expand = false;

  @Prop({ type: String })
  private buttonFlavour = 'defaultFlavour';

  private defaultStyle = 'defaultStyle'

  @Prop({ type: String })
  private buttonOpenIcon = 'circle';

  private closeIcon = 'times';

  $refs!:{
    button: HTMLElement
  }

  private iPadHeight = window.innerHeight;

  private iPadWidth = 834;

  private expandDirectionClass = ''

  mounted(): void {
    this.expandDirectionClass = this.getExpandDirectionClass();
  }

  get iconToDisplay(): string {
    return this.expand ? this.closeIcon : this.buttonOpenIcon;
  }

  expandContent(): void {
    this.expandDirectionClass = this.getExpandDirectionClass();
    this.expand = !this.expand;
  }

  getExpandDirectionClass(): string {
    const buttonPosition = this.$refs.button.getBoundingClientRect();

    if (buttonPosition.x > (this.iPadWidth / 2)) {
      if (buttonPosition.y > (this.iPadHeight / 2)) {
        return 'expandLeftTop';
      }
      return 'expandLeftDown';
    }
    if (buttonPosition.y > (this.iPadHeight / 2)) {
      return 'expandRightTop';
    }
    return 'expandRightDown';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../colors";

$button_diameter: 30px;
$button_diameter_negative: -30px;

.defaultStyle {
  height: $button_diameter;
  width: $button_diameter;
  display: block;
  border-radius: 50%;
  position: relative;
}

.defaultFlavour {
  background-color: $color_grey_5;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block;
  width: 60%;
  height: 60%;
  color: $color_grey_0;
  margin: auto;
}

.positionAbsolute {
  position: absolute;
}

.expandRightTop {
  position: absolute;
  top: $button_diameter_negative;
  left: $button_diameter;
}

.expandRightDown {
  position: absolute;
  top: $button_diameter;
  left: $button_diameter;
}

.expandLeftTop {
  position: absolut;
  top: $button_diameter_negative;
  right: $button_diameter;
}

.expandLeftDown {
  position: absolute;
  top: $button_diameter;
  right: $button_diameter;
}

</style>
