$(document).ready(function() {

  for (let i = 0; i < hadesDatabase.length ; i++) {
    $("#accordionPanelsStayOpenExample").append(
      `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${i}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${i}">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${i}">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
  }
]