document.addEventListener("DOMContentLoaded", function() {
    const daysSelect = document.getElementById('birthday-day');
    const monthsSelect = document.getElementById('birthday-month');
    const yearsSelect = document.getElementById('birthday-year');

    createPlaceholderOption(daysSelect, 'Day');
    createPlaceholderOption(monthsSelect, 'Month');
    createPlaceholderOption(yearsSelect, 'Year');

    fillDays(monthsSelect.value, yearsSelect.value);
    fillMonths();
    fillYears();

    monthsSelect.addEventListener('change', updateDays);
    yearsSelect.addEventListener('change', updateDays);

    function createPlaceholderOption(selectElement, text) {
        const placeholderOption = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = text;
        selectElement.appendChild(placeholderOption);
    }

    function fillDays(month, year) {
        // Store the currently selected day
        const selectedDay = daysSelect.value;
    
        // Clear current options
        daysSelect.innerHTML = '';
    
        // Add the placeholder option "Day" as the first choice
        createPlaceholderOption(daysSelect, 'Day');
    
        // Get the number of days in the selected month
        const daysInMonth = new Date(year, month, 0).getDate();
    
        // Populate the days select element with options
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daysSelect.appendChild(option);
        }
    
        // Set the previously selected day if it still exists in the new options
        if (selectedDay && selectedDay <= daysInMonth) {
            daysSelect.value = selectedDay;
        }
    }
    

    function fillMonths() {
        // Array of month names
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        // Populate months select element with options
        for (let i = 0; i < 12; i++) {
            const option = document.createElement('option');
            option.value = i + 1; // Months are 1-indexed in JavaScript
            option.textContent = monthNames[i];
            monthsSelect.appendChild(option);
        }
    }
    

    function fillYears() {
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 100; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearsSelect.appendChild(option);
        }
    }

    function updateDays() {
        fillDays(monthsSelect.value, yearsSelect.value);
    }
});
