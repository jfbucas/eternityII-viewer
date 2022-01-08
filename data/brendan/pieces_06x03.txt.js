
puzzles[ nb_puzzles ] = "brendan/pieces_06x03.txt.js,Brendan 06x03".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_06x03.txt.js" ) {

board_w = 6;
board_h = 3;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,1,2".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,2,2".split( splitreg ); p++;
pieces[ p ] = "0,1,3,1".split( splitreg ); p++;
pieces[ p ] = "0,1,3,2".split( splitreg ); p++;
pieces[ p ] = "0,1,4,2".split( splitreg ); p++;
pieces[ p ] = "0,1,5,1".split( splitreg ); p++;
pieces[ p ] = "0,1,5,2".split( splitreg ); p++;
pieces[ p ] = "0,2,3,1".split( splitreg ); p++;
pieces[ p ] = "0,2,3,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,1".split( splitreg ); p++;
pieces[ p ] = "0,2,4,2".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "3,3,3,5".split( splitreg ); p++;
pieces[ p ] = "3,3,4,4".split( splitreg ); p++;
pieces[ p ] = "3,5,5,4".split( splitreg ); p++;
pieces[ p ] = "4,4,5,5".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

