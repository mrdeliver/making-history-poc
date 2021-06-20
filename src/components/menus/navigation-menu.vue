<template>
  <div>
    hello
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  useRouter, Router,
} from 'vue-router';

@Options({
  name: 'NavigationMenu',
})
export default class NavigationMenu extends Vue {
  private router: Router = useRouter();

  @Prop({ type: String })
  private buttonFlavour = 'defaultFlavour';

  @Prop({ type: String })
  private buttonIcon = 'stream';

  get iconToDisplay(): string {
    return this.buttonIcon;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "src/colors";
@import "src/style";

</style>
