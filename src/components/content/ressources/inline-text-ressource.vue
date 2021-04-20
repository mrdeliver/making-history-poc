<template>
  <div>
    <div class="row heading-row">
      {{heading}}
    </div>
    <div class="row source-row">
      {{sourceText}}
    </div>
    <div class="row content-row">
      <text-block v-for="(tb, idx) in content" :key="idx"
      :text="tb.text" :heading="tb.heading" :tipps="tb.tipps" :glossarEntries="tb.glossarEntries">
      </text-block>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  RessourceType, TextContentBlock, Annotation,
} from '../../../store/data/data-types';
import TextBlock from '../text-block.vue';

@Options({
  components: {
    TextBlock,
  },
})
export default class InlineTextRessource extends Vue {
  @Prop()
  id = '';

  @Prop()
  typ: RessourceType = {} as RessourceType;

  @Prop()
  author = '';

  @Prop()
  caption = '';

  @Prop()
  content: TextContentBlock[] = [] as TextContentBlock[];

  @Prop()
  sourceText = '';

  @Prop()
  heading = '';
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/text";

.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.heading-row{
   padding-left: 20px;
   @include info-heading;
}

.source-row {
  padding: 20px;
  font-style: italic;
}

</style>
