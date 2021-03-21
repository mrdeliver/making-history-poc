<template>
  <div>
    <div class='row'>
      <div class="image-col">
        <img :src="url">
      </div>
      <div class="caption-col">
        {{caption}}
      </div>
    </div>
    <div class='row'>
        <content-frame :contentBlocks="content" name="alskdj"></content-frame>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {
  RessourceType, TextContentBlock, Annotation,
} from '../../../store/data/data-types';
import ContentFrame from '../content-frame.vue';

@Options({
  components: {
    ContentFrame,
  },
})
export default class InlineImageRessource extends Vue {
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

  @Prop()
  annotations: Annotation[] = [];
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
