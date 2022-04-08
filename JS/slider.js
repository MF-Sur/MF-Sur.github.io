(function () {
    const sliders = [...document.querySelectorAll('.slider_body')];
    // primero obtengo todos los sliders
    console.log(sliders);
    // sin los corchetes en la consola me mo¿uestra los 3 nodos que tiene a las clases .slider_body, pero con corchetes esto es un array dinámico

    const arrowAfter = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value;
    // obtengo los botones after y befores (las flechas) y creo una variable que se llama value



    arrowAfter.addEventListener('click', () => changePosition(1))
    arrowBefore.addEventListener('click', () => changePosition(-1))
    // agrego el evento click a las imágens after y before, entonces cada vez que doy click a la imágen llamo al m étodo changePosition y si es para after se sumo uno pero si es para before le restos uno 


    function changePosition (change) {
        const currentElement = Number(document.querySelector('.slider_body-show').dataset.id)
        // console.log(change);

        value = currentElement;
        value += change;
        
        console.log(sliders.length)

        if (value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement -1].classList.toggle('slider_body-show');
        sliders[value -1].classList.toggle('slider_body-show');
        // toggle le quita la clase alelemento actal y se la pone al siguiente. EN resumen si tiene la clase seleccionada la quita y si no la tiene se la da
    }






}) ()


//  (function () {
    const sliders2 = [...document.querySelectorAll('.slider_body2')];
    // primero obtengo todos los sliders
    console.log(sliders2);
    // sin los corchetes en la consola me mo¿uestra los 3 nodos que tiene a las clases .slider_body, pero con corchetes esto es un array dinámico

    const arrowAfter = document.querySelector('#after2');
    const arrowBefore = document.querySelector('#before2');
    let value;
    // obtengo los botones after y befores (las flechas) y creo una variable que se llama value



    arrowAfter.addEventListener('click', () => changePosition(1))
    arrowBefore.addEventListener('click', () => changePosition(-1))
    // agrego el evento click a las imágens after y before, entonces cada vez que doy click a la imágen llamo al m étodo changePosition y si es para after se sumo uno pero si es para before le restos uno 


    function changePosition (change) {
        const currentElement = Number(document.querySelector('.slider_body-shows').dataset.id)
        // console.log(change);

        value = currentElement;
        value += change;
        
        console.log(sliders2.length)

        if (value === 0 || value == sliders2.length+1) {
            value = value === 0 ? sliders2.length : 1;
        }

        sliders2[currentElement -1].classList.toggle('slider_body-shows');
        sliders2[value -1].classList.toggle('slider_body-shows');
        // toggle le quita la clase alelemento actal y se la pone al siguiente. EN resumen si tiene la clase seleccionada la quita y si no la tiene se la da
    }

// }) ()





