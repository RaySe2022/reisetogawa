import * as d3 from "d3";
var Plotly = require('plotly.js-dist-min');

document.addEventListener("DOMContentLoaded", function () {
  // Define the CHART and TESTER elements
  const CHART = document.getElementById("methods_chart");

  var data = [{

    type: "sunburst",
  
    ids: [
      "Discover",
      "Define",
      "Develop",
      "Deliver",
      "Background Research",
      "Literature Review",
      "Data Analysis",
      "Case Studies",
      "Market Analysis",
      "Competitor Analysis",
      "UX Research",
      "Contextual Observation",
      "A/B Testing",
      "Heuristic Evaluation",
      "Card Sorting",
      "Usability Testing",
      "Focus Groups",
      "Online Ethnography",
      "Interviews",
      "Mind Mapping",
      "Decision Matrix",
      "Data Visualization",
      "5 Whys",
      "Statistical Analysis",
      "Thematic Analysis",
      "Affinity Diagramming",
      "Wire Framing",
      "Mock-ups",
      "3D Rendering/Printing",
      "Mood Boards",
      "User Journey Mapping",
      "Story Boarding",
      "User Personas",
      "Prototyping",
      "Low-Fidelity Prototyping",
      "High Fidelity Prototyping",
      "Video Prototyping",
      "Paper Prototyping",
      "Sketching",
      "Experience Prototyping",
      "Persona-based Walkthroughs",
      "Body Storming",
      "Wizard of Oz Testing",
      "Prototype Walkthroughs",
      "Comparative Testing",
      "Usability Testing"
    ],
  
    labels: [
      "Discover",
      "Define",
      "Develop",
      "Deliver",
      "Background Research",
      "Literature Review",
      "Data Analysis",
      "Case Studies",
      "Market Analysis",
      "Competitor Analysis",
      "UX Research",
      "Contextual Observation",
      "A/B Testing",
      "Heuristic Evaluation",
      "Card Sorting",
      "Usability Testing",
      "Focus Groups",
      "Online Ethnography",
      "Interviews",
      "Mind Mapping",
      "Decision Matrix",
      "Data Visualization",
      "5 Whys",
      "Statistical Analysis",
      "Thematic Analysis",
      "Affinity Diagramming",
      "Wire Framing",
      "Mock-ups",
      "3D Rendering/Printing",
      "Mood Boards",
      "User Journey Mapping",
      "Storyboarding",
      "User Personas",
      "Prototyping",
      "Low-Fidelity Prototyping",
      "High Fidelity Prototyping",
      "Video Prototyping",
      "Paper Prototyping",
      "Sketching",
      "Experience Prototyping",
      "Persona-based Walkthroughs",
      "Body Storming",
      "Wizard of Oz Testing",
      "Prototype Walkthroughs",
      "Comparative Testing",
      "Usability Testing"
    ],
  
    parents: [
      "Methods",
      "Methods",
      "Methods",
      "Methods",
      "Discover",
      "Background Research",
      "Background Research",
      "Background Research",
      "Background Research",
      "Background Research",
      "Discover",
      "UX Research",
      "UX Research",
      "UX Research",
      "UX Research",
      "UX Research",
      "UX Research",
      "UX Research",
      "UX Research",
      "Define",
      "Define",
      "Define",
      "Define",
      "Define",
      "Define",
      "Define",
      "Develop",
      "Develop",
      "Develop",
      "Develop",
      "Develop",
      "Develop",
      "Develop",
      "Develop",
      "Prototyping",
      "Prototyping",
      "Prototyping",
      "Low-Fidelity Prototyping",
      "Low-Fidelity Prototyping",
      "Deliver",
      "Deliver",
      "Deliver",
      "Deliver",
      "Deliver",
      "Deliver",
      "Deliver"
  
    ],
  
    outsidetextfont: {size: 20, color: "#377eb8"},
  
    // leaf: {opacity: 0.4},
  
    marker: {line: {width: 2}},
  
  }];
  
  
  var layout = {
  
    margin: {l: 0, r: 0, b: 0, t:0},
  
    sunburstcolorway:["#636efa","#ef553b","#00cc96"],
  
  };
  
  
    Plotly.newPlot(CHART, data, layout);
  });

  // The code below is moved inside the d3.csv callback function or wrapped in an IIFE

