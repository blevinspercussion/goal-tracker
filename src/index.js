// Global variables
const practiceTab = document.getElementById('practice-tab');
const shortTermTab = document.getElementById('short-term-tab');
const longTermTab = document.getElementById('long-term-tab');

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Global functions
function clearMainContent() {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    };
};

function clearSidebar() {
    while (sidebar.firstChild) {
        sidebar.removeChild(sidebar.firstChild);
    };
};



//Event listeners
practiceTab.addEventListener('click', () => {

    clearMainContent();
    clearSidebar();

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysDiv = document.createElement('div');
    const daysList = document.createElement('ul');
    const daysWelcomeDiv = document.createElement('div');
    const daysWelcomeText = document.createElement('p');
    const addPracticeButton = document.createElement('button');


    daysDiv.setAttribute('id', 'days-div');
    daysList.setAttribute('id', 'days-list');
    daysWelcomeDiv.classList.add('welcome');
    
    sidebar.appendChild(daysDiv);
    daysDiv.appendChild(daysList);
    sidebar.appendChild(addPracticeButton);

    mainContent.appendChild(daysWelcomeDiv);
    daysWelcomeDiv.appendChild(daysWelcomeText);


    daysWelcomeText.textContent = 'Click on a day at the left to view your practice goals for that day.';
    addPracticeButton.textContent = 'Add Practice';

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

