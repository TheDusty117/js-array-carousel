console.log('funziono')

// MACRO OBJECTIVE: far si che AL CLICK della chevron, la classe active(ovvero quella che rende block immagine)
// si sposti sull' immagine seguente in modo tale da poter cambiare immagine a mio piacimento,
// ovviamente dovro' far la cosa inversa sulla chevron che va all'indietro


// 1 creare un array delle immagini, in modo tale da potermi muovere tra questi elementi

const slides = [
  "./img/image1.0.jpg",
  "./img/image2.0.jpg",
  "./img/image3.0.jpg",
  "./img/image4.0.jpg",
  "./img/image5.0.jpg",
]
console.log(slides)

//definisco il punto di partenza tra le slides, ovvero la 0, quindi la prima dove si trova la classe ACTIVE

let iActiveSlide = 0

//2 occorre prendere dal DOM gli elementi che dovranno interagire, quindi le varie slides con immagini
//e prendere le due chevron, su queste ultime dovro' dargli un event listener, che al click mi faranno
//compiere un'azione.

const slideElements = document.getElementsByClassName('slide') //prendo tutti gli elementi con classe slide.

const leftBtnElement = document.querySelector('.arrow-left')

const rightBtnElement = document.querySelector('.arrow-right')

console.log(slideElements)
console.log(leftBtnElement, rightBtnElement)

// FUNZIONALITA' AL CLICK DEL BOTTONE DESTRO (PER ANDARE AVANTI)

//NB per poter dare un event listener a quanto pare devo usare solo un querySelector per prendere la
//classe giusta dell'elemento HTML
rightBtnElement.addEventListener('click', function() {
  console.log('slide attuale', iActiveSlide)

  //dichiaro che currentSlide = a slideElements con indice di valore iActiveSlide ovvero 0------
  let currentSlide = slideElements[iActiveSlide]
  
  // togliere la classe active dalla prima slide
  currentSlide.classList.remove('active')

  //incrementare indice per farla passare alla prossima
  iActiveSlide += 1

  //dichiaro che nextSlide = a slideElements[iActiveSlide] e verra' aggiunto incremento qui sopra ad iActiveSlide,
  //che aumentera' ogni volta al click di 1 facendo scorrere le immagini

  let nextSlide = slideElements[iActiveSlide]

  //aggiungere la classe active tolta in precedenza -vedi su- remove

  nextSlide.classList.add('active')
})