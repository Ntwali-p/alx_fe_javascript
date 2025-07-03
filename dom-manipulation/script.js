// Load quotes from localStorage or use defaults
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The journey of a thousand miles begins with one step.", category: "inspiration" },
  { text: "Life is what happens when you're busy making other plans.", category: "life" },
];

// Save to localStorage
function saveQuotesToLocalStorage() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Modify addQuote to save to localStorage
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim().toLowerCase();

  if (!quoteText || !quoteCategory) {
    alert("Please fill in both the quote and category.");
    return;
  }

  quotes.push({ text: quoteText, category: quoteCategory });
  saveQuotesToLocalStorage(); // persist

  populateCategories();
  document.getElementById("newQuoteText").value = '';
  document.getElementById("newQuoteCategory").value = '';
  alert("Quote added!");
}
