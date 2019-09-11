<template>
    <v-container>
        <v-app-bar app clipped-left color=deep-orange darken-2>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="headline text-uppercase bold black--text">
                <span class="font-weight-light">TX</span>
                <span> Elite</span>
            </v-toolbar-title>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            class="blue-grey darken-3"    
        >
            <v-list shaped>
                <v-list-item-group v-model="item" color="deep-orange">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    router :to="item.route"
                >
                    <v-list-item-icon>
                    <v-icon class="deep-orange--text darken-2" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title class="deep-orange--text darken-2" v-text="item.text"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
   
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
      drawer: false,
      item: 1,
      items: [
        { text: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
        { text: 'Schedule', icon: 'schedule', route: '/schedule' },
        { text: 'Roster', icon: 'wc', route: '/roster' },
        { text: 'Chat', icon: 'chat', route: '/chat' },
        { text: 'Placeholder 1', icon: 'sports_baseball', route: '/placeholder1' },
        { text: 'Placeholder 2', icon: 'sports_baseball', route: '/placeholder2' },
        { text: 'Placeholder 3', icon: 'sports_baseball', route: '/placeholder3' },
      ],
    }),
}
</script>
