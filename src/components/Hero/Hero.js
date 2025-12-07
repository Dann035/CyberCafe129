import './Hero.css'

export const initHero = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.querySelector('#hero-container')
  
  // 2. Construimos el contenido (HTML string)
  const content = `
    <section class="hero-wrapper">
      <img src="https://placehold.co/400x400" alt="imagen del hero"/>
    </section>
  `
  
  // 3. Lo inyectamos para que se renderice
  container.innerHTML = content
}