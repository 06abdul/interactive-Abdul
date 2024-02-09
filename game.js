let currentScene = 1;

function makeChoice(choice) {
    const textElement = document.getElementById('text');
    const optionButtons = document.getElementById('option-buttons');

    if (currentScene === 1) {
        if (choice === 1) {
            textElement.innerHTML = 
            optionButtons.innerHTML = '<button class="btn" onclick="makeChoice(3)">Gå gjennom døren umiddelbart</button><button class="btn" onclick="makeChoice(4)">Utforsk nærliggende områder</button>';
        } else if (choice === 2) {
            textElement.innerHTML = "Utforsk nærliggende områder før du går gjennom døren.";
            optionButtons.innerHTML = '<button class="btn" onclick="makeChoice(5)">Finn en skjult tunnel</button><button class="btn" onclick="makeChoice(6)">Møt en mystisk skikkelse</button>';
        }
    } else if (currentScene === 2) {
        
    }
    
}