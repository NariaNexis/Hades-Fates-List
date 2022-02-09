
function getBoon(i) {

  let boonList = ""

  for (let j = 0; j < hadesDatabase[i].requirements.length; j++) {
    let list = hadesDatabase[i].requirements
    boonList += "<li>" + list[j].boon + "</li>"
  }

  return boonList;

}

$(document).ready(function() {

  for (let i = 0; i < hadesDatabase.length; i++) {
    $("#accordionPanelsStayOpenExample").append(
      `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${i}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${i}">
            ${hadesDatabase[i].prophecy}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${i}">
          <div class="accordion-body">
            <ol>
              ${getBoon(i)}
            </ol>
          </div>
        </div>
      </div>`
    )
  }
});


const hadesDatabase = [
  {
    prophecy: "Fully Loaded",
    requirements: [
      {
        boon: "Support Fire",
        needs: ["Deadly Strike", "Deadly Flourish", "True Shot", "Hunter Dash", "Artemis' Aid", "Pressure Points"]
      },
      {
        boon: "Exit Wounds",
        needs: ["Crush Shot", "True Shot", "Phalanx Shot", "Flood Shot", "Electric Shot"]
      },
      {
        boon: "Pressure Points"
      }
    ]
  },
  {
    prophecy: "Divine Protection",
    requirements: [
      {
        boon: "Brilliant Riposte",
        needs: ["Divine Strike", "Divine Flourish", "Divine Dash", "Holy Shield"]
      }
    ]
  },
  {
    prophecy: "Vicious Cycle",
    requirements: [
      {
        boon: "Black Metal or Engulfing Vortex",
        needs: ["Slicing Flare", "Slicing Shot", "Blade Dash", "Ares' Aid"]
      }
    ]
  },
  {
    prophecy: "Greater Recall",
    requirements: [
      {
        boon: "Infernal Soul Mirror Ability"
      },
      {
        needs: ["Flurry Cast", "Quick Reload", "Lambent Plume"]
      }
    ]
  }
]