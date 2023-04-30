<template>
  <v-app>
    <!-- Sidebar -->
    <SideBar />
    <v-main>
      <!-- Navbar -->
      <v-app-bar flat style="background-color: #a8d977">
        <v-app-bar-title>
          <v-icon icon="fas fa-regular fa-calendar" />
          HappyTime
        </v-app-bar-title>
        <v-spacer>
          <router-link to="/" class="navbar__menu__item">Home</router-link>
          <router-link to="/Calendar" class="navbar__menu__item"
            >Calendar</router-link
          >
        </v-spacer>
      </v-app-bar>

      <!-- router view -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
import 'bulma/css/bulma.css';
</script>

<style lang="scss">
body {
  background: url('@/assets/background-green.png') center/cover no-repeat;
  height: 100%;
}
</style>
