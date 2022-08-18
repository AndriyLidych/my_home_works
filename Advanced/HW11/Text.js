function getRandomColor(value = 256) {
    const randomColor = Math.random() * value;
    return randomColor;
}

function changeColor() {
    document.querySelectorAll('.box').forEach(element => {
        element.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    });
}

let timer = setTimeout(function time() {
    let i =changeColor();
    
    timer = setTimeout(time, 1000);
  }, 1000);


    