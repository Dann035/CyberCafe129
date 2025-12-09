import './CafeMenu.css'
import CafeHTML from './CafeMenu.html?raw'

// Esto es la function que se renderiza en el html
export const initCafeMenu = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.getElementById('cafemenu-container')
  if ( container ) { // 2. Comprobamos si en container hay algo
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = CafeHTML
  }
}