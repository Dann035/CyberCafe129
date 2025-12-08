import './Header.css'
import HeaderHTML from './Header.html?raw'

// Esto es la function que se renderiza en el html
export const initHeader = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#header-container')
  if (container){
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = HeaderHTML
  }
}

// TU CÓDIGO APARTIR DE AQUÍ