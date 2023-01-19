<template>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        v-if='this.$route.name !== "auth-login"'
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawerPage',
  data () {
    return {
      showHideSpinner: true,
      data: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Post',
          to: '/post/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Manage User',
          to: '/manage/user'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Categories',
          to: '/categories',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Happy Forum'
    }
  }
}
</script>
