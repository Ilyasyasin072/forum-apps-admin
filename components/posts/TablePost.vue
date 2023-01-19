<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="post"
      :data="post"
      :search="search"
      :loading="loading"
      loading-text="Loading... Please wait"
      :items-per-page="5"
      class="elevation-1"
    >

      <template v-slot:item.sub_category[0].category.title="{ item }">
        <v-chip
          :color="getColor(item.sub_category[0].category.title)"
        >
          {{ strippedContent(item.sub_category[0].category.title) }}
        </v-chip>
      </template>

      <template v-slot:item.name="{ item }">
        {{ strippedContent(item.name) }}
      </template>

      <template v-slot:item.content="{ item }">
       <v-label>
          {{ strippedContent(item.content) }}
       </v-label>
      </template>

      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
        >
          Reset
        </v-btn>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      dialog: false,
      editedIndex: -1,
      dialogDelete: false,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'name',
        },
        { text: 'Title', value: 'title' },
        { text: 'Content', value: 'content' },
        { text: 'Category', value: 'sub_category[0].category.title' },
        { text: 'Created', value: 'created_at' },
      ],
    }
  },
  computed: {
    post: function() {
      return this.$store.state.post.post
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  methods: {
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/ig, " ");
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  mounted() {
    this.loading = true;
    setTimeout(()=>{
      this.$store.dispatch('post/actionPost').then((res) => {
        this.loading = false;
      }).catch((e) => {
        this.loading = true;
      })
    }, 2000)
  }
}
</script>
