<template>
  <div>
    <v-col>
      <v-row>
        <component-dashboard-board-page/>
      </v-row>
    </v-col>
    <v-divider></v-divider>
    <component-dashboard-card-page/>
  </div>
</template>

<script>
import Board from "../components/dashboard/Board";
import BoardCard from "../components/dashboard/BoardCard";
export default {
  name: 'IndexPage',
  components: {
    'component-dashboard-board-page': Board,
    'component-dashboard-card-page': BoardCard,
  }
}
</script>
