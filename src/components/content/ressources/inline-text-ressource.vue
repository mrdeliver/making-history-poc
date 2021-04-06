<template>
  <div>
    <div class="row">
      {{heading}}
    </div>
    <div class="row">
      {{sourceText}}
    </div>
    <div class="row">
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
  heading = ''
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.image-col {
  flex: 80%;
}

.caption-col {
  flex: 20%;
}

img {
  max-width:100%;
  max-height:100%;
}
</style>
