<template>
  <div class="expandableButtonContainer" @focusout="collapseContent()" tabindex="0">
    <div @click="toggleContent()"
    :class="buttonFlavour" class="defaultStyle" ref="button" >
      <fa :icon="iconToDisplay" class="icon"></fa>
    </div>
    <div @mousedown="childClicked()"
    v-show="expand" class="positionAbsolute" :class="expandDirectionClass">
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

  @Prop({ type: String })
  private buttonOpenIcon = 'circle';

  private closeIcon = 'times';

  $refs!:{
    button: HTMLElement
  }

  private iPadHeight = window.innerHeight;

  private iPadWidth = window.innerWidth;

  private expandDirectionClass = ''

  mounted(): void {
    this.expandDirectionClass = this.getExpandDirectionClass();
  }

  get iconToDisplay(): string {
    return this.expand ? this.closeIcon : this.buttonOpenIcon;
  }

  toggleContent(): void {
    this.expandDirectionClass = this.getExpandDirectionClass();
    this.expand = !this.expand;
  }

  collapseContent(): void {
    if (!this.childInFocus) {
      this.expand = false;
    }
  }

  childInFocus = false;

  // mousedown fires BEFORE focusout, so this way we can register wether
  // a child element was clicked and omit the following collapseContent.
  childClicked(): void {
    this.childInFocus = true;
    setTimeout(() => { this.childInFocus = false; }, 200);
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

.expandableButtonContainer:focus {
  outline: none;
}

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
  bottom: $button_diameter;
  left: $button_diameter;
}

.expandRightDown {
  position: absolute;
  top: $button_diameter;
  left: $button_diameter;
}

.expandLeftTop {
  position: absolut;
  bottom: $button_diameter;
  right: $button_diameter;
}

.expandLeftDown {
  position: absolute;
  top: $button_diameter;
  right: $button_diameter;
}

</style>
