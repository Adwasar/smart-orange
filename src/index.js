import './index.html';
import './scss/main.scss';

const headerNavItems = document.querySelectorAll('.header__nav-item');
const clearHeaderNavItemsClasses = () => {
  headerNavItems.forEach((item) => {
    item.classList.remove('header__nav-item_active');
  });
};

headerNavItems.forEach((item) =>
  item.addEventListener('click', () => {
    clearHeaderNavItemsClasses();
    item.classList.add('header__nav-item_active');
  }),
);
