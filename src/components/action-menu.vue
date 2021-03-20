<template>
  <div>Ja MOIN</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Ressources } from '../store/data/data-types';
import RessourceStore from '../store/ressource-module';

@Options({
  name: 'ActionMenu',
})
export default class ActionMenu extends Vue {
  @Prop()
  private ressources: Ressources = {} as Ressources;

  mounted(): void {
    // get all ressources for provided ids
    console.log(this.ressources);
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
</style>
