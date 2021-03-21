<template>
  <content-frame :contentBlocks="currentPage.content"></content-frame>
  <expandable-button class="positionFixed">
    <action-menu :ressourceIds="currentPage.ressources"/>
  </expandable-button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import PageStore, { Page } from '../../store/page-module';
import ActionMenu from '../menus/action-menu/action-menu.vue';
import ContentFrame from '../content/content-frame.vue';
import ExpandableButton from '../menus/expandable-button.vue';

@Options({
  name: 'page',
  components: {
    ActionMenu,
    ContentFrame,
    ExpandableButton,
  },
})
export default class PageComponent extends Vue {
  @Prop({ type: String })
  private pageId = '';

  private currentPage: Page = {} as Page;

  @Watch('pageId')
  onpageIdChange(value: string): void {
    this.currentPage = PageStore.singlePage(value);
  }

  mounted(): void {
    this.currentPage = PageStore.singlePage(this.pageId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.positionFixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
