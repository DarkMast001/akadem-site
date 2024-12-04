const galleryContainer = document.querySelector('.gallery_container');

galleryContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // Предотвращаем вертикальную прокрутку
    galleryContainer.scrollBy({
        left: e.deltaY < 0 ? -300 : 300, // Прокрутка влево/вправо
        behavior: 'smooth'
    });
});

let touchStartX = 0; // Начальная позиция X
let touchEndX = 0; // Конечная позиция X
const swipeSensitivity = 1; // Чувствительность свайпа (чем меньше значение, тем медленнее прокрутка)

galleryContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX; // Запоминаем начальную точку касания
});

galleryContainer.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX; // Обновляем конечную точку
    const difference = (touchStartX - touchEndX) * swipeSensitivity; // Учитываем чувствительность
    galleryContainer.scrollBy({
        left: difference, // Прокручиваем в зависимости от направления свайпа
        behavior: 'auto' // Плавность отключаем, чтобы не накапливать задержки
    });
    touchStartX = touchEndX; // Обновляем начальную точку для последовательного свайпа
});