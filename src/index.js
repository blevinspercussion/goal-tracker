// Global variables
const practiceTab = document.getElementById('practice-tab');
const shortTermTab = document.getElementById('short-term-tab');
const longTermTab = document.getElementById('long-term-tab');

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');



//Event listeners
practiceTab.addEventListener('click', () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysDiv = document.createElement('div');
    const daysList = document.createElement('ul');

    daysDiv.setAttribute('id', 'days-div');
    daysList.setAttribute('id', 'days-list');

    sidebar.appendChild(daysDiv);
    daysDiv.appendChild(daysList);

    for (let day in days) {
        let dayItem = document.createElement('li');
        dayItem.textContent = `${days[day]}`;
        dayItem.classList.add('days-list-item');
        daysList.appendChild(dayItem);
    }


});


// Factory function for goals
// Needs title, description, dueDate, type (daily, short term, long-term), time (if daily)

const dailyGoal = (title, description, type='daily', time) => {
    return {title, type, time};
};

const shortTermGoal = (title, description, type='short term', dueDate) => {
    return {title, description, type, dueDate};
};

const longTermGoal = (title, description, type='long term') => {
    return {title, description, type};
};



// Function for Daily Practice 

