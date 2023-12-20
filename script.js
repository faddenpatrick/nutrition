let profileName = localStorage.getItem('profileName') || '';
let goalCalories = parseFloat(localStorage.getItem('goalCalories')) || 0;
let goalProtein = parseFloat(localStorage.getItem('goalProtein')) || 0;
let goalCarbs = parseFloat(localStorage.getItem('goalCarbs')) || 0;
let goalFats = parseFloat(localStorage.getItem('goalFats')) || 0;

window.onload = function() {
    if (profileName) {
        document.getElementById('profile-display').textContent = profileName;
    }
    document.getElementById('goal-display-calories').textContent = goalCalories;
    document.getElementById('goal-display-protein').textContent = goalProtein;
    document.getElementById('goal-display-carbs').textContent = goalCarbs;
    document.getElementById('goal-display-fats').textContent = goalFats;

    const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
    foodLog.forEach(addToFoodLog);
    updateTotals(foodLog);
}

function setProfileName() {
    const nameInput = document.getElementById('profile-name').value;
    if (!nameInput) {
        alert('Please enter a profile name.');
        return;
    }
    profileName = nameInput;
    document.getElementById('profile-display').textContent = profileName;
    localStorage.setItem('profileName', profileName);
}

function setGoals() {
    goalCalories = parseFloat(document.getElementById('goal-calories').value) || 0;
    goalProtein = parseFloat(document.getElementById('goal-protein').value) || 0;
    goalCarbs = parseFloat(document.getElementById('goal-carbs').value) || 0;
    goalFats = parseFloat(document.getElementById('goal-fats').value) || 0;

    document.getElementById('goal-display-calories').textContent = goalCalories;
    document.getElementById('goal-display-protein').textContent = goalProtein;
    document.getElementById('goal-display-carbs').textContent = goalCarbs;
    document.getElementById('goal-display-fats').textContent = goalFats;

    localStorage.setItem('goalCalories', goalCalories);
    localStorage.setItem('goalProtein', goalProtein);
    localStorage.setItem('goalCarbs', goalCarbs);
    localStorage.setItem('goalFats', goalFats);
}

function clearLog() {
    localStorage.removeItem('foodLog');
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('totalProtein');
    localStorage.removeItem('totalCarbs');
    localStorage.removeItem('totalFats');

    document.getElementById('food-log').innerHTML = '';
    document.getElementById('total-calories').textContent = '0';
    document.getElementById('total-protein').textContent = '0';
    document.getElementById('total-carbs').textContent = '0';
    document.getElementById('total-fats').textContent = '0';
}

// Rest of the functions (addFood, calculateTotalCalories, addToFoodLog, updateTotals, clearFields) remains the same.

function addFood() {
    const foodName = document.getElementById('food-name').value;
    const calories = parseFloat(document.getElementById('calories').value);
    const protein = parseFloat(document.getElementById('protein').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const fats = parseFloat(document.getElementById('fats').value);

    if (!foodName || isNaN(calories) || isNaN(protein) || isNaN(carbs) || isNaN(fats)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    const totalCalories = calculateTotalCalories(calories);
    const foodItem = {
        name: foodName,
        calories: calories,
        protein: protein,
        carbs: carbs,
        fats: fats,
        totalCalories: totalCalories
    };

    addToFoodLog(foodItem);
    updateTotals([foodItem]);
    clearFields();
}

function calculateTotalCalories(calories) {
    // Calculate total calories or apply any necessary formula
    return calories;
}

function addToFoodLog(foodItem) {
    const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
    foodLog.push(foodItem);
    localStorage.setItem('foodLog', JSON.stringify(foodLog));

    const foodLogUI = document.getElementById('food-log');
    const li = document.createElement('li');
    li.textContent = `${foodItem.name} | Calories: ${foodItem.totalCalories} | Protein: ${foodItem.protein}g | Carbs: ${foodItem.carbs}g | Fats: ${foodItem.fats}g`;
    foodLogUI.appendChild(li);
}

function updateTotals(foodLog) {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    foodLog.forEach(item => {
        totalCalories += item.totalCalories;
        totalProtein += item.protein;
        totalCarbs += item.carbs;
        totalFats += item.fats;
    });

    document.getElementById('total-calories').textContent = totalCalories.toFixed(2);
    document.getElementById('total-protein').textContent = totalProtein.toFixed(2);
    document.getElementById('total-carbs').textContent = totalCarbs.toFixed(2);
    document.getElementById('total-fats').textContent = totalFats.toFixed(2);
}

function clearFields() {
    document.getElementById('food-name').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('protein').value = '';
    document.getElementById('carbs').value = '';
    document.getElementById('fats').value = '';
}

// Previous code remains unchanged

function setProfileName() {
    const nameInput = document.getElementById('profile-name').value;
    if (!nameInput) {
        alert('Please enter a profile name.');
        return;
    }
    profileName = nameInput;
    document.getElementById('profile-display').textContent = profileName;
    localStorage.setItem('profileName', profileName);
    
    document.getElementById('profile-section').style.display = 'none';
}

function setGoals() {
    goalCalories = parseFloat(document.getElementById('goal-calories').value) || 0;
    goalProtein = parseFloat(document.getElementById('goal-protein').value) || 0;
    goalCarbs = parseFloat(document.getElementById('goal-carbs').value) || 0;
    goalFats = parseFloat(document.getElementById('goal-fats').value) || 0;

    document.getElementById('goal-display-calories').textContent = goalCalories;
    document.getElementById('goal-display-protein').textContent = goalProtein;
    document.getElementById('goal-display-carbs').textContent = goalCarbs;
    document.getElementById('goal-display-fats').textContent = goalFats;

    localStorage.setItem('goalCalories', goalCalories);
    localStorage.setItem('goalProtein', goalProtein);
    localStorage.setItem('goalCarbs', goalCarbs);
    localStorage.setItem('goalFats', goalFats);

    document.getElementById('goals-section').style.display = 'none';
    document.getElementById('profile-summary').innerHTML += `<button onclick="changeGoals()">Change Goals</button>`;
}

function changeGoals() {
    document.getElementById('goals-section').style.display = 'block';
    const changeButton = document.querySelector('.profile-summary button');
    if (changeButton) {
        changeButton.remove();
    }
}

