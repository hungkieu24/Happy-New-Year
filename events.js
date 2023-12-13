var board = document.querySelector('.board');

for (var i = 0; i < 200; i++) {
    var square = document.createElement('div');
    square.classList.add('square');

    board.appendChild(square);

    square.addEventListener('mouseenter', function(e) {
        let color =randomColor();
        let el = e.currentTarget;
        el.style.background = color;
        el.style.boxShadow = `0 0 30px ${color}, 0 0 30px ${color}`;
    });
    square.addEventListener('mouseleave', function(e) {
        let el = e.currentTarget;
        el.style.background = 'linear-gradient(to left, #900C3F, #C70039)';
        el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    });
}

function randomColor() {

    var charColor = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)];
    }

    return color;
}