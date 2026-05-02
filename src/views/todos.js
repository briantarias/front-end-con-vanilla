import { getData } from '../services/fetch'

export function todos(app) {
  getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
      const rows = data.map(t => `
        <tr>
          <td>${t.id}</td>
          <td>${t.title}</td>
          <td>${t.completed ? 'O' : 'X'}</td>
        </tr>
      `).join('')

      app.innerHTML = `
        <h2>Todos</h2>
        <table>
          <tr><th>ID</th><th>Tarea</th><th>Estado</th></tr>
          ${rows}
        </table>
      `
    })
}