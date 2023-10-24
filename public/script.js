import * as d3 from "d3";
var Plotly = require('plotly.js-dist-min');

d3.csv("/methods_data.csv", function(err, rows) {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  console.log('CSV data:', rows); // Debugging statement

  try {
    // Check if rows is an array before using map
    if (Array.isArray(rows)) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
        });
      }

      var data = [
        {
          type: "sunburst",
          maxdepth: 3,
          ids: unpack(rows, 'ids'),
          labels: unpack(rows, 'labels'),
          parents: unpack(rows, 'parents')
        }
      ];

      var layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        sunburstcolorway: [
          "#636efa", "#EF553B", "#00cc96", "#ab63fa", "#19d3f3",
          "#e763fa", "#FECB52", "#FFA15A", "#FF6692", "#B6E880"
        ],
        extendsunburstcolorway: true
      };

      Plotly.newPlot('methods_chart', data, layout, { showSendToCloud: true });
    } else {
      console.error('CSV data is not an array.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
