<template>
  <div @click="toggleState" class="baseWrapper" :class="wrapperState">
    <div class="heading">{{content.heading}}</div>
    <div class="content" v-if="expand">
      {{content.text}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { GlossarEntry } from '@/store/data/glossar';

@Options({
  name: 'GlossarEntryContainer',
})
export default class GlossarEntryContainer extends Vue {
  @Prop({ })
  private content: GlossarEntry = {
    id: '',
    heading: '',
    text: '',
    replaceTexts: [],
    imageUrl: '',
  }

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

@import "../../../colors";
@import "../../../text";

.baseWrapper {
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 15px;
}

.closedWrapper {
  background-color: $color-orange-2;
  border: transparent;
}

.openWrapper {
  background-color: $color-orange-1;
  border: 2px solid $color-orange-3;
}

.heading {
  font-size: $font_size_text;
  font-weight: $font_weight_heading;
  margin-bottom: 5px;
  color: $color_orange_8;
}

.content {
  @include info-text;
  color: $color_orange_8;
  text-align: justify;
  padding: 5px;
}

</style>
