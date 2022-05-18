// Global DOM Elements
const mainContentDiv = document.querySelector('.main-content');
const headerDiv = document.querySelector('.header');
const sidebarDiv = document.querySelector('.sidebar');
const tabsDiv = document.querySelector('.tabs');

const updatePracticeButton = document.getElementById('update-practice-btn')
const addGoalButton = document.getElementById('add-goal-btn')

const dailyPracticeTab = document.getElementById('practice-tab');
const shortTermGoalsTab = document.getElementById('short-term-tab');
const longTermGoalsTab = document.getElementById('long-term-tab');

let dailyPracticeGoals = [];
let shortTermGoals = [];
let longTermGoals = [];

const date = new Date();

//////////////////////////////
// Goal factory functions ////
//////////////////////////////

const dailyPractice = (heading, description, time) => {
    return { heading, description, time };
};

const shortTermGoal = (title, description, dueDate) => {
    return { title, description, dueDate };
};

const longTermGoal = (title, description) => {
    return { title, description };
};

// Display controller handles adding elements to, and removing 
// elements from, the DOM
const displayController = (() => {
    const clearMainContent = () => {
        while (mainContentDiv.firstChild) {
            mainContentDiv.removeChild(mainContentDiv.firstChild);
        };
    };

    const clearSidebar = () => {
        while (sidebarDiv.firstChild) {
            sidebarDiv.removeChild(sidebarDiv.firstChild);
        };
    };

    const displayPracticeSidebar = () => {

    };

    const drawGoalCard = () => {
        // TODO
    };

    // Hilights current tab while un-hilighting other tabs
    const hiLightTab = (currentTab) => {
        if (!currentTab){
            document.querySelector('.tab-hilight').remove('tab-hilight');
            return;
        };
        if (document.querySelector('.tab-hilight')) {
            document.querySelector('.tab-hilight').classList.remove('tab-hilight');
            currentTab.classList.add('tab-hilight');
        };
    }

    return {clearMainContent, clearSidebar, drawGoalCard, hiLightTab};

})();


const formController = (() => {
    const displayAddPracticeForm = () => {
        const addPracticeForm = document.createElement('form');
        const sidebarRight = document.createElement('div');

        const headingFieldLabel = document.createElement('label');
        const descriptionFieldLabel = document.createElement('label');
        const timeFieldLabel = document.createElement('label');

        const headingField = document.createElement('input');
        const descriptionField = document.createElement('input');
        const timeField = document.createElement('input');

        const practiceFormInstructions = document.createElement('p');

        practiceFormInstructions.textContent = "This is where you can add items to, or remove items from, your daily practice routine. Under 'heading' you should put what type of practice the item is (i.e. warmup, technique, repertoire, etc.). Under 'description', you can be more specific about what to practice for that section. Finally, under 'time' you should put the time, in minutes, that you are expected to spend on that practice section."

        headingFieldLabel.textContent ='Heading';
        descriptionFieldLabel.textContent = 'Description';
        timeFieldLabel.textContent = 'Time';

        timeField.setAttribute('type', 'number');
        sidebarRight.classList.add('sidebar-right');


        mainContentDiv.appendChild(addPracticeForm);
        mainContentDiv.appendChild(sidebarRight);
        addPracticeForm.appendChild(headingFieldLabel);
        addPracticeForm.appendChild(headingField);
        addPracticeForm.appendChild(descriptionFieldLabel);
        addPracticeForm.appendChild(descriptionField);
        addPracticeForm.appendChild(timeFieldLabel);
        addPracticeForm.appendChild(timeField);

        mainContentDiv.appendChild(practiceFormInstructions);


    };

    return { displayAddPracticeForm };
})();

///////////////////////////////////
////// Event Listeners for Tabs ///
///////////////////////////////////

dailyPracticeTab.addEventListener('click', () => {
    let day = date.getDay();
    let dayNo = date.getDate();
    let month = date.getMonth();
    // Convert number day to string day
    switch(day) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    };

    // Convert number month to string month
    switch(month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    };
    displayController.clearMainContent();
    displayController.hiLightTab(dailyPracticeTab);

    const practiceGreeting = document.createElement('div')
    
    practiceGreeting.classList.add('practice-greeting');

    practiceGreeting.textContent = `Practice session for ${day}, ${month} ${dayNo}`;

    mainContentDiv.appendChild(practiceGreeting);


});

shortTermGoalsTab.addEventListener('click', () => {
    displayController.clearMainContent();
    displayController.hiLightTab(shortTermGoalsTab);
});

longTermGoalsTab.addEventListener('click', () => {
    displayController.clearMainContent();
    displayController.hiLightTab(longTermGoalsTab);
});

//////////////////////////////////////
////// Event Listeners for Buttons ///
//////////////////////////////////////

updatePracticeButton.addEventListener('click', () => {
    displayController.clearMainContent();
    displayController.hiLightTab('none');

    formController.displayAddPracticeForm();

    // Displays the 'update practice form'



});


addGoalButton.addEventListener('click', () => { 
    displayController.clearMainContent();

});