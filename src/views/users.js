import { getData } from '../services/fetch'

export function users(app) {
  getData('https://jsonplaceholder.typicode.com/users')
    .then(data => {
      const rows = data.map(u => `
        <tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.address.city}</td>
        </tr>
      `).join('')

      app.innerHTML = `
        <h2>Usuarios</h2>
        <table>
          <tr><th>ID</th><th>Nombre</th><th>Email</th><th>Ciudad</th></tr>
          ${rows}
        </table>
      `
    })
}