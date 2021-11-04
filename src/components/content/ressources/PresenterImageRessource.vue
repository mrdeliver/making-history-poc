<template>
  <div class="overlay" @click="$parent.togglePresenterMode()">
    <img class="fit-to-screen" :src="url" />
  </div>

</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Vue, Options } from 'vue-class-component';

export default class PresenterImageRessource extends Vue {
  @Prop({})
  private url = '';
}
</script>

<style>

.overlay{
  display:flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  /*opacity:0.9;
  background-color:#ccc;*/
  backdrop-filter: blur(10px);
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:400;
}

.fit-to-screen {
  height: 90vh;
}

a.fill-div {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

</style>
