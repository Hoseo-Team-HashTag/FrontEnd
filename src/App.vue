<template>
  <v-app>
    <v-main>
      <!-- Navbar -->
      <v-app-bar flat style="background-color: #a8d977">
        <v-app-bar-title>
          <v-icon
            icon="fas fa-regular fa-face-grin-squint-tears"
            color="var(--color-white)"
            style="margin: 8px"
          />
          <span class="happytime__title">HappyTime</span>
        </v-app-bar-title>
        <v-spacer>
          <router-link v-if="!isLoggedIn" to="/" class="navbar__menu__item"
            >Home</router-link
          >
          <router-link
            v-if="isLoggedIn"
            to="/Calendar"
            class="navbar__menu__item"
            >Calendar</router-link
          >
          <router-link
            v-if="!isLoggedIn"
            to="/SignUp"
            class="navbar__menu__item"
            >SignUp</router-link
          >
          <button v-if="isLoggedIn" class="navbar__menu__item" @click="logOut">
            Log Out
          </button>
        </v-spacer>
      </v-app-bar>

      <!-- router view -->
      <router-view
        :userName="userName"
        :userEmail="userEmail"
        @update-user="updateUser"
      />
    </v-main>
  </v-app>
</template>

<script>
import 'bulma/css/bulma.css';
export default {
  data() {
    return {
      userName: '',
      userEmail: '',
    };
  },
  computed: {
    isLoggedIn() {
      return sessionStorage.getItem('accessToken') !== null;
    },
  },
  methods: {
    logOut() {
      sessionStorage.removeItem('accessToken');
      this.$router.push('/');
      window.location.reload();
    },
    updateUser(user) {
      this.userName = user.userName;
      this.userEmail = user.userEmail;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'vuetify/dist/vuetify.min.css';

.happytime__title {
  color: var(--color-white);
  font-size: var(--font-medium);
  margin: 6px;
}
</style>
