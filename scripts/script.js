const sidebarSelectElement = document.querySelector('.sidebar__item_select');
const sidebarItemElements = document.querySelectorAll('.sidebar__item');
const sidebarListPositionsElement = document.querySelector('.sidebar__list_positions');
const calendarInputElement = document.querySelector('.catalog__input-calendar');
const calendarTemplateElement = document.getElementById('calendar');
const contentMainElement = document.querySelector('.content');
const calendarCloneElement = calendarTemplateElement.content.cloneNode(true);
const calendarContainerElement = calendarCloneElement.firstElementChild;
let startDate = null;
let endDate = null;
let isPeriodSelected = false; 


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
  calendarContainerElement.style.display = 'flex';
  contentMainElement.appendChild(calendarCloneElement);

  const buttonCalendarCancelElement = document.querySelector('.calendar__btn-cancel');
  const buttonCalendarApplyElement = document.querySelector('.calendar__btn-apply');

  const onCloseCalendarPopup = () => {
    calendarContainerElement.style.display = 'none';
    startDate = null;
    endDate = null;
    isPeriodSelected = false;
  };

  buttonCalendarCancelElement.addEventListener('click', onCloseCalendarPopup);

  const calendarsElements = document.querySelectorAll('.calendar__table');

  calendarsElements.forEach(calendar => {
      calendar.addEventListener('click', (event) => {
        if (event.target.tagName === 'TD') {
          if (isPeriodSelected) {
            alert('Вы уже выбрали период. Можно закрыть календарь и открыть его снова для нового выбора.');
            return;
          }

          const selectedDay = parseInt(event.target.textContent);
          const monthHeader = calendar.querySelector('.calendar__header').textContent.trim();
          const [month, year] = monthHeader.split(" ");
          const months = [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
          ];

          const monthNumber = months.indexOf(month);
            if (monthNumber === -1) {
                return;
            }

          const selectedDate = new Date(`${year}-${monthNumber + 1}-${selectedDay}`);
          console.log(`Выбранная дата: ${selectedDate.toLocaleDateString()}`);

          if (!startDate) {
            startDate = selectedDate;
            event.target.classList.add('selected');
          } else if (!endDate) {
            endDate = selectedDate;
            event.target.classList.add('selected');
            console.log(`Выбранный период: с ${startDate.toLocaleDateString()} по ${endDate.toLocaleDateString()}`);
            isPeriodSelected = true;

            buttonCalendarApplyElement.addEventListener('click', () => {
              onCloseCalendarPopup();
            }, { once: true });

            startDate = null;
            endDate = null;
          }
        }
      });
  });
});
