<template>
  <v-row class="mt-5">
    <v-col cols="3" v-for="(r, i) in categories" :key="i">
      <v-card>
        <v-card-title>
          <v-label class="center">{{ r.title }}</v-label>
        </v-card-title>
        <v-card-body>
          <v-card-text>
            <div class="text-center">
              <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="value"
                color="teal"
              >
                {{ value }}
              </v-progress-circular>
            </div>
          </v-card-text>
        </v-card-body>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      interval: {},
      value: 50,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  computed: {
    categories: function() {
      return this.$store.state.category.categories
    }
  },
  mounted () {
  },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
