<template>
    <div class="pdf-button" @click="createPDF">Download PDF</div>
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
import PDFGenerator from '../../utils/pdf_generator';

@Options({
  name: 'worksheet',
  components: { Question },
})
export default class Source extends Vue {
  @Prop({ type: String })
  private worksheetId = '0';

  private renderQuestionKey = 0;

  public currentSheet: Worksheet = {} as Worksheet;

  @Watch('worksheetId')
  onWorksheetIdChange(value: string): void {
    this.currentSheet = WorksheetStore.worksheetWithId(value);
    this.renderQuestionKey += 1;
  }

  created(): void {
    this.currentSheet = WorksheetStore.worksheetWithId(this.worksheetId);
  }

  createPDF() {
    const pdf = new PDFGenerator(this.currentSheet);
    pdf.getPDF();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/text";
@import "src/size";
@import "src/colors";

.pdf-button {
  @include info-heading;
  background-color: $color_green_1;
  color: $color_blue;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
  text-align: center;
  display: inline-block;
  margin: 10px;
}

</style>
