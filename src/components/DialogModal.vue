<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="dialog__addBtn"
            color="var(--color-nav-green)"
            v-bind="props"
            >일정추가</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <!-- v-card: 버튼 클릭 시 나오는 modal창 -->
          <v-card class="rounded-lg">
            <v-toolbar
              color="var(--color-nav-green)"
              title="일정 추가"
            ></v-toolbar>
            <!-- modal창 내부 items -->
            <v-card-text>
              <div id="modal" class="text-h4 pa-4 rounded-lg">
                <input
                  id="modal__item"
                  type="text"
                  placeholder="제목"
                  style="width: 100%"
                /><br />
                <input
                  id="modal__item"
                  class="text-h5"
                  type="text"
                  placeholder="date picker"
                />
                <input
                  id="modal__item"
                  class="text-h5"
                  type="text"
                  placeholder="date picker"
                /><br />
                <input
                  id="modal__item"
                  class="text-h5"
                  type="text"
                  placeholder="일정 메모"
                  style="width: 100%"
                />
              </div>
            </v-card-text>
            <!-- actions-btn: 취소, 저장 버튼 -->
            <v-card-actions class="justify-end">
              <v-btn color="grey" variant="text" @click="isActive.value = false"
                >취소</v-btn
              >
              <v-btn
                id="modal__btn"
                color="black"
                variant="text"
                @click="isActive.value = false"
                >저장</v-btn
              >
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
    };
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
