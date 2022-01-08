
puzzles[ nb_puzzles ] = "brendan/pieces_06x05.txt.js,Brendan 06x05".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_06x05.txt.js" ) {

board_w = 6;
board_h = 5;


pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,2,3".split( splitreg ); p++;
pieces[ p ] = "0,0,3,1".split( splitreg ); p++;
pieces[ p ] = "0,1,4,2".split( splitreg ); p++;
pieces[ p ] = "0,1,5,1".split( splitreg ); p++;
pieces[ p ] = "0,1,6,2".split( splitreg ); p++;
pieces[ p ] = "0,1,6,3".split( splitreg ); p++;
pieces[ p ] = "0,1,7,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,2".split( splitreg ); p++;
pieces[ p ] = "0,2,8,1".split( splitreg ); p++;
pieces[ p ] = "0,3,4,1".split( splitreg ); p++;
pieces[ p ] = "0,3,4,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,3".split( splitreg ); p++;
pieces[ p ] = "0,3,8,2".split( splitreg ); p++;
pieces[ p ] = "0,3,8,3".split( splitreg ); p++;
pieces[ p ] = "4,5,4,7".split( splitreg ); p++;
pieces[ p ] = "4,5,4,8".split( splitreg ); p++;
pieces[ p ] = "4,5,6,8".split( splitreg ); p++;
pieces[ p ] = "4,5,8,8".split( splitreg ); p++;
pieces[ p ] = "4,6,6,5".split( splitreg ); p++;
pieces[ p ] = "4,7,5,8".split( splitreg ); p++;
pieces[ p ] = "4,7,8,7".split( splitreg ); p++;
pieces[ p ] = "4,8,5,7".split( splitreg ); p++;
pieces[ p ] = "5,6,6,6".split( splitreg ); p++;
pieces[ p ] = "5,6,8,7".split( splitreg ); p++;
pieces[ p ] = "6,7,6,8".split( splitreg ); p++;
pieces[ p ] = "6,7,7,7".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

