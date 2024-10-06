
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

// Получаем элементы кнопки и мобильного меню
const menuToggle = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-mobile-menu');

// Функция для открытия мобильного меню
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open'); // Добавляем/удаляем класс 'open' для мобильного меню
});

// Закрытие мобильного меню при нажатии на кнопку закрытия
closeMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('open'); // Убираем класс 'open'
});

    // Получаем элементы кнопок и карточек
const projectsBtn = document.getElementById('projects-btn');
const intensivesBtn = document.getElementById('intensives-btn');
const projectsCards = document.getElementById('projects-cards');
const intensivesCards = document.getElementById('intensives-cards');

// Функция для переключения на интенсивы
intensivesBtn.addEventListener('click', () => {
    projectsCards.style.display = 'none';
    intensivesCards.style.display = 'grid';
    intensivesBtn.classList.add('active');
    projectsBtn.classList.remove('active');
});

// Функция для переключения на проекты
projectsBtn.addEventListener('click', () => {
    intensivesCards.style.display = 'none';
    projectsCards.style.display = 'grid';
    projectsBtn.classList.add('active');
    intensivesBtn.classList.remove('active');
});




