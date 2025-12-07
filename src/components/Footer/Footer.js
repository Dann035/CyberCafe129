import './Footer.css'

export const initFooter = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#footer-container')
  
  // 2. Construimos el contenido (HTML string)
  const content = `
    <footer class="footer-wrapper">
      <small>Copyright© 2025/small>
    </footer>
  `
  
  // 3. Lo inyectamos para que se renderice
  container.innerHTML = content
}