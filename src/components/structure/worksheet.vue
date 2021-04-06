<template>
  <question v-for="(task, idx) in currentSheet.tasks"
    :key=idx
    :text="task.question"
    :tipps="task.tipps">
  </question>
</template>

<script lang="ts">
import { Worksheet } from '@/store/data/worksheets';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import WorksheetStore from '@/store/worksheet-module';
import Question from '../content/question.vue';

@Options({
  name: 'worksheet',
  components: { Question },
})
export default class Source extends Vue {
  @Prop({ type: String })
  private worksheetId = '0';

  public currentSheet: Worksheet = {} as Worksheet;

  @Watch('worksheetId')
  onWorksheetIdChange(value: string): void {
    this.currentSheet = WorksheetStore.worksheetWithId(value);
  }

  created(): void {
    this.currentSheet = WorksheetStore.worksheetWithId(this.worksheetId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
