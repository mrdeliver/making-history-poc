<template>
  <div v-show="userIsOnSubPage()">
    <div :class="buttonFlavour" class="defaultStyle" v-on:click="goToPage()">
      <fa :icon="iconToDisplay" class="icon"></fa>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  useRouter, Router, useRoute, RouteLocationNormalized,
} from 'vue-router';

@Options({
  name: 'BackButton',
})
export default class BackButton extends Vue {
  private currentRoute: RouteLocationNormalized = useRoute();

  private router: Router = useRouter();

  @Prop({ type: String })
  private buttonFlavour = 'defaultFlavour';

  @Prop({ type: String })
  private buttonIcon = 'backward';

  get iconToDisplay(): string {
    return this.buttonIcon;
  }

  userIsOnSubPage(): boolean {
    let userIsOnSubPage = false;
    const currentPath = this.currentRoute.path;
    if (currentPath.includes('worksheet')
    || currentPath.includes('ressource')) {
      userIsOnSubPage = true;
    }

    return userIsOnSubPage;
  }

  goToPage():void {
    const backMatch = this.currentRoute.path.match(/\/band\/\d\/page\/\d\//);
    if (backMatch !== null) {
      const backPath = backMatch[0];
      this.router.push(backPath);
    } else {
      this.router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../colors";

$button_diameter: 30px;

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
  left: 45%;
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
</style>
