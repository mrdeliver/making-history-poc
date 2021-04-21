<template>
  <div @click="toggleState" class="baseWrapper" :class="wrapperState">
    <div class="heading">{{heading}}</div>
    <transition name="content">
      <div class="content" v-if="expand">
        {{text}}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'GlossarEntryContainer',
})
export default class GlossarEntryContainer extends Vue {
  @Prop({ })
  private heading = '';

  @Prop({})
  private text = '';

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

@mixin glossarTransition {
  transition: all 90ms ease;
}

.content-enter-from {
  opacity: 0 !important;
  transform: translateY(-20px) !important;
}

.content-enter-active {
  @include glossarTransition;
}

.content {
  opacity: 1;
  transform: none;
}

.content-leave-active {
  @include glossarTransition;
}

.content-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

</style>
