import './Hero.css'
import HeroHTML from './Hero.html?raw'

// Esto es la function que se renderiza en el html
export const initHero = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#hero-container')
  if (container){
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = HeroHTML
  }
}

// TU CÓDIGO APARTIR DE AQUÍ