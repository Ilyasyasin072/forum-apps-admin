<template>
  <BoardFirst>
    <template #board-first>
      <component-dashboard-card-page/>
    </template>

    <template #board-two>
      <component-dashboard-chart-page/>
    </template>

    <template #board-three>
      <component-dashboard-new-page/>
    </template>
    <template #board-three-one>
    <component-dashboard-last-page/>
    </template>

    <template #board-four>
      <component-dashboard-statistic-page/>
    </template>
    
    <template #board-five>
      <component-dashboard-user-page/>
    </template>
  </BoardFirst>
</template>

<script>
import Board from "../components/dashboard/Board";
import BoardCard from "../components/dashboard/BoardCard";
import BoardFirst from '../pages/dashboard/BoardAll.vue';
import BoardChart from '../components/dashboard/BoardChart.vue';
import BoardNews from '../components/dashboard/BoardNews';
import BoardLast from '../components/dashboard/BoardLast';
import BoardStatistic from '../components/dashboard/BoardStatistic';
import BoardUser from '../components/dashboard/BoardUser';
export default {
  name: 'IndexPage',
  components: {
    'component-dashboard-board-page': Board,
    'component-dashboard-card-page': BoardCard,
    'component-dashboard-chart-page': BoardChart,
    'component-dashboard-new-page' : BoardNews,
    'component-dashboard-last-page' : BoardLast,
    'component-dashboard-statistic-page' : BoardStatistic,
    'component-dashboard-user-page' : BoardUser,
    BoardFirst,
  }
}
</script>
