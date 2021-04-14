<template>
  <div ref="richTextContainer" class="text-block"></div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { createApp, h, App } from 'vue';
import { Prop, Watch } from 'vue-property-decorator';
import {
  Entry, EntryType, GlossarEntry, MethodEntry,
} from '../../store/data/entries';
import EntryStore from '../../store/search-entry-module';
import BoxContentFrame from '../menus/box-content-frame.vue';
import PageStore from '../../store/page-module';

const EXPANDED = 'expanded';
const GLOSSAR_WRAPPER = 'glossar-wrapper';

@Options({
  components: {
    BoxContentFrame,
  },
})
export default class EntryText extends Vue {
  @Prop()
  private text = 'hello'

  @Prop()
  private entryIds: string[] = []

  private entries: Entry[] = [];

  $refs!:{
    richTextContainer: HTMLElement
  }

  mounted(): void {
    this.buildText();
  }

  @Watch('text')
  updateText(): void {
    this.buildText();
  }

  buildText(): void {
    if (PageStore.getTeacherBandState === false) {
      this.entries = this.entryIds.map((id) => EntryStore.glossarEntryWithId(id));
    } else {
      this.entries = this.entryIds.map((id) => EntryStore.methodEntryWithId(id));
    }

    this.replaceEntries();
    this.registerClickHandler();
  }

  replaceEntries(): void {
    const richText = this.replaceEntriesWithHTML();
    const container = this.$refs.richTextContainer;
    container.innerHTML = richText;
  }

  replaceEntriesWithHTML(): string {
    let richText = this.text;
    const glossarElements = this.entries.map((entry) => this.buildTextElementFor(entry));

    for (let i = 0; i < glossarElements.length; i += 1) {
      const entry = this.entries[i];
      const elem = glossarElements[i];
      for (let j = 0; j < entry.replaceTexts.length; j += 1) {
        const replaceText = entry.replaceTexts[j];
        const textElem = document.createElement('span');
        textElem.textContent = replaceText;
        textElem.classList.add('glossar-text');

        // Replace glossar entries with html elements
        const strings = richText.split(replaceText);
        if (strings.length >= 2) {
          elem.appendChild(textElem);
          richText = strings[0] + elem.outerHTML + strings[1];
        }
      }
    }

    return richText;
  }

  buildTextElementFor(entry: Entry): HTMLElement {
    const wrapper = document.createElement('span');
    wrapper.setAttribute('id', entry.id);
    wrapper.classList.add('glossar-entry');
    return wrapper;
  }

  createBoxContentFrame(): HTMLElement {
    const el = document.createElement('box-content-frame');
    el.setAttribute('frame-flavour', 'defaultFrameFlavour');
    return el;
  }

  registerClickHandler():void {
    const elements = this.$refs.richTextContainer.getElementsByClassName('glossar-text');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('click', this.handleEntryClick);
    }
  }

  handleEntryClick(e: Event): void {
    const elem: HTMLElement = e.target as HTMLElement;
    const parent = elem.parentNode as HTMLElement;
    if (parent.classList.contains(EXPANDED)) this.closeGlossarEntry(parent);
    else this.openEntry(parent);
  }

  closeGlossarEntry(elem: HTMLElement): void {
    elem.classList.remove('expanded');
    elem.classList.remove('active-glossar-entry');
    const glossarBox = elem.getElementsByClassName(GLOSSAR_WRAPPER)[0] as HTMLElement;
    elem.removeChild(glossarBox);
  }

  openEntry(elem: HTMLElement): void {
    elem.classList.add('active-glossar-entry');

    const entry = this.entries.filter((ent) => ent.id === elem.id)[0];
    const entryText = this.getEntryTextBasedOnType(entry);
    const comp = this.createBoxContentComponent(entry.heading, entryText);
    const wrapper = document.createElement('span');
    wrapper.classList.add(GLOSSAR_WRAPPER);
    this.setPositionOfWrapper(wrapper, elem);
    comp.mount(wrapper);
    elem.appendChild(wrapper);
    elem.classList.add(EXPANDED);
  }

  getEntryTextBasedOnType(entry: Entry): string {
    switch (entry.type) {
      case EntryType.GLOSSAR: {
        const glossarEntry = entry as GlossarEntry;
        return glossarEntry.text;
      }
      case EntryType.METHOD: {
        const methodEntry = entry as MethodEntry;
        return methodEntry.execution;
      }
      default:
        return '';
    }
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

  setPositionOfWrapper(wrapper: HTMLElement, parent: HTMLElement): void {
    const { left } = parent.getBoundingClientRect();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (left < vw / 2) wrapper.classList.add('glossar-right');
    else wrapper.classList.add('glossar-left');
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
