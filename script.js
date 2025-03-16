const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// HTML elements
const card = document.getElementById("flashcard");
const cardContent = document.getElementById("card-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const addCardBtn = document.getElementById("add-card-btn");
const newTerm = document.getElementById("new-term");
const newDef = document.getElementById("new-definition");

// Start with this function to simply display the card
function displayCard() {
    // The current card is the card indexed by currentIndex in flashcards array
    currCard = flashcards[currentIndex];
        
    // If showingTerm is true, show the term
    if (showingTerm) {
        // Show term by setting card-content to be the term
        cardContent.textContent = currCard.term;
    } else {
        // If showingTerm is false, show definition
        cardContent.textContent = currCard.definition;
    }
}

// Event listener for that flips flashcard over
card.addEventListener("click", () => {
    showingTerm = !showingTerm;     // Set display to other side of flashcard
    displayCard();                  // Update webpage to display other side
})

// Event listener for previous button
prevBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
        // If the current card is the first card, go back to last card
        currentIndex = flashcards.length - 1;
    } else {
        // Otherwise, go back to card that is indexed right before current card
        currentIndex = currentIndex - 1;
    }; 
    showingTerm = true; // Show term
    displayCard();      // Display previous card    
})

// Event listener for next button
nextBtn.addEventListener("click", () => {
    if (currentIndex === flashcards.length - 1) {
        // If the current card is the last card, go back to first card
        currentIndex = 0;
    } else {
        // Otherwise, go back to card that is indexed right after current card
        currentIndex = currentIndex + 1;
    }; 
    showingTerm = true; // Show term
    displayCard();      // Display previous card    
})

// Event listener for add card button
addCardBtn.addEventListener("click", () => {
    // Get user input values
    const newTermInput = newTerm.value;
    const newDefInput = newDef.value;

    // If both term and definition fields are filled, add new flashcard
    if (newTermInput != "" && newDefInput != "") {
        // Add new flashcard to flashcards array
        flashcards.push({term: newTermInput, definition: newDefInput});

        // Clear input fields
        newTerm.value = "";
        newDef.value = "";
        
        // Notify user that card was added
        alert("New card added");
    } else {
        // Notify user that input is invalid
        alert("Please enter both the term and the definition");
    }
})

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
