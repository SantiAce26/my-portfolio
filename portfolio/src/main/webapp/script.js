// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addRandomFact()
{

    //List of facts
    const facts =
    ["I am Colombian B)", "I know Python,Java,C(Not an expert though)", "Demon Slayer is my favorite anime", "I love food...", "I like coding hehehe" ,
    "I am double jointed in my fingers", "I'm highly interested in machine learning/deep learning", "Hey you landed on the special fact that you're cool"];

    //Picks a random fact
    const fact = facts[Math.floor(Math.random() *facts.length)];

    // Add it to the page
    const factContainter = document.getElementById('fact-container');
    factContainter.innerText = fact;
}
