import './PanMenu.css'
import PanHTML from './PanMenu.html?raw'

// Esto es la function que se renderiza en el html
export const initPanMenu = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.getElementById('panmenu-container')
  if ( container ) { // 2. Comprobamos si en container hay algo
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = PanHTML
  }
}