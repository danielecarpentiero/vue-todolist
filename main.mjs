const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: "Go to the movie", done: false },
        { text: "Physical exercise", done: true },
        { text: "Playing videogames", done: false },
        { text: "Read a book", done: false },
      ],
      newTaskText: "",
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTaskText.trim() !== "") {
        this.tasks.push({ text: this.newTaskText, done: false });
        this.newTaskText = "";
      }
    },
  },
}).mount("#app");
