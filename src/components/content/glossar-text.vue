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
const GLOSSAR_WRAPPER = 'glossar-wrapper';

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
    const glossarElements = this.glossarEntries.map((entry) => this.buildTextElementFor(entry));

    for (let i = 0; i < glossarElements.length; i += 1) {
      const entry = this.glossarEntries[i];
      const elem = glossarElements[i];
      for (let j = 0; j < entry.replaceTexts.length; j += 1) {
        const replaceText = entry.replaceTexts[j];
        const textElem = document.createElement('span');
        textElem.textContent = replaceText;
        textElem.classList.add('glossar-text');
        elem.appendChild(textElem);
        richText = this.replaceWithObject(
          richText,
          replaceText,
          elem,
        );
      }
    }

    return richText;
  }

  buildTextElementFor(entry: GlossarEntry): HTMLElement {
    const wrapper = document.createElement('span');
    wrapper.setAttribute('id', entry.id);
    wrapper.classList.add('glossar-entry');
    return wrapper;
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
    const elements = this.$refs.richTextContainer.getElementsByClassName('glossar-text');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('click', this.handleGlossarClick);
    }
  }

  handleGlossarClick(e: Event): void {
    const elem: HTMLElement = e.target as HTMLElement;
    const parent = elem.parentNode as HTMLElement;
    if (parent.classList.contains(EXPANDED)) this.closeGlossarEntry(parent);
    else this.openGlossarEntry(parent);
  }

  closeGlossarEntry(elem: HTMLElement): void {
    elem.classList.remove('expanded');
    elem.classList.remove('active-glossar-entry');
    const glossarBox = elem.getElementsByClassName(GLOSSAR_WRAPPER)[0] as HTMLElement;
    elem.removeChild(glossarBox);
  }

  openGlossarEntry(elem: HTMLElement): void {
    elem.classList.add('active-glossar-entry');

    const glossarEntry = this.glossarEntries.filter((entry) => entry.id === elem.id)[0];
    const comp = this.createBoxContentComponent(glossarEntry.heading, glossarEntry.text);
    const wrapper = document.createElement('span');
    wrapper.classList.add(GLOSSAR_WRAPPER);
    this.setPositionOfWrapper(wrapper, elem);
    comp.mount(wrapper);
    elem.classList.add(EXPANDED);
  }

  setPositionOfWrapper(wrapper: HTMLElement, parent: HTMLElement): void {
    const { left } = parent.getBoundingClientRect();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (left < vw / 2) wrapper.classList.add('glossar-right');
    else wrapper.classList.add('glossar-left');
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

$horizontal: 20px;
$vertical: 25px;

.block {
  margin-bottom: 20px;
}

.text-block {
  text-align: justify;
}

.glossarFrame {
  border: 2px solid $color_orange;
  background-color: $color_orange_2;
  width: 300px;
  height: 200px;
}

.glossar-wrapper {
  position: absolute;
  z-index: 100;
}

.glossar-right {
  left: $horizontal;
  top: $vertical;
}

.glossar-left {
  right: $horizontal;
  top: $vertical;
}

.glossarHeading {
  @include info-heading;
  margin-bottom: 5px;
  color: $color_green_9;
}

.glossarText {
  @include info-text;
  color: $color_orange_8;
}

.glossar-entry {
  cursor: pointer;
  position: relative;
  color: $color_orange;
}

.active-glossar-entry {
  text-decoration: underline;
}

.glossar-link {
  background-color: red;
}

</style>
