<template>
  <div class="m-auto">
    <h3 class="text-2xl my-5 text-center">vue calendar</h3>

    <section class="mx-4 my-3">
      <h2 class="font-bold">{{ currentmonthname }} {{ currentyear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="h-10 text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="h-10 text-center"
        style="width: 14.28%"
        v-for="num in startday()"
        :key="num"
      ></p>
      <p
        class="h-10 text-center"
        style="width: 14.28%"
        v-for="num in daysinmonths()"
        :key="num"
        :class="currentdateclass(num)"
      >
        {{ num }}
      </p>
    </section>

    <section class="my-4 flex justify-between">
      <button
        class="font-bold p-2 border border-green-500 rounded"
        @click="prev()"
      >
        prev
      </button>
      <button
        class="font-bold p-2 border border-red-500 rounded"
        @click="next()"
      >
        next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // currentmonthname:new Date().toLocaleString('default', { month: 'long' }),
      currentmonth: new Date().getMonth() + 1,
      currentyear: new Date().getFullYear(),
      currentdate: new Date().getDate(),
      days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    };
  },
  methods: {
    daysinmonths() {
      return new Date(this.currentyear, this.currentmonth, 0).getDate();
    },

    startday() {
      return new Date(this.currentyear, this.currentmonth - 1, 1).getDay();
    },
    next() {
      if (this.currentmonth == 11) {
        return (this.currentmonth = 1), this.currentyear++;
      }
      return this.currentmonth++;
    },
    prev() {
      if (this.currentmonth == 1) {
        return (this.currentmonth = 12), this.currentyear--;
      }
      return this.currentmonth--;
    },
    currentdateclass(num) {
      const calanderfulldate = new Date(
        this.currentyear,
        this.currentmonth - 1,
        num
      ).toDateString();
      const currentfulldate = new Date().toDateString();
      return calanderfulldate == currentfulldate ? "text-green-600" : "";
    },
  },
  computed: {
    currentmonthname() {
      return new Date(this.currentyear, this.currentmonth - 1).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style>
</style>