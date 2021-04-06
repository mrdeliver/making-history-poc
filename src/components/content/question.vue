<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
        <div class="heading">{{ heading }}</div>
        <div class="text">{{ text }}</div>
        <div class="input">
          <QuillEditor :options="textEditorOptions" class="editor"/>
        </div>
    </div>
    <tipp-area class="side-col" :tipps="tipps"></tipp-area>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import { Tip } from '@/store/data/data-types';
import { Prop } from 'vue-property-decorator';
import { QuillEditor } from '@vueup/vue-quill';
import TippArea from '../menus/tipps/tipp-area.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

@Options({
  components: {
    TippArea,
    QuillEditor,
  },
})
export default class Question extends Vue {
  @Prop({ type: String })
  private text = ''

  @Prop({ type: String })
  private heading = ''

  @Prop({})
  private tipps: Tip[] = []

  private textEditorOptions = {
    debug: 'info',
    placeholder: 'Tippe eine Antwort',
    readOnly: false,
    theme: 'snow',
    bounds: '.center-col',
  }
}
</script>

<style lang="scss">
@import "src/size";
@import "src/colors";
@import "src/text";

.row {
    display: $row_display;

    &.block {
      margin-bottom: 50px;
    }
}

.side-col {
    flex: $side_col_width;
}

.center-col {
    flex: $center_col_width;
}

textarea{
    width:100%;
}

.heading {
  @include info-heading;
  background-color: $color_blue_1;
  color: $color_blue;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
  text-align: center;
  display: inline-block;
}

.text {
  @include regular-text;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
