let speech = new SpeechSynthesisUtterance();
/////----------Line 1--------------/////
// creates a new instance of the SpeechSynthesisUtterance class in JavaScript.
//  Let's break down this line and understand each part:

// let: This keyword is used to declare a variable. In this case, it declares a
//  variable named speech.

// speech: This is the name of the variable being declared. You could choose a 
// different name if you prefer, but here it's appropriately named speech because 
// it will be used to control the synthesis of speech.

// =: This is the assignment operator. It is used to assign a value to a variable.

// new SpeechSynthesisUtterance(): This part involves the creation of a new object.
//  The new keyword is used to instantiate a new object from a class or constructor 
// function. SpeechSynthesisUtterance is a built-in class in JavaScript's Web Speech API.

// SpeechSynthesisUtterance: This class represents a speech request in the Web Speech API.
//  It contains various properties and methods that can be used to configure and control 
// the synthesis of speech. An instance of this class is created when new 
// SpeechSynthesisUtterance() is called.

// So, in summary, the line let speech = new SpeechSynthesisUtterance(); creates a
//  new variable named speech and assigns to it a new instance of the 
// SpeechSynthesisUtterance class, which is used to control text-to-speech synthesis 
// in a web page.








//-------------Line1--------------////
let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>{
       voiceSelect.options[i] = new Option(voice.name,i); 
    })
};

// Certainly! This block of code is setting up an event listener for the onvoiceschanged
//  event of the speechSynthesis object, and it handles the event by updating the
//  available voices and populating a dropdown (select) element with voice options.
//  Let's break down each part:

// window.speechSynthesis.onvoiceschanged: This line assigns a function to the 
// onvoiceschanged event of the speechSynthesis object. The onvoiceschanged event is 
// triggered when the list of available voices for speech synthesis changes.

// () => { ... }: This is an arrow function, which is the function assigned to the 
// onvoiceschanged event. The code inside the curly braces will be executed when the 
// event occurs.

// voices = window.speechSynthesis.getVoices();: When the voices change, this line 
// retrieves the updated list of available voices using the getVoices method of 
// speechSynthesis. The list of voices is then stored in the voices array.

// speech.voice = voices[0];: It sets the voice property of the speech object 
// (created earlier using new SpeechSynthesisUtterance()) to the first voice in the 
// updated list. This ensures that the speech synthesis will use the first available 
// voice by default.

// voices.forEach((voice, i) => { ... });: This is a loop that iterates over each voice 
// in the voices array. For each voice, it executes the code inside the curly braces.

// voiceSelect.options[i] = new Option(voice.name, i);: This line creates a new Option 
// element for the dropdown and assigns it to the i-th index of the options property of 
// the voiceSelect dropdown. The text of the option is set to the name of the voice 
// (voice.name), and the value is set to the index (i). This way, the dropdown is 
// populated with options representing the available voices.
// In summary, this code ensures that when the list of available voices changes 
// (onvoiceschanged event), it updates the voices array, sets the default voice for 
// the speech synthesis, and populates a dropdown element (voiceSelect) with options 
// representing the available voices.

voiceSelect.addEventListener('change', ()=>{
    speech.voice = voices[voiceSelect.value];
});

// Certainly! This line of code adds an event listener to the change event of the 
// voiceSelect element, which is a dropdown (select) element in your HTML. Let's 
// break down each part:
// voiceSelect: This is a reference to the dropdown (select) element in the HTML document.
//  It was previously defined as let voiceSelect = document.querySelector('select');.

// addEventListener('change', () => { ... });: This function sets up an event listener 
// for the change event on the voiceSelect element. The change event is triggered when 
// the user selects a different option in the dropdown.

// () => { ... }: This is an arrow function, and the code inside the curly braces will be
//  executed when the change event occurs.

// speech.voice = voices[voiceSelect.value];: When a new voice is selected from the 
// dropdown, this line updates the voice property of the speech object (created earlier 
// using new SpeechSynthesisUtterance()). It sets the voice property to the voice 
// corresponding to the selected value in the voiceSelect dropdown.

// voiceSelect.value: This retrieves the currently selected value of the dropdown, 
// which is the index of the selected voice in the voices array.

// voices[voiceSelect.value]: This accesses the voices array using the selected value 
// as an index, retrieving the specific voice associated with that index.

// speech.voice = ...: This assigns the selected voice to the voice property of the 
// speech object, indicating which voice should be used for the subsequent text-to-speech 
// synthesis.

// In summary, this event listener ensures that when the user selects a different voice 
// from the dropdown, it updates the voice property of the speech object to the voice 
// corresponding to the selected option. This allows users to choose different voices 
// for text-to-speech synthesis.

document.querySelector('button').addEventListener('click', ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});


// Certainly! This line of code adds an event listener to the click event of a button.
//  When the button is clicked, it triggers the specified function. Let's break down 
// each part of the code:

// javascript
// Copy code
// document.querySelector('button').addEventListener('click', () => {
//     speech.text = document.querySelector('textarea').value;
//     window.speechSynthesis.speak(speech);
// });
// document.querySelector('button'): This part selects the first <button> element in 
// the HTML document. It uses document.querySelector to find the button element based on
//  the tag name 'button'.

// .addEventListener('click', () => { ... }): This function sets up an event listener for
//  the click event on the selected button. The click event is triggered when the button 
// is clicked.

// () => { ... }: This is an arrow function, and the code inside the curly braces will be
//  executed when the button is clicked.

// speech.text = document.querySelector('textarea').value;: This line assigns the value 
// of the <textarea> element to the text property of the speech object. The speech object
//  was created earlier using new SpeechSynthesisUtterance().

// document.querySelector('textarea').value: This retrieves the current value of the 
// <textarea> element. The value of the textarea is assumed to be the text that the user
 //wants to convert to speech.

// speech.text = ...: This assigns the retrieved text to the text property of the speech
//  object, indicating the content that should be spoken.

// window.speechSynthesis.speak(speech);: This line initiates the text-to-speech synthesis
//  using the speak method of the speechSynthesis interface.

// window.speechSynthesis: This is the Web Speech API's interface for handling 
// text-to-speech synthesis.

// .speak(speech): This method is called on the speechSynthesis interface, and it takes
//  the speech object as an argument. It starts the process of converting the specified
//  text (stored in the speech object) into speech using the browser's speech synthesis
//  capabilities.

// In summary, this code listens for a click on a button, retrieves the text from a 
// textarea, sets that text as the content to be spoken, and then initiates the speech
//  synthesis process. This allows the user to click the button and hear the spoken
//  version of the text entered in the textarea.