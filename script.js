let entries = [];
let goalCalories = 2000; // Default goal calories

// Load data from local storage if available
window.onload = function () {
    if (localStorage.getItem('entries')) {
        entries = JSON.parse(localStorage.getItem('entries'));
        updateEntries();
    }
    if (localStorage.getItem('goalCalories')) {
        goalCalories = parseInt(localStorage.getItem('goalCalories'));
        document.getElementById('goal-calories').value = goalCalories;
    }
};

function setGoal() {
    const newGoal = parseInt(document.getElementById('goal-calories').value);
    if (!isNaN(newGoal)) {
        goalCalories = newGoal;
        localStorage.setItem('goalCalories', goalCalories);
        alert(`Goal calories updated to ${goalCalories}`);
    } else {
        alert('Please enter a valid number for the goal calories.');
    }
}

function addEntry() {
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);
    const fat = parseInt(document.getElementById('fat').value);

    if (!isNaN(calories) && !isNaN(protein) && !isNaN(carbs) && !isNaN(fat)) {
        const entry = { calories, protein, carbs, fat };
        entries.push(entry);
        updateEntries();
        saveData();
    } else {
        alert('Please enter valid numbers for all fields.');
    }
}

function updateEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <p>Entry ${index + 1} - Calories: ${entry.calories}, Protein: ${entry.protein}g, Carbs: ${entry.carbs}g, Fat: ${entry.fat}g</p>
        `;
        entriesDiv.appendChild(entryDiv);
    });
}

function resetData() {
    entries = [];
    updateEntries();
    saveData();
}

function saveData() {
    localStorage.setItem('entries', JSON.stringify(entries));
}
