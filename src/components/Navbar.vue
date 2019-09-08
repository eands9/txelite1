<template>
    <v-container>
        <v-app-bar app clipped-left color=deep-orange darken-2>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="headline text-uppercase black--text">
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
export default {
    name: 'Navbar',
    data: () => ({
      drawer: null,
      item: 1,
      items: [
        { text: 'Dashboard', icon: 'dashboard' },
        { text: 'Schedule', icon: 'schedule' },
        { text: 'Chat', icon: 'chat' },
        { text: 'Placeholder 1', icon: 'sports_baseball' },
        { text: 'Placeholder 2', icon: 'sports_baseball' },
        { text: 'Placeholder 3', icon: 'sports_baseball' },
      ],
    }),
}
</script>
