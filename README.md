# Text Modifier Tool

Hi there, and thanks for stopping by.

This is a simple text transformation tool built using **ReactJS**. It's my **first real React project**, where I tried to put into practice what I’ve learned so far about building user interfaces with components, hooks, and state management.

The goal of this tool is to let users easily modify text right in the browser, with options like changing case, removing extra spaces, and copying to clipboard. It’s a clean, distraction-free solution for quick text formatting tasks.


## Features

- Convert text to UPPERCASE
- Convert text to lowercase
- Length of word
- Clear all text
- Copy output to clipboard
- 

## Why I built it

I often find myself needing a quick way to reformat or clean up blocks of text—like when writing content, preparing inputs for scripts, or just tidying up notes. Most online tools either come with ads or too many features I don’t need, so I decided to build something simple and focused.

At the same time, I wanted to get hands-on experience with React and build something real from scratch.



## How to run the project locally

1. Clone the repository:

       git clone https://github.com/Dhee-raj10/text-modifier-tool.git

2.Navigate to the project directory:

    cd text-modifier-tool

3.Install dependencies:

    npm install

4.Start the development server:
      
    npm start

 
 
# Folder Structure:
  text-modifier-tool/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/         # Reusable components (if any)
  │   ├── App.js              # Main component
  │   ├── index.js            # React entry point
  │   └── App.css             # Styling
  ├── package.json
  └── README.md

                                      

# Tech Stack:
  ReactJS
  HTML
  CSS
  JavaScript

# Topics Covered:
  1)React functional components – I built the entire tool using a simple functional component instead of using classes. It helped me understand how modern React    works.

  2)useState hook – I used this to manage both the input text and the result after each transformation. It really helped me grasp how React handles component state.

  3)Controlled components – The input field is directly linked to state, so whatever the user types gets reflected in the component immediately.

  4)Event handling – Each button (like Uppercase, Lowercase, etc.) triggers a specific function using onClick, which helped me get comfortable with handling user interactions.

  5)String manipulation – I used basic JavaScript string methods like .toUpperCase(), .toLowerCase(), and .length to perform the actual transformations.

  6)Rendering based on state – I understood how updating state causes the component to re-render with the new data.

  7)JSX  – This project gave me hands-on experience with writing HTML-like syntax inside JavaScript using JSX.

  8)Keeping logic clean – I kept the input and result in separate state variables, which made the logic simpler and the UI easier to manage.



# What I plan to add next:
   Word and character counter
   Mobile responsiveness
   Custom font and text styling options
 
 
Thanks again for checking this out. If you have suggestions or feedback, feel free to open an issue or reach out. Always happy to learn and improve.
