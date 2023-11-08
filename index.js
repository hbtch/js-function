// Получаем элементы слайдера
const img = document.querySelector('.image')
console.log(img);
const nextBtn = () => {
img.src = "assets/images/dog-tw.jpg";
console.log(nextBtn)
};

const prevBtn = () => {
img.src = "assets/images/dog-one.jpg";
}

