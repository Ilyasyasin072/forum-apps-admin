<template>
<div style="background-color: #f8f9fb; height: 500px">
  <v-container>
    <v-row>
      <v-col cols="6" style="padding: 70px; margin-top: 50px">
        <v-label style="white-space: normal !important; text-align: justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda autem consequatur dolor eligendi explicabo laudantium minus mollitia nulla officiis provident, quos sit! Enim est fugiat laboriosam libero vitae.
        </v-label>
        <v-btn class="p-5 mt-15" style="background-color: #1d3557 !important; color: white">
          Explore
        </v-btn>
      </v-col>
      <v-col cols="6">
        <img width="500" src="https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png" class="center mt-10" alt="">
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'DashboardBoardPage',
  data: ()=>({
    message: 'Dashboard Board Page'
  })
}
</script>
