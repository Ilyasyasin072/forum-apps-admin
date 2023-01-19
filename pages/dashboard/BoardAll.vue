<template>
    <div>
      <v-row>
        <v-col cols="8">
          <v-row>
            <slot name="board-first"></slot>
          </v-row>
          <v-row :style="{'margin-top': '30px'}">
            <slot name="board-two"></slot>
          </v-row>
          <v-row :style="{'margin-top': '30px'}">
            <slot name="board-three"></slot>
            <slot name="board-three-one"></slot>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-col>
            <slot name="board-four"></slot>
            <slot name="board-five"></slot>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BoardAll',
  }
  </script>
  