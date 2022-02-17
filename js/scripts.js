
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
    legendaryBoons: [1,2,3,4,5,6],
    duoBoons: false
  },
  {
    prophecy: "Divine Pairing",
    legendaryBoons: false,
    duoBoons: [1]
  }
]

const duoBoons = {
  0: {
      duoBoon: "none",
      requiredNeeds: [0]
     },
  1: {
      duoBoon: "Scintillating Feast",
      requiredNeeds: [31,32,34,35,40]
     },
  2: {
       duoBoon: "Vengeful Mood",
       requiredNeeds: [30,31,32,33,34,35,41,42,43,44,45,46]
     },
  3: {
      duoBoon: "Lightning Phalanx",
      requiredNeeds: [8,31,32,34,35]
     },
  4: {
      duoBoon: "Merciful End",
      requiredNeeds: [12,13,43,44]
     },
  5: {
      duoBoon: "Low Tolerance",
      requiredNeeds: [36,37,38,39,51,52,53,54]
     },
  6: {
      duoBoon: "Blizzard Shot",
      requiredNeeds: [56,57,58,59,60]
     },
  7: {
      duoBoon: "Cold Embrace",
      requiredNeeds: [50,52,53,54,55]
     },
  8: {
      duoBoon: "Freezing Vortex",
      requiredNeeds: [45,46,56,57,58,59]
     },
  9: {
      duoBoon: "Splitting Headache",
      requiredNeeds: [1,3,4,10,36,37,38,39]
     },
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
     },
  3: {
      legendaryBoon: "Vicious Cycle",
      requiredBoons: [5]
     },
  4: {
      legendaryBoon: "Bad News",
      requiredBoons: [6]
     },
  5: {
      legendaryBoon: "Greater Recall",
      requiredBoons: [7]
     },
  6: {
      legendaryBoon: "Winter Harvest",
      requiredBoons: [8,9,10]
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
      boon: "Bad News",
      requiredNeeds: [19,22,24]
     },
  7: {
      boon: "Greater Recall",
      requiredNeeds: [20,21,22,23]
     },
  8: {
      boon: "Arctic Blast",
      requiredNeeds: [25,26,27,28,29]
     },
  9: {
      boon: "Killing Freeze",
      requiredNeeds: [25,26,27,28,29]
     },
  10: {
       boon: "Ravenous Will",
       requiredNeeds: [0]
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
  29: "Snow Burst",
  30: "Electric Shot",
  31: "Lightning Strike",
  32: "Thunder Dash",
  33: "Thunder Flare",
  34: "Thunder Flourish",
  35: "Zeus' Aid",
  36: "Dionysus' Aid",
  37: "Drunked Dash",
  38: "Drunken Flourish",
  39: "Drunken Strike",
  40: "Trippy Shot",
  41: "Ares' Aid",
  42: "Blade Dash",
  43: "Curse of Agony",
  44: "Curse of Pain",
  45: "Slicing Flare",
  46: "Slicing Shot",
  47: "Divine Flourish",
  48: "Divine Strike",
  49: "Phalanx Shot",
  50: "Aphrodite's Aid",
  51: "Crush Shot",
  52: "Heartbreak Flourish",
  53: "Heartbreak Strike",
  54: "Passion Dash",
  55: "Crystal Beam",
  56: "Demeter's Aid",
  57: "Frost Flourish",
  58: "Frost Strike",
  59: "Mistral Dash",
  60: "Flood Shot",
  61: "Artemis' Aid",
  62: "Deadly Flourish",
  63: "Deadly Strike",
  64: "True Shot",
};