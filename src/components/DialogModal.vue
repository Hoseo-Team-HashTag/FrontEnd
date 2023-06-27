<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        width="40%"
        max-width="600px"
        min-width="400px"
      >
        <template v-slot:activator="{ on }">
          <!-- vuetify3.x 버전은 베타버전이라 date-picker가 없음, 추후 개발 예정 -->
          <!-- <v-btn
            class="dialog__addBtn"
            color="var(--color-nav-green)"
            v-on="on"
          >
            일정추가
          </v-btn> -->
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="rounded-lg">
            <v-toolbar color="var(--color-nav-green)" flat>
              <v-toolbar-title class="white--text">일정 추가</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div id="modal" class="text-h4 pa-4 rounded-lg">
                <p>선택한 날짜: {{ selectedDate }}</p>
                <v-text-field
                  v-model="title"
                  label="제목"
                  outlined
                  style="width: 100%"
                ></v-text-field>
                <v-text-field
                  v-model="memo"
                  label="일정 메모"
                  outlined
                  style="width: 100%"
                ></v-text-field>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="grey" text @click="dialog = false"> 취소 </v-btn>
              <v-btn color="black" text @click="saveEvent"> 저장 </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'DialogModal',
  data() {
    return {
      dialog: false,
      selectedDate: null,
      title: '',
      memo: '',
    };
  },
  methods: {
    openDialog(selectedDate) {
      this.dialog = true;
      this.selectedDate = selectedDate;
    },
    saveEvent() {
      const selectedDate = this.selectedDate
        ? new Date(this.selectedDate)
        : null;
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const event = {
        date: formattedDate,
        title: this.title,
        memo: this.memo,
      };

      console.log('Event:', event);
      this.dialog = false;
    },
  },
  props: {
    selectedDate: {
      type: Date,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
#modal {
  //   background-color: var(--color-light-white);
}

#modal__item {
  background-color: var(--color-light-white);
  margin: 12px;
  padding: 8px;
}

#modal__item::placeholder {
  //   color: red;
}

#modal__btn {
  background-color: var(--color-nav-green);
  margin: 16px;
}

#modal__btn:hover {
  background-color: var(--color-light-green);
}

.dialog__addBtn {
  font-size: var(--font-small);
}
</style>
