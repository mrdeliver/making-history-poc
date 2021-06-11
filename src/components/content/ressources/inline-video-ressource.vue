<template>
  <div>
    <div class='row'>
      <div class="image-col">
        <iframe :src="url"></iframe>
      </div>
    </div>
    <div class="row">
       <div class="caption-col">
        {{caption}}
      </div>
    </div>
    <div class='row'>
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
  RessourceType, TextContentBlock,
} from '../../../store/data/data-types';
import TextBlock from '../text-block.vue';

@Options({
  components: {
    TextBlock,
  },
})
export default class InlineVideoRessource extends Vue {
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
  url = '';
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/colors";
.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.image-col {
  flex: 80%;
  padding: 20px;
}

.caption-col {
  width: 80%;
  color: $color_yellow_7;
  text-align: center;
  margin: auto;
}

iframe {
  width:100%;
  height:400px;
  border-radius: 15px;
}
</style>
