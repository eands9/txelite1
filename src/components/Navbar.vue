<template>
    <v-container>
        <v-app-bar app clipped-left color=black>
            <v-app-bar-nav-icon class=white @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline">
                <router-link :to="{ name: 'home' }">
                    <span class="font-weight-light white--text">TX</span>
                    <span class="bold white--text">ELITE</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <Register/>
            <v-btn color=black class=white--text>
                Sign Out
                <v-icon color=white>mdi-logout</v-icon>
            </v-btn>
            <v-btn color=black class=white--text>
                Sign In
                <v-icon color=white>mdi-login</v-icon>
            </v-btn>
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
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
   
</template>

<script>
import Register from '@/components/Register'

export default {
    name: 'Navbar',
    components: { Register },
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

<style>
/* remove underline from hyperlink */
a {  text-decoration: none;}
</style>
