
function getBoonList(prophecy) {

  for (const property in prophecy) {
    if (prophecy[property] !== false) {
      //now at ex [1,2]
      // make a loop for the array
      // connect it to the legendaryBoons database
    }
  }
 

}

$(document).ready(function() {

  for (let i = 0; i < prophecyDatabase.length; i++) {
    $("#accordionPanelsStayOpenExample").append(
      `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${i}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${i}">
            ${prophecyDatabase[i].prophecy}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${i}">
          <div class="accordion-body">
            <ol>
              ${getBoonList(prophecyDatabase[i].prophecy)}
            </ol>
          </div>
        </div>
      </div>`
    )
  }
});

const prophecyDatabase = [
  {
    prophecy: "Power without Equal",
    legendaryBoons: [1,2],
    duoBoons: false
  },
  {
    prophecy: "Vengeful Mood",
    legendaryBoons: false,
    duoBoons: [1]
  }
]

const duoBoons = {

};

const legendaryBoons = {
  0: {
      legendaryBoon: "none",
      requiredBoons: [0]
     },
  1: {
      legendaryBoon: "Fully Loaded",
      requiredBoons: [1,2,3]
     },
  2: {
      legendaryBoon: "Divine Projection",
      requiredBoons: [4]
     }
}

const boons = {
  0: {
      boon: "none",
      requiredNeeds: [0] 
     },
  1: {
      boon: "Exit Wounds",
      requiredNeeds: [2,5,6,8,10]
     },
  2: {
      boon: "Pressure Points",
      requiredNeeds: [0]
     },
  3: {
      boon: "Support Fire",
      requiredNeeds: [1,3,4,7,9,10]
     },
  4: {
      boon: "Brilliant Reposte",
      requiredNeeds: [11,12,13,14]
     },
  5: {
      boon: "Black Metal/Engulfing Vortex",
      requiredNeeds: [15,16,17,18]
     },
  6: {
      boon: "Greater Recall",
      requiredNeeds: [20,21,22,23]
     },
  7: {
      boon: "Bad News",
      requiredNeeds: [19,22,24]
     }
};


const needs = {
  0: "none",
  1: "Artemis' Aid",
  2: "Crush Shot",
  3: "Deadly Flourish",
  4: "Deadly Strike",
  5: "Electric Shot",
  6: "Flood Shot",
  7: "Hunter Dash",
  8: "Phalanx Shot",
  9: "Pressure Points",
  10: "True Shot",
  11: "Divine Dash",
  12: "Divine Flourish",
  13: "Divine Strike",
  14: "Holy Shield",
  15: "Ares' Aid",
  16: "Blade Dash",
  17: "Slicing Flare",
  18: "Slicing Shot",
  19: "Auto Reload",
  20: "Flurry Cast",
  21: "Infernal Soul Mirror",
  22: "Lambent Plume keepsake",
  23: "Quick Reload",
  24: "Stygian Soul Mirror",
  25: "Demeter's Aid",
  26: "Frost Flourish",
  27: "Frost Strike",
  28: "Mistral Dash",
  29: "Snow Burst"
};