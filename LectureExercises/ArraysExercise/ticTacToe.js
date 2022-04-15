function solve(moves)
{
    let board=[[false, false, false],
    [false, false, false],
    [false, false, false]];
   
    let isPlayerX=true;

    for(let i=0;i<moves.length;i++)
    {
        let currentMove=moves[i].split(' ');
        let row=Number(currentMove[0]);
        let coll=Number(currentMove[1]);

        if(board[row][coll] !== false)
        {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
         
        board[row][coll]= isPlayerX ? 'X':'O';
        isPlayerX=!isPlayerX;

        let winner=IsGameHasWinner(board);

        if(winner!== '')
        {
            console.log(`Player ${winner} wins!`);
            PrintBoard(board);
            return;
        }

        if(IsGameEnded(board))
        {
            console.log('The game ended! Nobody wins :(');
            PrintBoard(board);
            return;
        }





    }


    function IsGameEnded(board)
    {
        
        for(let i=0;i<board.length;i++)
        {
            let isCurrentBoardPieceContainsFreeSpace=board[i].some(element=> element===false);

            if(isCurrentBoardPieceContainsFreeSpace)
            {
                return false;
            }
        }


        return true;
    }

    function IsGameHasWinner(board)
    { 
        let playerWinner='';

       for(let row=0;row<board.length;row++)
       {
           if(board[row][0] === board[row][1] &&
             board[row][1]===board[row][2] &&
             board[row][2] !==false)
             {
                return playerWinner = board[0][0];
                 
             }

             if(board[0][row]== board[1][row]&&
                board[1][row] === board[2][row]&&
                board[2][row]!== false)
                { 
                    return playerWinner = board[0][0];
                }

       }


       if(board[0][0]===board[1][1]&&
          board[1][1]===board[2][2]&&
          board[2][2]!== false)
          {
                return playerWinner = board[0][0];
          }

            if(board[0][2]===board[1][1]&&
                board[1][1]===board[2][0]&&
                board[2][0] !== false)
                {
                   return playerWinner = board[0][2];
                }

               return playerWinner;

    }

    function PrintBoard(board)
    {
        for(let i=0;i<board.length;i++)
        {
            console.log(board[i].join('\t'));
        }
    }

    
}

solve(
["0 0",
 "0 0",
 "1 1",
 "0 1",
 "1 2",
 "0 2",
 "2 2",
 "1 2",
 "2 2",
 "2 1"]

);