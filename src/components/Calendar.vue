<template>
  <!-- Sidebar -->
  <SideBar />
  <section class="section">
    <h2 id="cal__navbar" class="subtitle has-text-centered">
      <!-- 이전 달로 이동 버튼 -->
      <button
        class="button is-small is-primary is-outlined mr-1"
        @click="calendarData(-1)"
      >
        &lt;
      </button>
      <!-- 다음 달로 이동 버튼 -->
      <button
        class="button is-small is-primary is-outlined ml-1"
        @click="calendarData(1)"
      >
        &gt;
      </button>
      <!-- 현재 연도와 월 표시 -->
      <p style="padding-left: 16px">{{ year }}년 {{ month }}월</p>
      <!-- 일정 추가 버튼 -->
      <DialogModal ref="dialogModal" :selectedDate="selectedDate" />
    </h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <!-- 요일 헤더 -->
          <th v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody class="table is-bordered" style="height: 600px">
        <tr v-for="(week, weekIndex) in dates" :key="weekIndex">
          <td
            v-for="(date, dayIndex) in week"
            :key="dayIndex"
            :class="{
              'has-text-grey-light': isLastMonthDay(weekIndex, dayIndex),
              'has-text-grey-lighter': isNextMonthDay(weekIndex, dayIndex),
              'has-text-success': isToday(weekIndex, dayIndex),
              'has-text-link': isSaturday(dayIndex),
              'has-text-danger': isSunday(dayIndex),
              'no-modal':
                isLastMonthDay(weekIndex, dayIndex) ||
                isNextMonthDay(weekIndex, dayIndex),
            }"
            @click="
              !isLastMonthDay(weekIndex, dayIndex) &&
                !isNextMonthDay(weekIndex, dayIndex) &&
                openDialog(date)
            "
          >
            {{ date }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import SideBar from './SideBar.vue';
import DialogModal from './DialogModal.vue';

export default {
  name: 'CalendarView',
  components: {
    SideBar,
    DialogModal,
  },
  data() {
    return {
      days: ['일', '월', '화', '수', '목', '금', '토'],
      dates: [],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      lastMonthStart: 0,
      nextMonthStart: 0,
      today: 0,
      selectedDate: null,
    };
  },
  created() {
    // 로그인이 필요하지 않은 페이지(메인(로그인화면),회원가입 등)에 로그인이 된 상태로 접근
    if (sessionStorage.getItem('accessToken') == null) {
      this.$router.push('/');
    }
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
    this.year = this.currentYear;
    this.month = this.currentMonth;
    this.today = date.getDate();
    this.calendarData();
  },
  methods: {
    calendarData(arg) {
      if (arg < 0) {
        this.month -= 1;
      } else if (arg === 1) {
        this.month += 1;
      }
      if (this.month === 0) {
        this.year -= 1;
        this.month = 12;
      } else if (this.month > 12) {
        this.year += 1;
        this.month = 1;
      }
      const [monthFirstDay, monthLastDate, lastMonthLastDate] =
        this.getFirstDayLastDate(this.year, this.month);
      this.dates = this.getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate,
      );
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const lastDate = new Date(year, month, 0).getDate();
      let lastYear = year;
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        lastYear -= 1;
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate();
      return [firstDay, lastDate, prevLastDate];
    },
    getMonthOfDays(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      const dates = [];
      let weekOfDays = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          for (let j = 0; j < monthFirstDay; j += 1) {
            if (j === 0) this.lastMonthStart = prevDay;
            weekOfDays.push(prevDay);
            prevDay += 1;
          }
        }
        weekOfDays.push(day);
        if (weekOfDays.length === 7) {
          dates.push(weekOfDays);
          weekOfDays = [];
        }
        day += 1;
      }
      const len = weekOfDays.length;
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k);
        }
      }
      if (weekOfDays.length > 0) dates.push(weekOfDays);
      this.nextMonthStart = weekOfDays[0];
      return dates;
    },
    isLastMonthDay(weekIndex, dayIndex) {
      return (
        weekIndex === 0 &&
        this.dates[weekIndex][dayIndex] >= this.lastMonthStart
      );
    },
    isNextMonthDay(weekIndex, dayIndex) {
      return (
        weekIndex === this.dates.length - 1 &&
        this.dates[weekIndex][dayIndex] < this.nextMonthStart
      );
    },
    isToday(weekIndex, dayIndex) {
      const date = this.dates[weekIndex][dayIndex];
      return (
        date === this.today &&
        this.month === this.currentMonth &&
        this.year === this.currentYear
      );
    },
    isSaturday(dayIndex) {
      return dayIndex === 6;
    },
    isSunday(dayIndex) {
      return dayIndex === 0;
    },
    // openDialog(date) {
    //   const selectedDate = new Date(this.year, this.month - 1, date);
    //   const year = selectedDate.getFullYear();
    //   const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    //   const day = selectedDate.getDate().toString().padStart(2, '0');
    //   this.selectedDate = `${year}-${month}-${day}`;
    //   this.$refs.dialogModal.openDialog(selectedDate); // selectedDate 전달
    //   console.log(this.selectedDate);
    // },
    openDialog(date) {
      const selectedDate = new Date(this.year, this.month - 1, date + 1);
      const formattedDate = selectedDate.toISOString().split('T')[0]; // 날짜를 yyyy-mm-dd 형식으로 변환
      this.selectedDate = formattedDate;
      this.$refs.dialogModal.openDialog(formattedDate);
      console.log(formattedDate);
    },
  },
};
</script>
