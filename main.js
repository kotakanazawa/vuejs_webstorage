'use strict'

const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: ''
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch (err) {
        localStorage.removeItem('todos')
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return
      this.todos.push(this.newTodo)
      this.newTodo = ''
      this.saveTodo()
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
      this.saveTodo()
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todos)
      localStorage.setItem('todos', parsed)
    }
  }
})
