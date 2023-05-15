<template>
  <!-- Sidebar -->
  <SideBar />
  <section class="section">
    <!-- <div class="container"> -->
    <!-- cal 내부 navbar: < >, 현재날짜, 일정추가 버튼 -->
    <h2 id="cal__navbar" class="subtitle has-text-centered">
      <button
        class="button is-small is-primary is-outlined mr-1"
        @click="calendarData(-1)"
      >
        &lt;
      </button>
      <button
        class="button is-small is-primary is-outlined ml-1"
        @click="calendarData(1)"
      >
        &gt;
      </button>
      <p style="padding-left: 16px">{{ year }}년 {{ month }}월</p>
      <!-- DialogModal: 일정추가버튼 -->
      <DialogModal />
    </h2>
    <!-- table 생성 (has-text-centered) -->
    <table class="table is-fullwidth">
      <thead>
        <th v-for="day in days" :key="day">{{ day }}</th>
      </thead>
      <tbody class="table is-bordered" style="height: 600px">
        <tr v-for="(date, idx) in dates" :key="idx">
          <td
            v-for="(day, secondIdx) in date"
            :key="secondIdx"
            :class="{
              'has-text-grey-light': idx === 0 && day >= lastMonthStart,
              'has-text-grey-lighter':
                dates.length - 1 === idx && nextMonthStart > day,
              'has-text-success':
                day === today && month === currentMonth && year === currentYear,
              'has-text-link': secondIdx === 6, // 토요일 텍스트 색상
              'has-text-danger': secondIdx === 0, // 일요일 텍스트 색상
            }"
          >
            {{ day }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
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

  // Calendar
  data() {
    return {
      days: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
      ],
      dates: [],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      lastMonthStart: 0,
      nextMonthStart: 0,
      today: 0,
    };
  },
  created() {
    // 데이터에 접근이 가능한 첫 번째 라이프 사이클
    const date = new Date();
    this.currentYear = date.getFullYear(); // 이하 현재 년, 월 가지고 있기
    this.currentMonth = date.getMonth() + 1;
    this.year = this.currentYear;
    this.month = this.currentMonth;
    this.today = date.getDate(); // 오늘 날짜
    this.calendarData();
  },
  methods: {
    calendarData(arg) {
      // 인자를 추가
      if (arg < 0) {
        // -1이 들어오면 지난 달 달력으로 이동
        this.month -= 1;
      } else if (arg === 1) {
        // 1이 들어오면 다음 달 달력으로 이동
        this.month += 1;
      }
      if (this.month === 0) {
        // 작년 12월
        this.year -= 1;
        this.month = 12;
      } else if (this.month > 12) {
        // 내년 1월
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
      const firstDay = new Date(year, month - 1, 1).getDay(); // 이번 달 시작 요일
      const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
      let lastYear = year;
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        lastYear -= 1;
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate(); // 지난 달 마지막 날짜
      return [firstDay, lastDate, prevLastDate];
    },
    getMonthOfDays(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      const dates = [];
      let weekOfDays = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          // 1일이 어느 요일인지에 따라 테이블에 그리기 위한 지난 셀의 날짜들을 구할 필요가 있다.
          for (let j = 0; j < monthFirstDay; j += 1) {
            if (j === 0) this.lastMonthStart = prevDay; // 지난 달에서 제일 작은 날짜
            weekOfDays.push(prevDay);
            prevDay += 1;
          }
        }
        weekOfDays.push(day);
        if (weekOfDays.length === 7) {
          // 일주일 채우면
          dates.push(weekOfDays);
          weekOfDays = []; // 초기화
        }
        day += 1;
      }
      const len = weekOfDays.length;
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k);
        }
      }
      if (weekOfDays.length > 0) dates.push(weekOfDays); // 남은 날짜 추가
      this.nextMonthStart = weekOfDays[0]; // 이번 달 마지막 주에서 제일 작은 날짜
      return dates;
    },
  },
};
</script>
