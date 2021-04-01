<template>
  <div id="iPadFrame">
    <div id="app-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/">Settings</router-link>
    </div>
    <div id="app-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "colors";
@import "text";

html {
  height: 100vh;
  overflow: hidden;
}

body {
  height: inherit;
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: $font_weight_text;
  line-height: $line_height_text;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
}

#iPadFrame {
  max-width: 834px;
  margin: 0 auto;
  color: $color_grey_10;
  font-size: $font_size_text;
  height: inherit;

  #app-navigation {
    max-height: 3vh;
    a {
      text-decoration: none;
      color: black;
      margin-right: 10px;
      display: inline;
      transition: all, 0.5s;
      &:hover {
        font-size: 120%;
        transition: all, 0.5s
      }
    }
  }

  #app-content {
    height: 97vh;
  }
}
</style>
