// Global variables
const practiceTab = document.getElementById('practice-tab');
const shortTermTab = document.getElementById('short-term-tab');
const longTermTab = document.getElementById('long-term-tab');

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

let dailyGoals = [];
let shortTermGoals = [];
let longTermGoals = [];

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

// Set up event listeners for tabs
const tabEventListeners = (() => {

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
        addPracticeButton.setAttribute('id', 'add-practice-button');
        
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
            dayItem.setAttribute('id', dayItem.textContent);
            daysList.appendChild(dayItem);

        };

        dailyPractice();

        return { addPracticeButton };
    });
});

// Daily Practice Module
const dailyPractice = (() => {

    // Daily Goal factory function
    const dailyGoal = (title, type, description, time) => {
        return {title, type, description, time};
    }

    const addPracticeButton = document.getElementById('add-practice-button');
    let days = document.querySelectorAll('.days-list-item');

    addPracticeButton.addEventListener('click', () => {
        clearMainContent();

        let addPracticeFormHead = document.createElement('h1');
        let addPracticeForm = document.createElement('form');
        let titleLabel = document.createElement('label');
        let titleField = document.createElement('input');
        let typeLabel = document.createElement('label')
        let typeField = document.createElement('select');
        let optionWarmup = document.createElement('option');
        let optionTechnique = document.createElement('option');
        let optionReading = document.createElement('option');
        let optionRepertoire = document.createElement('option');
        let optionOther = document.createElement('option');
        let descriptionLabel = document.createElement('label');
        let descriptionField = document.createElement('input');
        let timeLabel = document.createElement('label');
        let timeField = document.createElement('input');
        let submitPracticeButton = document.createElement('button');

        addPracticeFormHead.textContent = 'Add New Practice';
        titleLabel.textContent = 'Title';
        typeLabel.textContent = 'Type';
        descriptionLabel.textContent = 'Description';
        timeLabel.textContent = 'Time (in minutes)';
        submitPracticeButton.textContent = 'Submit';

        optionWarmup.textContent = 'Warmup';
        optionTechnique.textContent = 'Technique';
        optionReading.textContent = 'Reading';
        optionRepertoire.textContent = 'Repertoire';
        optionOther.textContent = 'Other';

        addPracticeForm.setAttribute('onsubmit', 'return false'); // Prevents page from reloading
        titleField.setAttribute('type', 'text');
        optionWarmup.setAttribute('value', 'Warmup');
        optionTechnique.setAttribute('value', 'Technique');
        optionReading.setAttribute('value', 'Reading');
        optionRepertoire.setAttribute('value', 'Repertoire');
        optionOther.setAttribute('value', 'Other');
        descriptionField.setAttribute('type', 'text');
        descriptionField.setAttribute('rows', '10');
        descriptionField.setAttribute('cols', '20');
        timeField.setAttribute('type', 'number');

        mainContent.appendChild(addPracticeFormHead);
        mainContent.appendChild(addPracticeForm);
        addPracticeForm.appendChild(titleLabel);
        addPracticeForm.appendChild(titleField);
        addPracticeForm.appendChild(typeLabel);
        addPracticeForm.appendChild(typeField);
        typeField.appendChild(optionWarmup);
        typeField.appendChild(optionTechnique);
        typeField.appendChild(optionReading);
        typeField.appendChild(optionRepertoire);
        typeField.appendChild(optionOther);
        addPracticeForm.appendChild(descriptionLabel);
        addPracticeForm.appendChild(descriptionField);
        addPracticeForm.appendChild(timeLabel);
        addPracticeForm.appendChild(timeField);
        addPracticeForm.appendChild(submitPracticeButton);


        submitPracticeButton.addEventListener('click', () => {
            practice = dailyGoal(titleField.value, typeField.value, descriptionField.value, timeField.value);
            addPracticeForm.reset();
            dailyGoals.push(practice);
            console.log(dailyGoals);
        });


        return {submitPracticeButton};
    });
    
    days.forEach(day => {
        day.addEventListener('click', () => {
            let dayText = day.textContent;
            clearMainContent();

            const warmupHeader = document.createElement('h1');
            const techniqueHeader = document.createElement('h1');
            const readingHeader = document.createElement('h1');
            const repertoireHeader = document.createElement('h1');
            const otherHeader = document.createElement('h1');

            const warmupList = document.createElement('ul');
            const techniqueList = document.createElement('ul');
            const readingList = document.createElement('ul');
            const repertoireList = document.createElement('ul');
            const otherList = document.createElement('ul');

            warmupList.classList.add('practice-list');
            techniqueList.classList.add('practice-list');
            readingList.classList.add('practice-list');
            repertoireList.classList.add('practice-list');
            otherList.classList.add('practice-list');

            warmupList.setAttribute('id', 'Warmup');
            techniqueList.setAttribute('id', 'Technique');
            readingList.setAttribute('id', 'Reading');
            repertoireList.setAttribute('id', 'Repertoire');
            otherList.setAttribute('id', 'Other');

            
            warmupHeader.textContent = 'Warmup';
            techniqueHeader.textContent = 'Technique';
            readingHeader.textContent = 'Reading';
            repertoireHeader.textContent = 'Repertoire';
            otherHeader.textContent = 'Other';
            

            mainContent.appendChild(warmupHeader);
            mainContent.appendChild(techniqueHeader);
            mainContent.appendChild(readingHeader);
            mainContent.appendChild(repertoireHeader);
            mainContent.appendChild(otherHeader);

            warmupHeader.appendChild(warmupList);
            techniqueHeader.appendChild(techniqueList);
            readingHeader.appendChild(readingList);
            repertoireHeader.appendChild(repertoireList);
            otherHeader.appendChild(otherList);

            for (let goal in dailyGoals) {
                if (dailyGoals[goal].type === 'Warmup') {
                    let title = document.createElement('ul');
                    let description = document.createElement('li');
                    let time = document.createElement('li');

                    title.classList.add('practice-title');
                    description.classList.add('practice-list-item');
                    time.classList.add('practice-list-item');

                    title.textContent = dailyGoals[goal].title;
                    description.textContent = `Notes: ${dailyGoals[goal].description}`;
                    time.textContent = `Time: ${dailyGoals[goal].time} minutes`;

                    warmupList.append(title);
                    title.append(description);
                    title.append(time);
                };
            };

        });
    });

});


// TODO Short term goals module 



// TODO Long term goals module




const shortTermGoal = (title, description, type='short term', dueDate) => {
    return {title, description, type, dueDate};
};

const longTermGoal = (title, description, type='long term') => {
    return {title, description, type};
};




// Add event listeners 

tabEventListeners();