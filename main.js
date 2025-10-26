// variables
window.onerror = function(message, source, lineno, colno, error) {
    let errorMessage = "An unknown error occurred.";

    if (message) {
        errorMessage = `An error occurred: ${message}`;
        if (source) errorMessage += `, from: ${source}`;
        if (lineno) errorMessage += `, at line: ${lineno}`;
        if (colno) errorMessage += `, column: ${colno}`;
    } else if (error && error.stack) {
        errorMessage = `An error occurred: ${error.message || "Unknown error"}\nStack: ${error.stack}`;
    }

    try {
        localStorage.setItem("errorMessage_mygame", errorMessage);
    } catch (e) {
    }

    if (!window.location.href.endsWith("error.html")) {
        window.location.replace("error.html");
    }

    return true;
};
let clicks = 0; 
let cps = 0; 
let multiplier = 1;
let exp = 0;
let explevel = 0;
let upgrade1cost = 10;
let building1cost = 50;
let upgrade2got = false;
let cpsmultiplier = 1;
let multimultiplier = 1;
let building2got = false;
let upgrade3got = false;
let assistscost = 10;
const newsquotes = [
  "Insert Meta Joke About Newstickers",
  "This game was made because I wanted to learn JavaScript.",
  "Constructive criticism required!",
  "Someone teach me how to make cookie clicker-esque CPS..",
  "And I thought this would be hard! Would be way easier if I didn't hardcode everything.."
];


// wait for dom content

document.addEventListener('DOMContentLoaded', function() {
    
    // variables in the dom content
    
    const clicksText = document.getElementById("clickstext");
    const multiText = document.getElementById("multitext");
    const mainButton = document.getElementById('mainbutton');
    const cpsText = document.getElementById('cpstext');
    const upgrade1 = document.getElementById('upgrade1');
        const upgrade2 = document.getElementById('upgrade2');
            const upgrade3 = document.getElementById('upgrade3');
    const building1 = document.getElementById('building1');
        const building2 = document.getElementById('building2');
    const newstickertext = document.getElementById('newsticker');
    const assistsinfo = document.getElementById('assistinfo');
    const assist1 = document.getElementById('assistupgrade1');



    
    // clicking the button
    
    if (mainButton) {
        mainButton.addEventListener('click', function() {

            clicks = clicks + 1 * multiplier;
        });
    } else {

        // send users to hell if the button isnt there
    }

    // handle the upgrades and buildings
    
    upgrade1.addEventListener('click', function() {
            if (clicks >= upgrade1cost) {
                multiplier++ * multimultiplier
                if (upgrade2) {
                            upgrade2.disabled = false
                upgrade2.innerHTML = `Get exponential MLT for 100 CLK`        
                }

                clicks = clicks - upgrade1cost
                upgrade1cost = upgrade1cost * 2
            };
        });

        
    upgrade2.addEventListener('click', function() {
            if (clicks >= 100) {
                                if (upgrade3) {
                            upgrade3.disabled = false
                upgrade3.innerHTML = `Unlock Assists for 3000 CLK`        
                }
                upgrade2got = true
                clicks = clicks - 100
                upgrade2.remove()
            };
        });

        upgrade3.addEventListener('click', function() {
            if (clicks >= 3000) {
                building3got = true;
                assist1.disabled = false;
                assistsinfo.innerHTML = "Optional additions that change the playstyle and cost MLT. Buying an assist makes the others cost tenfold."
                     assist1.innerHTML = `Remove the MAINBTN but 10x CPS and 2x MLT for ${assistscost} MLT`;
                clicks = clicks - 3000
                upgrade3.remove()
            };
        });

        building1.addEventListener('click', function() {
            if (clicks >= building1cost) {
                if (building2got) {
                    cps = cps + 1 * multiplier * cpsmultiplier;
                } else {
                cps++ * cpsmultiplier
                }
                                if (building2) {
                            building2.disabled = false
                building2.innerHTML = `Get MLT boosting CPS for 300 CLK`        
                }
                clicks = clicks - building1cost
                building1cost = building1cost * 2
                
            };
        });

            building2.addEventListener('click', function() {
            if (clicks >= 300) {
                building2got = true
                clicks = clicks - 300
                building2.remove()
            };
        });

    if (assist1) {
               assist1.addEventListener('click', function() {
            if (multiplier >= assistscost) {
                cpsmultiplier = 10
                multimultiplier = 2
                ++cps * 10
                ++multiplier * 2
                mainButton.remove()
                multiplier = multiplier - assistscost
                assist1.remove()
            };
        }); 
    }

    

    // constantly update the things that need updating

    const intervalId = setInterval(() => {
    clicksText.innerHTML = `CLK: ${clicks}`;
    multiText.innerHTML = `MLT: ${multiplier}`;
    upgrade1.innerHTML = `Get ${1 * multimultiplier} MLT for ${upgrade1cost} CLK`;
            if (upgrade3got === true) {
            assist1.innerHTML = `Remove the MAINBTN but 10x CPS and 2x MLT for ${assistscost} MLT`;
            
        };
    building1.innerHTML = `Get 1 CPS for ${building1cost} CLK`;
    cpsText.innerHTML = `CPS: ${cps}`;
        exp = exp / (90 / explevel)
}, 1);


    // news ticker
    const newsticker = setInterval(() => {
        
           var newstickerstring = Math.floor(Math.random() * 4);
           newstickertext.innerHTML = newsquotes[newstickerstring];
    

        
}, 10000);

    // cps

        const cpsfunc = setInterval(() => {
            clicks = clicks + cps   
       
                                if (upgrade2got) {
                            
           multiplier = Math.log(multiplier + clicks) * 1.25

            }
        
}, 1000);
    
});


function openTab(event, tab) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabbutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block"; 
  event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
