let counter = 0;

document.getElementById('increment').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('decrement').addEventListener('click', function() {
    counter--;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('reset').addEventListener('click', function() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
});
