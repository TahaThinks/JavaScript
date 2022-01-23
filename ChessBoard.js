/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard. */

let size = 8;

let whiteTile = " ";
let blackTile = "#";

let tile1="";
let tile2="";

for(let i=0; i<size; i++)
{
    tile1+=whiteTile+blackTile;
    tile2+=blackTile+whiteTile;
}

for(rowIteration=0; rowIteration<(size/2); rowIteration++)
{
    console.log(tile1);
    console.log(tile2);
}