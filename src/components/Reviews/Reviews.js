import './Reviews.css'
import ReviewsHTML from './Reviews.html?raw'

// Esto es la function que se renderiza en el html
export const initReviews = () => {
  // 1. Buscamos nuestro elemento html
  const container = document.getElementById('reviews-container')
  if ( container ) { // 2. Comprobamos si en container hay algo
    // 3. Lo inyectamos para que se renderice
    container.innerHTML = ReviewsHTML
  }
}