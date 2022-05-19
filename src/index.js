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

const goal = (type, title, dueDate) => {
    return { type, title, dueDate };
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

    const clearSidebarRight = () => {
        while (sidebarRight.firstChild) {
            sidebarRight.removeChild(sidebarRight.firstChild);
        };
    };

    const clearDiv = (div) => {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    };


    const displayDailyPracticeCards = (div) => {
        for (let goal in dailyPracticeGoals) {
            let goalCard = document.createElement('div');
            let goalHeading = document.createElement('h1');
            let goalList = document.createElement('ul');
            let goalDescription = document.createElement('li')
            let goalTime = document.createElement('li');

            goalCard.classList.add('goal-card');

            goalHeading.textContent = `${dailyPracticeGoals[goal].heading}`;
            goalDescription.textContent = `${dailyPracticeGoals[goal].description}`;
            goalTime.textContent = `${dailyPracticeGoals[goal].time} minutes`;

            div.appendChild(goalCard);
            goalCard.appendChild(goalHeading);
            goalCard.appendChild(goalDescription);
            goalCard.appendChild(goalTime);

        };
    };

    // const displayPracticeSession = () => {
    //     for (let goal in dailyPracticeGoals) {

    //     }
    // };

    return {clearMainContent, clearSidebar, displayDailyPracticeCards, clearDiv, clearSidebarRight};

})();


const formController = (() => {
    const displayAddPracticeForm = () => {
        const addPracticeForm = document.createElement('form');
        addPracticeForm.setAttribute('onsubmit', 'return false'); // Prevents page from reloading when form submitted
        let sidebarRight = document.createElement('div');

        const headingFieldLabel = document.createElement('label');
        const descriptionFieldLabel = document.createElement('label');
        const timeFieldLabel = document.createElement('label');

        const headingField = document.createElement('input');
        const descriptionField = document.createElement('input');
        const timeField = document.createElement('input');

        const submitBtn = document.createElement('button');
        const resetPracticeBtn = document.createElement('button');

        const practiceFormInstructions = document.createElement('p');

        practiceFormInstructions.textContent = "*This is where you can add items to, or remove items from, your daily practice routine. Under 'heading' you should put what type of practice the item is (i.e. warmup, technique, repertoire, etc.). Under 'description', you can be more specific about what to practice for that section. Finally, under 'time' you should put the time, in minutes, that you are expected to spend on that practice section."

        headingFieldLabel.textContent ='Heading';
        descriptionFieldLabel.textContent = 'Description';
        timeFieldLabel.textContent = 'Time';
        submitBtn.textContent = 'Add to Practice';
        resetPracticeBtn.textContent = 'Reset Practice Routine';

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
        addPracticeForm.appendChild(submitBtn);
        addPracticeForm.appendChild(resetPracticeBtn);
        addPracticeForm.appendChild(practiceFormInstructions);


        submitBtn.addEventListener('click', () => {
            displayController.clearDiv(sidebarRight);
            let practice = dailyPractice(headingField.value, descriptionField.value, timeField.value);
            dailyPracticeGoals.push(practice);
            displayController.displayDailyPracticeCards(sidebarRight);
        });

        resetPracticeBtn.addEventListener('click', () => {
            displayController.clearDiv(sidebarRight);
            dailyPracticeGoals = [];
        });

        displayController.displayDailyPracticeCards(sidebarRight);


    };

    const displayAddGoalForm = () => {
        const addGoalForm = document.createElement('form');
        addGoalForm.setAttribute('onsubmit', 'return false'); // Prevents page from reloading on form submit
        let sidebarRight = document.createElement('div')

        const typeFieldLabel = document.createElement('label');
        const titleFieldLabel = document.createElement('label');
        const dueFieldLabel = document.createElement('label');

        const typeField = document.createElement('select');
        const optionShort = document.createElement('option');
        const optionLong = document.createElement('option');
        const titleField = document.createElement('input');
        const dueField = document.createElement('input');

        const submitBtn = document.createElement('button');

        const goalFormInstructions = document.createElement('p');

        goalFormInstructions.textContent = "*This form is for adding your long term and short term goals. Short term goals are goals that you should plan on completing in a matter of weeks or months. Short term goals should be directly supported by your daily practice routine. Long term goals are more significant achievements that may take many months or even years to complete.";

        typeFieldLabel.textContent = "Goal Type";
        titleFieldLabel.textContent = "Goal";
        dueFieldLabel.textContent = "Due Date (optional)";
        submitBtn.textContent = "Submit Goal";
        optionLong.textContent = "Long Term";
        optionShort.textContent = "Short Term";

        optionShort.setAttribute('value', 'short');
        optionLong.setAttribute('value', 'long');

        dueField.setAttribute('type', 'date');
        sidebarRight.classList.add('sidebar-right');

        mainContentDiv.appendChild(addGoalForm);
        mainContentDiv.appendChild(sidebarRight);
        addGoalForm.appendChild(typeFieldLabel);
        addGoalForm.appendChild(typeField);
        typeField.appendChild(optionShort);
        typeField.appendChild(optionLong);
        addGoalForm.appendChild(titleFieldLabel);
        addGoalForm.appendChild(titleField);
        addGoalForm.appendChild(dueFieldLabel);
        addGoalForm.appendChild(dueField);
        addGoalForm.appendChild(submitBtn);
        addGoalForm.appendChild(goalFormInstructions);

        submitBtn.addEventListener('click', () => {
            displayController.clearDiv(sidebarRight);
            let newGoal = goal(typeField.value, titleField.value, dueField.value);
            if (newGoal.type === 'short') {
                shortTermGoals.push(newGoal);
            } else {
                longTermGoals.push(newGoal);
            };
            console.log(shortTermGoals);
            console.log(longTermGoals);
        });
    };

    return { displayAddPracticeForm, displayAddGoalForm };
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
    dailyPracticeTab.classList.add('tab-hilight');
    shortTermGoalsTab.classList.remove('tab-hilight');
    longTermGoalsTab.classList.remove('tab-hilight');

    const practiceGreeting = document.createElement('div')
    
    practiceGreeting.classList.add('practice-greeting');

    practiceGreeting.textContent = `Practice session for ${day}, ${month} ${dayNo}`;

    mainContentDiv.appendChild(practiceGreeting);

    displayController.displayDailyPracticeCards(mainContentDiv);


});

shortTermGoalsTab.addEventListener('click', () => {
    displayController.clearMainContent();
    shortTermGoalsTab.classList.add('tab-hilight');
    dailyPracticeTab.classList.remove('tab-hilight');
    longTermGoalsTab.classList.remove('tab-hilight');


    
});

longTermGoalsTab.addEventListener('click', () => {
    displayController.clearMainContent();
    longTermGoalsTab.classList.add('tab-hilight');
    shortTermGoalsTab.classList.remove('tab-hilight');
    dailyPracticeTab.classList.remove('tab-hilight');
});

//////////////////////////////////////
////// Event Listeners for Buttons ///
//////////////////////////////////////

updatePracticeButton.addEventListener('click', () => {
    dailyPracticeTab.classList.remove('tab-hilight');
    shortTermGoalsTab.classList.remove('tab-hilight');
    longTermGoalsTab.classList.remove('tab-hilight');
    displayController.clearMainContent();
    
    formController.displayAddPracticeForm();
    
});


addGoalButton.addEventListener('click', () => { 
    displayController.clearMainContent();

    formController.displayAddGoalForm();

});