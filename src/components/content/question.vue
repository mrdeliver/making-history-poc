<template>
  <div class="row block">
    <tipp-area class="side-col"></tipp-area>
    <div class="center-col">
        <div class="taskHeading">{{ heading }}</div>
        <div class="taskText">{{ text }}</div>
        <div class="taskInput">
          <QuillEditor :options="textEditorOptions" class="editor"/>
        </div>
        <div id="canvas-container">
          <canvas
            v-bind:id="getCanvasId()"
            class="canvasView"
            height="600"
            width="650">
            <p>Unfortunately, your browser is currently unsupported by our web application.
              We are sorry for the inconvenience.
              Please use one of the supported browsers listed below,
              or draw the image you want using an offline tool.
            </p>
            <p>Supported browsers: <a href="https://www.opera.com">Opera</a>, <a href="http://www.mozilla.com">Firefox</a>, <a href="http://www.apple.com/safari">Safari</a>, and <a href="http://www.konqueror.org">Konqueror</a>.</p>
          </canvas>
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

  @Prop({})
  private canvasId = 'test'

  getCanvasId(): string {
    return this.canvasId;
  }

  private textEditorOptions = {
    debug: 'info',
    placeholder: 'Tippe eine Antwort',
    readOnly: false,
    theme: 'snow',
    bounds: '.center-col',
  }

  mounted(): void {
    this.init();
  }

  private started = false;

  private context = {} as CanvasRenderingContext2D;

  private canvas = {} as HTMLCanvasElement

  // Initialization sequence.
  init():void {
    // Find the canvas element.
    this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      console.log('Error: I cannot find the canvas element!');
      return;
    }

    if (!this.canvas.getContext) {
      console.log('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    if (this.canvas.getContext('2d')) {
      this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    } else {
      console.log('Error: failed to getContext!');
      return;
    }

    // Attach the mousedown, mousemove and mouseup event listeners.
    this.canvas.addEventListener('mousedown', this.evMouseDownCanvas, false);
    this.canvas.addEventListener('mousemove', this.evMouseMoveCanvas, false);
    this.canvas.addEventListener('mouseup', this.evMouseUpCanvas, false);
  }

  evMouseDownCanvas(ev:MouseEvent):void {
    const pos = this.getMousePos(this.canvas, ev);
    this.context.beginPath();
    this.context.moveTo(pos.x, pos.y);
    this.started = true;
  }

  evMouseMoveCanvas(ev:MouseEvent):void {
    const pos = this.getMousePos(this.canvas, ev);
    if (this.started) {
      this.context.lineTo(pos.x, pos.y);
      this.context.stroke();
    }
  }

  evMouseUpCanvas(ev:MouseEvent):void {
    if (this.started) {
      this.evMouseMoveCanvas(ev);
      this.started = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent): any {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }
}
</script>

<style scoped lang="scss">
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

.taskHeading {
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

.taskText {
  @include regular-text;
  margin-top: 10px;
  margin-bottom: 10px;
}

.canvasView{
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  display: block;
}

</style>
