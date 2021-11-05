<script setup lang="ts">
    import { Display } from '../package/Box'

    const boxType: Display[] = ['flex', 'inline-flex', 'block']
</script>

<template>
    <main>
        <h1>Vue-Awesome-Box</h1>
        <h2>Box Types</h2>
        <awe-box
            v-for="type in boxType"
            :key="type"
            tag="div"
            :display="type"
            class="box"
        >
            {{ type }}
        </awe-box>
    </main>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@100;400&family=Satisfy&display=swap');
</style>

<style lang="stylus">
    #app {
      font-family 'Montserrat', Avenir, Helvetica, Arial, sans-serif, cursive;
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      color #35495e
    }
    main
      max-width 800px
      margin auto

    h1
      font-size 28px
      font-weight 400

    h2
      font-size 24px
      font-weight 400

    .box
      border 1px solid #333
      margin-bottom 20px
      padding 10px
</style>
