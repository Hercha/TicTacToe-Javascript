// 5 parts

// anonymous function
window.onload = function() {
    // 1. Initial states
    var num, box, ctx, filled, symbol, winner, turn = 1, gameover = false
    
    filled = [false, false, false, false, false, false, false, false, false];
    symbol = ['', '', '', '', '', '', '', '', ''];
    winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    // 2. Newgame - event + function
    // Create a new game click event
    var n = document.getElementById("new");
    n.addEventListener("click", newGame);
    
    // Newgame function
    function newGame() {
        document.location.reload();
    }
}