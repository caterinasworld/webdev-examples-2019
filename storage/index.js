//
// Local Storage
//

// Save data to localStorage
Window.localStorage.setItem('Spongebob', 'Squarepants');

// Get saved data from localStorage
let cat = Window.localStorage.getItem('Spongebob');

// Remove saved data from localStorage
Window.localStorage.removeItem('Spongebob');

// Clear all items
Window.localStorage.clear();

//
// Sessions Storage
//

// Save data to sessionStorage
Window.sessionStorage.setItem('Sandy', 'Cheeks');

// Get saved data from sessionStorage
let data = Window.sessionStorage.getItem('Sandy');

// Remove saved data from sessionStorage
Window.sessionStorage.removeItem('Sandy');

// Remove all saved data from sessionStorage
Window.sessionStorage.clear();
