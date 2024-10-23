const sidebarSelectElement = document.querySelector('.sidebar__item_select');
const sidebarItemElements = document.querySelectorAll('.sidebar__item');
const sidebarListPositionsElement = document.querySelector('.sidebar__list_positions');
const calendarInputElement = document.querySelector('.catalog__input-calendar');
const calendarTemplateElement = document.getElementById('calendar');
const contentMainElement = document.querySelector('.content');

sidebarItemElements.forEach(element => {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebarItemElements.forEach(item => {
      item.classList.remove('sidebar__item_bold');
    });
    element.classList.add('sidebar__item_bold');
    if (sidebarSelectElement.classList.contains('sidebar__item_bold')) {
      sidebarListPositionsElement.style.display = 'block';
      sidebarSelectElement.classList.add('sidebar__item_select');
    } else {
      sidebarListPositionsElement.style.display = 'none';
      sidebarSelectElement.classList.remove('sidebar__item_select');
    }  
  });
});


calendarInputElement.addEventListener('click', () => {
  const calendarCloneElement = calendarTemplateElement.content.cloneNode(true);
  const calendarContainerElement = calendarCloneElement.firstElementChild; 
  calendarContainerElement.style.display = 'flex';
  contentMainElement.appendChild(calendarCloneElement);
});