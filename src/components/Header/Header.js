import './Header.css'

export const initHeader = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#header-container')
  
  // 2. Construimos el contenido (HTML string)
  const content = `
    <nav class="nav navbar navbar-wrapper">
      <h1>Cyber Café</h1>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </nav>
  `
  
  // 3. Lo inyectamos para que se renderice
  container.innerHTML = content
}