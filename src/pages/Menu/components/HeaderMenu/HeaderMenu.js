import './HeaderMenu.css'
import HeaderMenuHTML from './HeaderMenu.html?raw'

// Esto es la function que se renderiza en el html
export const initHeaderMenu = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.getElementById('headermenu-container')
  if ( container ) { // 2. Comprobamos si en container hay algo
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = HeaderMenuHTML
  }
}