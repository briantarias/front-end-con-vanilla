import { getData } from '../services/fetch'

export function posts(app) {
  getData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      const rows = data.map(p => `
        <tr>
          <td>${p.id}</td>
          <td>${p.title}</td>
          <td>${p.body}</td>
        </tr>
      `).join('')

      app.innerHTML = `
        <h2>Posts</h2>
        <table>
          <tr><th>ID</th><th>Título</th><th>Contenido</th></tr>
          ${rows}
        </table>
      `
    })
}