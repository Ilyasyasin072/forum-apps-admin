<template>
  <div>
    <v-row class="mt-5">
      <v-col>
        <component-table-page/>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import TableCategory from "../../components/categories/TableCategory";

export default {
  name: 'CategoryPage',
  components: {
    'component-table-page': TableCategory,
  }
}
</script>
