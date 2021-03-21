<template>
  <div ref="richTextContainer"></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import glossar, { GlossarEntry } from '../../store/data/glossar';
import GlossarStore from '../../store/glossar-module';

@Options({})

export default class GlossarText extends Vue {
  @Prop()
  private text = 'hello'

  @Prop()
  private glossarIds: string[] = []

  private containerId = 'rich-text-container';

  $refs!:{
    richTextContainer: HTMLElement
  }

  @Watch('text')
  change() {
    this.glossarEntries = this.glossarIds.map((id) => GlossarStore.glossarEntryWithId(id));
    this.replaceGlossarEntries();
  }

  private glossarEntries: GlossarEntry[] = [];

  replaceGlossarEntries(): void {
    const richText = this.createElementFromText();
    const container = this.$refs.richTextContainer;
    container.innerHTML = richText;
  }

  createElementFromText(): string {
    let richText = this.text;
    const glossarElements = this.glossarEntries.map((entry) => {
      const elem = document.createElement('span');
      elem.classList.add('glossar-entry');
      return elem;
    });

    for (let i = 0; i < glossarElements.length; i += 1) {
      const entry = this.glossarEntries[i];
      const elem = glossarElements[i];
      for (let j = 0; j < entry.replaceTexts.length; j += 1) {
        const replaceText = entry.replaceTexts[j];
        elem.textContent = replaceText;
        richText = this.replaceWithObject(
          richText,
          replaceText,
          elem,
        );
      }
    }

    return richText;
  }

  replaceWithObject(
    textSource: string,
    textToReplace: string,
    objectToReplace: HTMLElement,
  ): string {
    const strings = textSource.split(textToReplace);
    if (strings.length >= 2) {
      return strings[0] + objectToReplace.outerHTML + strings[1];
    }
    return textSource;
  }

  mounted(): void {
    this.glossarEntries = this.glossarIds.map((id) => GlossarStore.glossarEntryWithId(id));
    this.replaceGlossarEntries();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.glossar-entry {
  background-color: aqua;
  cursor: pointer;
}
</style>
