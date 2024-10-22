const sidebarSelectElement = document.querySelector('.sidebar__item_select');
const sidebarListPositionsElement = document.querySelector('.sidebar__list_positions');

/**
 * Функция для открытия/закрытия списка в сайдбаре
 */
const onOpenSidebarList = (event) => {
  event.stopPropagation();
  sidebarSelectElement.classList.toggle('sidebar__item_bold');
  if (sidebarSelectElement.classList.contains('sidebar__item_bold')) {
    sidebarListPositionsElement.style.display = 'block';
  } else {
    sidebarListPositionsElement.style.display = 'none';
  }
};
sidebarSelectElement.addEventListener('click', onOpenSidebarList);