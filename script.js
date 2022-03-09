let head = document.getElementById('heading');
let buttonId = document.getElementById('button');

const random = () => {
    return Math.floor(Math.random() * 101)
}

buttonId.addEventListener('click', function () {
    heading.textContent = random();
});
