<template>
  <div ref="richTextContainer" class="text-block"></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { createApp, h, App } from 'vue';
import { Prop, Watch } from 'vue-property-decorator';
import glossar, { GlossarEntry } from '../../store/data/glossar';
import GlossarStore from '../../store/glossar-module';
import BoxContentFrame from '../menus/box-content-frame.vue';

@Options({
  components: {
    BoxContentFrame,
  },
})
export default class GlossarText extends Vue {
  @Prop()
  private text = 'hello'

  @Prop()
  private glossarIds: string[] = []

  private containerId = 'rich-text-container';

  private clickRegistered = false;

  $refs!:{
    richTextContainer: HTMLElement
  }

  @Watch('text')
  updateText(): void {
    this.glossarEntries = this.glossarIds.map((id) => GlossarStore.glossarEntryWithId(id));
    this.replaceGlossarEntries();
  }

  private glossarEntries: GlossarEntry[] = [];

  replaceGlossarEntries(): void {
    const richText = this.replaceEntriesWithHTML();
    const container = this.$refs.richTextContainer;
    container.innerHTML = richText;
  }

  replaceEntriesWithHTML(): string {
    let richText = this.text;
    const glossarElements = this.glossarEntries.map((entry) => {
      const elem = document.createElement('span');
      elem.setAttribute('id', entry.id);
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

  createBoxContentFrame(): HTMLElement {
    const el = document.createElement('box-content-frame');
    el.setAttribute('frame-flavour', 'defaultFrameFlavour');
    return el;
  }

  registerClickHandler():void {
    const elements = this.$refs.richTextContainer.getElementsByClassName('glossar-entry');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('click', this.displayGlossarEntry);
    }
  }

  displayGlossarEntry(event: Event) {
    const el: HTMLElement = event.target as HTMLElement;
    const glossarEntry = this.glossarEntries.filter((entry) => entry.id === el.id)[0];
    const comp = this.createBoxContentComponent(glossarEntry.heading, glossarEntry.text);
    const wrapper = document.createElement('div');
    comp.mount(wrapper);
    el.appendChild(wrapper);
  }

  createBoxContentComponent(heading: string, text: string): App {
    const comp = createApp({
      setup() {
        return () => h(
          BoxContentFrame,
          { type: 'primary' },
          [
            h('div', heading),
            h('div', text),
          ],
        );
      },
    });
    return comp;
  }

  mounted(): void {
    this.glossarEntries = this.glossarIds.map((id) => GlossarStore.glossarEntryWithId(id));
    this.replaceGlossarEntries();
    this.registerClickHandler();
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
