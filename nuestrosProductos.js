document.addEventListener('DOMContentLoaded', function () {

    let imagenes = [{
            img: '/imagenes/Productos/1.jpg'
        },
        {
            img: '/imagenes/Productos/2.jpg'
        },
        {
            img: '/imagenes/Productos/3.jpg'
        },
        {
            img: '/imagenes/Productos/4.jpg'
        },
        {
            img: '/imagenes/Productos/5.jpg'
        },
        {
            img: '/imagenes/Productos/6.jpg'
        },
        {
            img: '/imagenes/Productos/7.jpg'
        },
        {
            img: '/imagenes/Productos/8.jpg'
        },
        {
            img: '/imagenes/Productos/9.jpg'
        },
        {
            img: '/imagenes/Productos/10.jpg'
        },
        {
            img: '/imagenes/Productos/11.jpg'
        },
        {
            img: '/imagenes/Productos/12.jpg'
        },
        {
            img: '/imagenes/Productos/13.jpg'
        },
        {
            img: '/imagenes/Productos/14.jpg'
        },
        {
            img: '/imagenes/Productos/15.jpg'
        },
        {
            img: '/imagenes/Productos/16.jpg'
        },
        {
            img: '/imagenes/Productos/17.jpg'
        },
        {
            img: '/imagenes/Productos/18.jpg'
        },
        {
            img: '/imagenes/Productos/19.jpg'
        },
        {
            img: '/imagenes/Productos/20.jpg'
        },
        {
            img: '/imagenes/Productos/21.png'
        },
        {
            img: '/imagenes/Productos/22.jpg'
        },
        {
            img: '/imagenes/Productos/23.jpg'
        },
        {
            img: '/imagenes/Productos/24.jpg'
        },
        {
            img: '/imagenes/Productos/25.jpg'
        }
    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('slideshow img')

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }

        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }


    })

Array.from(galeria_imagenes).forEach(img =>{
img.addEventListener('click', Event =>{
const imagen_seleccionada = +Event.target.dataset.imgMostrar
img_slideshow.src = imagenes[imagen_seleccionada].img
contador = imagen_seleccionada
overlay.style.opacity = 1
overlay.style.visibility = 'visible'
})
})
})