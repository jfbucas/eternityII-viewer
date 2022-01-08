puzzles[ nb_puzzles ] = "tomy/pieces.txt.4x4.js,4x4".split( splitreg ); nb_puzzles++;

if ( puzzle == "tomy/pieces.txt.4x4.js" ) {

board_w = 4;
board_h = 4;

pieces[ p ] = "0,4,3,0".split( splitreg ); p++;
pieces[ p ] = "0,0,3,4".split( splitreg ); p++;
pieces[ p ] = "4,0,0,4".split( splitreg ); p++;
pieces[ p ] = "3,0,0,3".split( splitreg ); p++;
pieces[ p ] = "2,1,2,2".split( splitreg ); p++;
pieces[ p ] = "1,1,1,2".split( splitreg ); p++;
pieces[ p ] = "1,1,2,2".split( splitreg ); p++;
pieces[ p ] = "1,1,2,2".split( splitreg ); p++;
pieces[ p ] = "3,1,3,0".split( splitreg ); p++;
pieces[ p ] = "4,1,4,0".split( splitreg ); p++;
pieces[ p ] = "4,1,3,0".split( splitreg ); p++;
pieces[ p ] = "3,1,4,0".split( splitreg ); p++;
pieces[ p ] = "3,2,3,0".split( splitreg ); p++;
pieces[ p ] = "4,2,4,0".split( splitreg ); p++;
pieces[ p ] = "3,2,4,0".split( splitreg ); p++;
pieces[ p ] = "4,2,3,0".split( splitreg ); p++;

nb_pieces = p;
nb_fixed = f;

}
