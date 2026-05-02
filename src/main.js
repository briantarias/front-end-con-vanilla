import './style.css'
import { home } from './views/home'
import { posts } from './views/posts'
import { todos } from './views/todos'
import { users } from './views/users'
import { about } from './views/about'

const app = document.querySelector('#app')

// menú
document.querySelector('#menu').innerHTML = `
  <button onclick="loadView('home')">Home</button>
  <button onclick="loadView('posts')">Posts</button>
  <button onclick="loadView('todos')">Todos</button>
  <button onclick="loadView('users')">Usuarios</button>
  <button onclick="loadView('about')">About</button>
`

window.loadView = (view) => {
  if (view === 'home') app.innerHTML = home()
  if (view === 'posts') posts(app)
  if (view === 'todos') todos(app)
  if (view === 'users') users(app)
  if (view === 'about') app.innerHTML = about()
}

// vista inicial
loadView('home')