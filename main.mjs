const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: "Go to the movie", done: true },
        { text: "Physical exercise", done: false },
        { text: "Playing videogames", done: true },
        { text: "Read a book", done: true },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
