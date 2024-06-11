function startProgress() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;

    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width = 80;
            // width++;
            progressBar.style.width = width + '%';
            progressBar.innerHTML = width + '%';
        }
    }, 100);
}

function renderCalendar(containerId) {
    const calendarContainer = document.getElementById(containerId);
  
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonthIndex = currentDate.getMonth();
  
    function renderCalendarMarkup(year, month) {
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const prevMonthDays = new Date(year, month, 0).getDate();
  
      let calendarHTML = `<div class="calendar-header">
                            <button id="prevMonthBtn">&lt;</button>
                            <h2 id="currentMonth">${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                            <button id="nextMonthBtn">&gt;</button>
                          </div>
                          <div class="calendar-body">`;
  
      for (let i = firstDayOfMonth; i > 0; i--) {
        calendarHTML += `<div class="calendar-day prev-month">${prevMonthDays - i + 1}</div>`;
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        calendarHTML += `<div class="calendar-day">${i}</div>`;
      }
  
      calendarHTML += `</div>`;
  
      calendarContainer.innerHTML = calendarHTML;
    }
  
    renderCalendarMarkup(currentYear, currentMonthIndex);
  
    document.addEventListener("click", function(event) {
      if (event.target.id === "prevMonthBtn") {
        currentMonthIndex--;
        if (currentMonthIndex < 0) {
          currentMonthIndex = 11;
          currentYear--;
        }
        renderCalendarMarkup(currentYear, currentMonthIndex);
      } else if (event.target.id === "nextMonthBtn") {
        currentMonthIndex++;
        if (currentMonthIndex > 11) {
          currentMonthIndex = 0;
          currentYear++;
        }
        renderCalendarMarkup(currentYear, currentMonthIndex);
      }
    });
  }
  
  // Call the renderCalendar function with the container ID where you want to render the calendar
  renderCalendar("calendarContainer");