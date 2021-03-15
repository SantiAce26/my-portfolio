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

google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyBUzvpzRjE2mMu1G9MIy81hK5oUhC5vLww'
      });
google.charts.setOnLoadCallback(drawRegionsMap);


function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function showFact() {
  const responseFromServer = await fetch('/fact');
  const textFromResponse = await responseFromServer.text();

  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = textFromResponse;
}

async function getMovieQuote(){
  const responseFromServer = await fetch('/MovieQuotes');
  const textFromResponse = await responseFromServer.json();
  console.log(textFromResponse);
  const quote = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];
  console.log(quote);

  //Adding it to the page
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;

}

function drawRegionsMap() {
    fetch('/geography-data').then(response => response.json()).then((geographyCount) => {
        const data = new google.visualization.DataTable();
        data.addColumn('string','Country');
        data.addColumn('number','People');
        Object.keys(geographyCount).forEach((Country) => {
            data.addRow([Country, geographyCount[Country]]);
        });
        const options = {colorAxis: {colors: ['#00fcc6', '#05ed71', '#007527']},
                        backgroundColor: '#81d4fa',
                        datalessRegionColor: '#8df2bc',
                        defaultColor: '#f5f5f5',};

        const chart = new google.visualization.GeoChart(document.getElementById('regions-div'));

        chart.draw(data, options);
    });

}

/*function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions-div'));

        chart.draw(data, options);
}*/


