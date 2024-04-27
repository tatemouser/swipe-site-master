document.addEventListener("DOMContentLoaded", function() {
    const daysSelect = document.getElementById('birthday-day');
    const monthsSelect = document.getElementById('birthday-month');
    const yearsSelect = document.getElementById('birthday-year');

    // Fill days, months, and years
    fillDays(monthsSelect.value, yearsSelect.value);
    fillMonths();
    fillYears();

    // Update days when month or year changes
    monthsSelect.addEventListener('change', function() {
        fillDays(monthsSelect.value, yearsSelect.value);
    });

    yearsSelect.addEventListener('change', function() {
        fillDays(monthsSelect.value, yearsSelect.value);
    });

    function fillDays(month, year) {
        // Clear current options
        daysSelect.innerHTML = '';

        // Get the number of days in the selected month
        const daysInMonth = new Date(year, month, 0).getDate();

        // Populate the days select element with options
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daysSelect.appendChild(option);
        }
    }

    function fillMonths() {
        // Populate months select element with options
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            monthsSelect.appendChild(option);
        }
    }

    function fillYears() {
        // Get the current year
        const currentYear = new Date().getFullYear();

        // Populate years select element with options from current year to 100 years ago
        for (let i = currentYear; i >= currentYear - 100; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearsSelect.appendChild(option);
        }
    }
});
