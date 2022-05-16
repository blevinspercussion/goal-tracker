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

    const dailyGoal = (title, description, type='daily', time) => {
        return {title, description, type, time};
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
        submitPracticeButton.textContent = 'Add Practice';

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
            
            let practice = new dailyGoal (
                titleField.value,
                descriptionField.value,
                timeField.value
            );
            console.log(practice);
            return { practice };
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