<template>
  <router-link to="1">soure1</router-link>
  <router-link to="2">source2</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class SourceSlider extends Vue {
  @Prop({ type: String })
  private sourceId = ''

  @Prop({ type: String })
  private pageId = ''
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
</style>
