// Sample data for quizzes
const quizzes = [
    { id: 1, title: "JavaScript Basics", description: "Test your knowledge of JavaScript basics.", questions: [] },
    { id: 2, title: "HTML & CSS", description: "Quiz on HTML and CSS fundamentals.", questions: [] }
];

// Functions to toggle between screens
function showMainMenu() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('play-quizzes').classList.add('hidden');
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('new-quiz-form').classList.add('hidden');
    document.getElementById('edit-quiz-list').classList.add('hidden');
}

function showPlayQuizzes() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('play-quizzes').classList.remove('hidden');
    loadQuizList();
}

function showCreateQuizMenu() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('create-quiz-menu').classList.remove('hidden');
}

function showNewQuizForm() {
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('new-quiz-form').classList.remove('hidden');
}

function showEditQuizList() {
    document.getElementById('create-quiz-menu').classList.add('hidden');
    document.getElementById('edit-quiz-list').classList.remove('hidden');
    loadEditQuizList();
}

// Load quizzes for play
function loadQuizList() {
    const quizList = document.getElementById('quiz-list');
    quizList.innerHTML = '';
    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
        quizElement.innerHTML = `
            <h3 class="text-xl font-bold">${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Play</button>
        `;
        quizList.appendChild(quizElement);
    });
}

// Load quizzes for edit
function loadEditQuizList() {
    const editQuizList = document.getElementById('edit-quiz-list-content');
    editQuizList.innerHTML = '';
    quizzes.forEach(quiz => {
        const quizElement = document.createElement('div');
        quizElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
        quizElement.innerHTML = `
            <h3 class="text-xl font-bold">${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button onclick="editQuiz(${quiz.id})" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">Edit</button>
        `;
        editQuizList.appendChild(quizElement);
    });
}

// Add question to new quiz form
function addQuestion() {
    const questionsList = document.getElementById('questions-list');
    const questionElement = document.createElement('div');
    questionElement.classList.add('mb-4', 'bg-gray-200', 'p-4', 'rounded');
    questionElement.innerHTML = `
        <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
            Question
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter question">
        <label class="block text-gray-700 text-sm font-bold mt-4 mb-2" for="answer">
            Answer
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter answer">
    `;
    questionsList.appendChild(questionElement);
}

// Edit quiz (function to be expanded)
function editQuiz(id) {
    // Placeholder for edit functionality
    alert(`Edit quiz with ID: ${id}`);
}
