import './MenuList.css' // ¡Vite permite importar CSS en JS!

export const initMenu = () => {
  // 1. Buscamos nuestro solar
  const container = document.querySelector('#menu-container')
  
  // 2. Construimos el contenido (HTML string)
  const content = `
    <div class="menu-wrapper">
      <h2>Nuestros Cafés</h2>
      <ul>
        <li>Café Cubano - $1.50</li>
        <li>Cortadito - $2.00</li>
      </ul>
    </div>
  `
  
  // 3. Lo inyectamos
  container.innerHTML = content
}