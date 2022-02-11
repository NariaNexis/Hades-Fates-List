
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
      requiredNeeds: [1,6]
     },
  2: {
      boon: "Pressure Points",
      requiredNeeds: [0]
     },
  3: {
      boon: "Support Fire",
      requiredNeeds: [1,2,3,4,5]
     },
  4: {
      boon: "Brilliant Reposte",
      requiredNeeds: [0]
     }
};


const needs = {
  0: "none",
  1: "deadly strike",
  2: "True Shot",
  3: "Hunter Dash",
  4: "Artemis's Aid",
  5: "Pressure Points",
  6: "Crushing shot"
};