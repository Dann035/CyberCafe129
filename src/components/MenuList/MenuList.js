import './MenuList.css'
import MenuHTML from './MenuList.html?raw'

// Esto es la function que se renderiza en el html
export const initMenu = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#menu-container')
  if (container){
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = MenuHTML
  }
}

// TU CÓDIGO APARTIR DE AQUÍ