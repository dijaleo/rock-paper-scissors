function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    var random = Math.floor(Math.random() * choices.length);
    return choices[random];
}