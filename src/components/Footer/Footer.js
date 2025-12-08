import './Footer.css'
import FooterHTML from './Footer.html?raw'

// Esto es la function que se renderiza en el html
export const initFooter = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#footer-container')
  if (container){
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = FooterHTML
  }
}

// TU CÓDIGO APARTIR DE AQUÍ