var Plotly = require('plotly.js-dist-min');


// METHODS CHART SCRIPT// 
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
      "Usability Testing1",
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
      "Usability Testing2"
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
    "leaf": {"opacity": 0.4},

  
    outsidetextfont: {size: 20, color: "#292929"},
  
    // leaf: {opacity: 0.4},
  
    marker: {
      colors: ["#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7",],
      line: {
        color: "#292929"
      }
    },

    textfont: { 
      color: "#292929",
      family: "Balto",
      size: "15px"
    },

    insidetextorientation: "auto"
  }];
  
  
  var layout = {
  
    margin: {l: 0, r: 0, b: 0, t:0},
    
  

    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot background
    paper_bgcolor: 'rgba(0,0,0,0)', // Transparent paper background
    
  };
  
  
    Plotly.newPlot(CHART, data, layout);
  });

// TOOLS CHART SCRIPT// 
document.addEventListener("DOMContentLoaded", function () {
  // Define the CHART and TESTER elements
  const TOOLS = document.getElementById("tools_chart");

  var data = [{

    type: "sunburst",
  
    ids: [
      "Tools",
      "Low to Mid-fidelity",
      "Wireframes",
      "Miro",
      "Figma1",
      "Paper Prototypes",
      "Sketching",
      "Figma2",
      "High-Fidelity",
      "Visual Prototypes",
      "3D Rendering",
      "Blender",
      "Video Prototypes",
      "Adobe AfterEffects",
      "Adobe Premiere Pro",
      "Interactive Prototypes",
      "Adobe XD",
      "Figma3",
      "Mock-ups",
      "Figma4",
      "Web Development",
      "git",
      "HTML/CSS",
      "JavaScript",
      "plotly.js",
      "node.js"
  ],
  
  parents: [
      "",
      "Tools",
      "Low to Mid-fidelity",
      "Wireframes",
      "Wireframes",
      "Low to Mid-fidelity",
      "Paper Prototypes",
      "Paper Prototypes",
      "Tools",
      "High-Fidelity",
      "Visual Prototypes",
      "3D Rendering",
      "High-Fidelity",
      "Video Prototypes",
      "Video Prototypes",
      "High-Fidelity",
      "Interactive Prototypes",
      "Interactive Prototypes",
      "High-Fidelity",
      "Mock-ups",
      "Mock-ups",
      "Web Development",
      "Web Development",
      "Web Development",
      "JavaScript",
      "JavaScript"
  ],

  labels: [
    "Tools",
    "Low to Mid-fidelity",
    "Wireframes",
    "Miro",
    "Figma",
    "Paper Prototypes",
    "Sketching",
    "Figma",
    "High-Fidelity",
    "Visual Prototypes",
    "3D Rendering",
    "Blender",
    "Video Prototypes",
    "Adobe AfterEffects",
    "Adobe Premiere Pro",
    "Interactive Prototypes",
    "Adobe XD",
    "Figma",
    "Mock-ups",
    "Figma",
    "Web Development",
    "git",
    "HTML/CSS",
    "JavaScript",
    "plotly.js",
    "node.js"
],
  
    "leaf": {"opacity": 0.4},

  
    outsidetextfont: {size: 20, color: "#292929"},
  
    // leaf: {opacity: 0.4},
  
    marker: {
      colors: ["#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7","#F5EFE7"],
      line: {
        color: "#292929"
      }
    },

    textfont: { 
      color: "#292929",
      family: "Balto",
      size: "15px"
    },

    insidetextorientation: "auto"
  }];
  
  
  var layout = {
  
    margin: {l: 0, r: 0, b: 0, t:0},
    
  

    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot background
    paper_bgcolor: 'rgba(0,0,0,0)', // Transparent paper background
    
  };
  
  
    Plotly.newPlot(TOOLS, data, layout);
  });



  // The code below is moved inside the d3.csv callback function or wrapped in an IIFE
//___----------------CHART CAHNGER-------------------------------------// 
var toolsBTN = document.getElementById('tools');
var methodsBTN = document.getElementById('methods');

toolsBTN.addEventListener('click', function() {
  document.getElementById('tools_chart').style.display = 'flex';
  document.getElementById('methods_chart').style.display = 'none';
  toolsBTN.style.color = '#292929';
  methodsBTN.style.color = '#F5EFE7';
});

methodsBTN.addEventListener('click', function() {
  document.getElementById('methods_chart').style.display = 'flex';
  document.getElementById('tools_chart').style.display = 'none';
  methodsBTN.style.color = '#292929';
  toolsBTN.style.color = '#F5EFE7';

});
