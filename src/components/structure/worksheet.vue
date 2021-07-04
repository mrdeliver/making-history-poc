<template>
    <div class="downloadInfoContainer">
      <div class="downloadInfo" @click="createPDF()">
        <div class="downloadInfoTextWrapper">
          <div class="downloadInfoText">Download PDF</div>
        </div>
        <fa :icon="crossIcon" class="icon sources-icon"></fa>
      </div>
    </div>
    <div class="uploadInfoContainer">
      <div class="downloadInfo" @click="fileupload=!fileupload">
        <div class="downloadInfoTextWrapper">
          <div class="downloadInfoText">Upload PDF</div>
        </div>
        <fa :icon="crossIcon" class="icon sources-icon"></fa>
      </div>
    </div>
    <fileupload v-if="fileupload" class="file-upload"></fileupload>
    <question v-for="(task, idx) in currentSheet.tasks"
      :key="renderQuestionKey + idx"
      :heading="task.heading"
      :text="task.question"
      :tipps="task.tipps"
      :canvasId="task.id">
    </question>
</template>

<script lang="ts">
import { Worksheet } from '@/store/data/worksheets';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import WorksheetStore from '@/store/worksheet-module';
import Question from '../content/question.vue';
import fileupload from './fileupload.vue';
import PDFGenerator from '../../utils/pdf_generator';

@Options({
  name: 'worksheet',
  components: { Question, fileupload },
})
export default class Source extends Vue {
  @Prop({ type: String })
  private worksheetId = '0';

  private renderQuestionKey = 0;

  public currentSheet: Worksheet = {} as Worksheet;

  private crossIcon = 'cloud-download-alt';

  fileupload = false;

  @Watch('worksheetId')
  onWorksheetIdChange(value: string): void {
    this.currentSheet = WorksheetStore.worksheetWithId(value);
    this.renderQuestionKey += 1;
  }

  created(): void {
    this.currentSheet = WorksheetStore.worksheetWithId(this.worksheetId);
  }

  createPDF(): void {
    const pdf = new PDFGenerator(this.currentSheet);
    pdf.getPDF();
  }

  uploadPDF(): void {
    console.log('upload');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/text";
@import "src/size";
@import "src/colors";
@import "src/style";

.downloadInfoTextWrapper {
  @include infoTextWrapper();
}

.downloadInfoContainer {
  @include infoContainer();

  .downloadInfo {
    @include infoBox();
    background-color: $color_blue_1;
    color: $color_blue;
    border-color: $color_blue;

    .downloadInfoText {
      @include infoText();
    }

    .icon {
        @include infoIcon();
      }
    }
}

.uploadInfoContainer {
  margin-top: 4px;
  @include infoContainer();

  .downloadInfo {
    @include infoBox();
    background-color: $color_blue_1;
    color: $color_blue;
    border-color: $color_blue;

    .downloadInfoText {
      @include infoText();
    }

    .icon {
        @include infoIcon();
      }
    }
}

.file-upload {
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>
