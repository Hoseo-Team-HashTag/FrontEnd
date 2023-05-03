<template>
  <v-navigation-drawer expand-on-hover rail style="background-color: #c7f29b">
    <v-list>
      <v-list-item
        prepend-icon="mdi:mdi-account-circle"
        title="Guest"
        subtitle="guest001@gmail.com"
      ></v-list-item>
    </v-list>

    <!-- 분할 -->
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="fas fa-sharp fa-light fa-gear"
        title="설정"
        value="설정"
      ></v-list-item>
      <v-list-item
        prepend-icon="fas fa-plus"
        title="추가"
        value="추가"
        @click="showDialog = true"
      ></v-list-item>
    </v-list>
    <!-- <DialogModal v-model="dialog" /> -->
    <!-- <DialogModal v-if="showDialog" @closeDialog="showDialog = false" /> -->
  </v-navigation-drawer>
</template>

<script>
// import DialogModal from './DialogModal.vue';

export default {
  name: 'SideBar',
  components: {
    // DialogModal,
  },
  data() {
    return {
      // showDialog: false,
    };
  },
};
</script>
