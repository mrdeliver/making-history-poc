<template>
  <div ref="richTextContainer" class="text-block"></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { createApp, h, App } from 'vue';
import { Prop, Watch } from 'vue-property-decorator';
import { GlossarEntry } from '../../store/data/glossar';
import GlossarStore from '../../store/glossar-module';
import BoxContentFrame from '../menus/box-content-frame.vue';

const EXPANDED = 'expanded';

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

  $refs!:{
    richTextContainer: HTMLElement
  }

  @Watch('text')
  updateText(): void {
    this.glossarEntries = this.glossarIds.map((id) => GlossarStore.glossarEntryWithId(id));
    this.replaceGlossarEntries();
    this.registerClickHandler();
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
      elements[i].addEventListener('click', this.handleGlossarClick);
    }
  }

  handleGlossarClick(e: Event): void {
    const elem: HTMLElement = e.target as HTMLElement;
    if (elem.classList.contains(EXPANDED)) this.closeGlossarEntry(elem);
    else this.openGlossarEntry(elem);
  }

  closeGlossarEntry(elem: HTMLElement): void {
    elem.classList.remove('expanded');
    elem.removeChild(elem.lastChild as Node);
  }

  openGlossarEntry(elem: HTMLElement): void {
    const glossarEntry = this.glossarEntries.filter((entry) => entry.id === elem.id)[0];
    const comp = this.createBoxContentComponent(glossarEntry.heading, glossarEntry.text);
    const wrapper = document.createElement('span');
    comp.mount(wrapper);
    elem.appendChild(wrapper);
    elem.classList.add(EXPANDED);
  }

  createBoxContentComponent(heading: string, text: string): App {
    const comp = createApp({
      setup() {
        return () => h(
          BoxContentFrame,
          { 'frame-flavour': 'glossarFrame' },
          [
            h('div', { class: 'glossarHeading' }, heading),
            h('div', { class: 'glossarText' }, text),
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

@import "../../colors";
@import "../../text";

.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.glossarFrame {
  border: 2px solid $color_orange_1;
  background-color: $color_orange_4;
  width: 300px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 25px;
}

.glossarHeading {
  @include info-heading;
  margin-bottom: 5px;
  color: $color_green_9;
}

.glossarText {
  @include info-text;
  color: $color_green_9;
}

.glossar-entry {
  background-color: aqua;
  cursor: pointer;
  position: relative;
}
</style>
