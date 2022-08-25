/*

Copyright (C) 2019 Jef Bucas

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>

*/

// Eternity II - Javascript puzzle functions

// ----- Global variables

// Board
var board_conflicts = new Array();

// Vars
var nb_pieces = 0;
var nb_conflicts = 0;
var score = 0;
var max_score = 0;


function help() {
	console.log()
	console.log("=======[ How to use ]================================================================================")
	console.log()
	console.log("The URL takes the following parameters, either as part of the query string or the location hash")
	console.log("  o  puzzle       -> The name of the puzzle (currently:"+puzzle+")");
	console.log("  o  board_w      -> The width of the puzzle (currently:"+board_w+")");
	console.log("  o  board_h      -> The height of the puzzle (currently:"+board_h+")");
	console.log("  o  board_edges  -> The edges for all pieces ( a:0, b:1, ... ) ");
	console.log("  o  board_types  -> The type of each piece (a:None, b:Corner, c:Border, d:Center, e:Fixed) ; Optional");
	console.log("  o  board_pieces -> The piece numbers ; 3 digits integer for each piece ; Optional ");
	console.log("  o  board_custom -> A custom text displayed on each space, separated by * (eg:rotation); Optional ");
	console.log("  ----");
	console.log("  o  show_conflicts   -> 1 for true else false; Optional ");
	console.log("  o  show_piecenumber -> 1 for true else false; Optional ");
	console.log("  o  show_piecetype   -> 1 for true else false; Optional ");
	console.log("  o  show_coordinates -> 1 for true else false; Optional ");
	console.log()
	console.log("====================================================================================================")
	console.log()
	console.log("For example, try to paste:")
	console.log()
	console.log(puzzles_urls[0])
	console.log()
	console.log()
	console.log("=======[ Functions ]================================================================================")
	console.log("  o  export2c() : will print a C-style array")
	console.log("====================================================================================================")
	console.log()
	console.log("=======[ Shortcuts ]================================================================================")
	console.log("  o  space : toggle the menu")
	console.log("  o    c   : toggle the conflicts")
	console.log("  o    n   : toggle the pieces numbers")
	console.log("  o    t   : toggle the pieces types")
	console.log("  o    s   : toggle the score")
	console.log("  o    #   : toggle the coordinates")
	console.log("  o   1-9  : toggle the tiles")
	console.log("  o    h   : print help")
	console.log("====================================================================================================")
	console.log()
}


// If a piece is used multiple times, we use a negative number
function flag_duplicates() {
	board_pieces_conflict = new Array();
	for( s = 0; s < board_w*board_h; s ++)
		board_pieces_conflict[ s ] = 0;
	for( s = 0; s < board_w*board_h; s ++)
		board_pieces_conflict[board_pieces[ s ]] ++;
	for( s = 0; s < board_w*board_h; s ++) {
		if ( board_pieces_conflict[ s ] > 1 ) {
			for( s1 = 0; s1 < board_w*board_h; s1 ++) {
				if (board_pieces[ s1 ] == s)
					board_pieces[ s1 ] = -board_pieces[ s1 ];
			}
		}
	}
}

function readParameters( parameters ) {

	// Puzzle parameters
	puzzle = undefined;			// the puzzle name
	board_w = undefined;			// width
	board_h = undefined;			// height
	board_types = undefined;		// the type for each space on the board
	board_pieces = undefined;		// the piece for each space on the board
	board_edges = undefined;		// the edges for each space on the board
	board_custom = undefined;		// a custom text on each space
	puzzle_verified = false;		// puzzle pieces are verified

	// Get the variables from parameters
	if ( parameters[ "puzzle" ] !== undefined ) {
		puzzle = parameters[ "puzzle" ];
	}

	if ( parameters[ "board_w" ] !== undefined ) {
		board_w = parseInt(parameters[ "board_w" ]);
	}

	if ( parameters[ "board_h" ] !== undefined ) {
		board_h = parseInt(parameters[ "board_h" ]);
	}

	if ( parameters[ "board_types" ] !== undefined ) {
		board_types = new Array();
		for( s = 0; s < board_w*board_h; s ++)
			board_types[ s ]    = parameters[ "board_types" ].charCodeAt(s) - "a".charCodeAt(0); // encoded a..z (max 26 different types)
	}

	if ( parameters[ "board_pieces" ] !== undefined ) {
		board_pieces = new Array();
		for( s = 0; s < board_w*board_h; s ++) {
			board_pieces[ s ]    = parseInt(parameters[ "board_pieces" ].slice(s*3, s*3+3));
			//board_pieces[ s ]    = parseInt("0x" + parameters[ "board_pieces" ].slice(s*3, s*3+2), 16); // encoded on 3 hex for puzzles > 16x16
		}
		flag_duplicates();
	}

	if ( parameters[ "board_edges" ] !== undefined ) {
		board_edges = new Array();
		for( s = 0; s < board_w*board_h * 4; s ++)
			board_edges[ s ]    = parameters[ "board_edges" ].charCodeAt(s) - "a".charCodeAt(0); // encoded  abcd...xyz (max 26 different motifs)

		// sort the edges and the pieces to enable verification of the pieces
		var board_verify = new Array();
		for( s = 0; s < board_w*board_h; s ++) {
			var r = new Array();
			r[0] = parameters[ "board_edges" ].substr(s*4, 4);
			r[1] = r[0].substr(3,1)+r[0].substr(0,3);
			r[2] = r[1].substr(3,1)+r[1].substr(0,3);
			r[3] = r[2].substr(3,1)+r[2].substr(0,3);

			r.sort();
			board_verify[ s ] = r[0];
		}
		board_verify.sort();
		board_verify = board_verify.toString();

		complete_set = (( board_verify == E2_PIECES ) ||
		    ( board_verify == E2_PIECES_MOTIFS_ORDER_JEF ) || 
		    ( board_verify == E2_PIECES_MOTIFS_ORDER_JBLACKWOOD));


		partial_set = false;
		/*if (! complete_set) {
			partial_set = true;
			for( s = 0; s < board_w*board_h; s ++) {
				p = board_verify.substr(s*4, 4);
				if (p == "aaaa") continue;
				if (parameters[ "motifs_order" ] == "jef") {
					
				} else if ((parameters[ "motifs_order" ] == "marie") ||
				    (parameters[ "motifs_order" ] == "jblackwood")) {
				} else {
				}


		}*/

		if (complete_set || partial_set) {
			var clue = parameters[ "board_edges" ].substr(135*4,4);
			if ((clue == "sggl") || (clue == "vddo") || (clue == "ijjm")) {
				console.log( "Pieces Verified" );
				puzzle_verified = true;
			}else{
				console.log( "Pieces Verified but center clue is incorrect", clue );
			}

		} else {
			console.log( "Pieces NOT Verified" );
			console.log( board_verify );
		}
	}

	if ( parameters[ "board_custom" ] !== undefined ) {
		board_custom = parameters[ "board_custom" ].split("*");
		console.log(board_custom);
	}

	if ( parameters[ "motifs_order" ] !== undefined ) {
		if (parameters[ "motifs_order" ] == "jef") {
			for (i = 0; i < motifs_svg_definitions.length; ++i) {
				for (j = 0; j < motifs_svg_definitions_editor_mapping_jef.length; ++j) {
					if (motifs_svg_definitions[i][0] == motifs_svg_definitions_editor_mapping_jef[j][0]) {
						motifs_svg_definitions[i][0] = motifs_svg_definitions_editor_mapping_jef[j][1];
						break;
					}
				}
			}
		}
		if ((parameters[ "motifs_order" ] == "marie") ||
		    (parameters[ "motifs_order" ] == "jblackwood")) {
			for (i = 0; i < motifs_svg_definitions.length; ++i) {
				for (j = 0; j < motifs_svg_definitions_editor_mapping_marie.length; ++j) {
					if (motifs_svg_definitions[i][0] == motifs_svg_definitions_editor_mapping_marie[j][0]) {
						motifs_svg_definitions[i][0] = motifs_svg_definitions_editor_mapping_marie[j][1];
						break;
					}
				}
			}
		}
	}


	// If the pieces numbers were not provided in the parameters, we try to find them
	//if (puzzle_verified && (board_pieces === undefined)) {
	if (board_pieces === undefined) {

		var edges_translate={};
		for( i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i ++) {
			edges_translate[String.fromCharCode(i)] = String.fromCharCode(i);
		}

		if ((parameters[ "motifs_order" ] == "marie") ||
		    (parameters[ "motifs_order" ] == "jblackwood")) {
			for (i = 0; i < motifs_svg_definitions.length; ++i) {
				for (j = 0; j < motifs_svg_definitions_editor_mapping_marie.length; ++j) {
					if (motifs_svg_definitions[i][0] == motifs_svg_definitions_editor_mapping_marie[j][0]) {
						edges_translate[ String.fromCharCode("a".charCodeAt(0) + parseInt("0x"+motifs_svg_definitions[i][0])) ] = 
							String.fromCharCode("a".charCodeAt(0) + parseInt("0x"+ motifs_svg_definitions_editor_mapping_marie[j][1]));
					}
				}
			}
		}

		var TRANSLATED_E2_EDGES2PIECES = "";
		for (i = 0; i < E2_EDGES2PIECES[0].length; i ++) {
			TRANSLATED_E2_EDGES2PIECES += edges_translate[ E2_EDGES2PIECES[0][i] ];
		}

		board_pieces = new Array();
		for( s = 0; s < board_w*board_h; s ++) {
			var r = new Array();
			r[0] = parameters[ "board_edges" ].substr(s*4, 4);
			r[1] = r[0].substr(3,1)+r[0].substr(0,3);
			r[2] = r[1].substr(3,1)+r[1].substr(0,3);
			r[3] = r[2].substr(3,1)+r[2].substr(0,3);

			for( p = 0; p < board_w*board_h; p ++) {
				var e = new Array();
				e[0] = TRANSLATED_E2_EDGES2PIECES.substr(p*4, 4);
				e[1] = e[0].substr(3,1)+e[0].substr(0,3);
				e[2] = e[1].substr(3,1)+e[1].substr(0,3);
				e[3] = e[2].substr(3,1)+e[2].substr(0,3);
				if (
					(r[0] == e[0])||(r[1] == e[0])||(r[2]==e[0])||(r[3]==e[0])||
					(r[0] == e[1])||(r[1] == e[1])||(r[2]==e[1])||(r[3]==e[1])||
					(r[0] == e[2])||(r[1] == e[2])||(r[2]==e[2])||(r[3]==e[2])||
					(r[0] == e[3])||(r[1] == e[3])||(r[2]==e[3])||(r[3]==e[3])
					) {
						board_pieces[s] = parseInt(E2_EDGES2PIECES[1].substr(p*3,3),10);
						break;
					}
			}

		}
		flag_duplicates();
	}

	//console.log("Parameters:" + parameters);
	//console.log(board_w, board_h, board_edges);

	// If we only have a puzzle name, we try to match with a known name and redirect to it
	//console.log(puzzle, board_w, board_h);
	if (puzzle !== undefined) {
		if (board_w === undefined) {
			//console.log("youpi");
			
			for( var i = 0; i < puzzles_urls.length; i ++ ) {
				name = puzzles_urls[ i ].split("&")[0];
				name = name.split("=")[1];
				if (name == puzzle) {
					window.location=window.location.pathname+'#'+puzzles_urls[ i ];
					location.reload();
					//console.log("reloaded");
					break;
				}
			}
		}
	}

	if ( parameters[ "show_conflicts" ] !== undefined ) {
		show_conflicts = (parseInt(parameters[ "show_conflicts" ], 10) == 1);
	}

	if ( parameters[ "show_piecenumber" ] !== undefined ) {
		show_piecenumber =  (parseInt(parameters[ "show_piecenumber" ], 10) == 1);
	}

	if ( parameters[ "show_piecetype" ] !== undefined ) {
		show_piecetype =  (parseInt(parameters[ "show_piecetype" ], 10) == 1);
	}

	if ( parameters[ "show_coordinates" ] !== undefined ) {
		show_coordinates =  (parseInt(parameters[ "show_coordinates" ], 10) == 1);
	}

}


// ----- Init Puzzle
function init_puzzle( parameters ) {

	if ( parameters !== undefined )
		readParameters( parameters );

	nb_pieces = board_w * board_h;
	max_score = ((board_w * board_h) * 2) - ( board_w + board_h );	// get the max score

	initBoardConflicts();
	score = max_score - nb_conflicts;


	//help();

	//console.log("Score : "+ score+"/"+max_score);
}

// ----- Init the board conflicts
function initBoardConflicts() {

	nb_conflicts = 0;

	// Clean the array
	for( s = 0; s < board_w*board_h*4; s ++)
		board_conflicts[ s ] = false;

	// Go through all the space's right and down edges
	for( y = 0; y < board_h; y ++) 
	for( x = 0; x < board_w; x ++) {
		var s = x + y*board_w;
		var p_motif_right = board_edges[ s*4+EDGE_RIGHT ];
		var p_motif_down  = board_edges[ s*4+EDGE_DOWN ];

		if ( x != board_w-1 ) {
			var s_right = s+1;
			var p_right_motif_left = board_edges[ s_right*4+EDGE_LEFT ];

			if ( p_motif_right != p_right_motif_left ) {
				board_conflicts[ s      *4+EDGE_RIGHT ] = true;
				board_conflicts[ s_right*4+EDGE_LEFT  ] = true;
				nb_conflicts ++;
			} else {
				// In the case of empty spaces
				if ( p_motif_right == 0 ) {
					nb_conflicts ++;
				}
			}
		}

		if ( y != board_h-1 ) { 
			var s_down  = s+board_w;
			var p_down_motif_up = board_edges[ s_down*4+EDGE_UP ];
		
			if ( p_motif_down != p_down_motif_up ) {
				board_conflicts[ s     *4+EDGE_DOWN ] = true;
				board_conflicts[ s_down*4+EDGE_UP   ] = true;
				nb_conflicts ++;
			} else {
				// In the case of empty spaces
				if ( p_motif_down == 0 ) {
					nb_conflicts ++;
				}
			}
		}
	}
}

// ----- Export the board array
function export2c() {

	if (board_pieces !== undefined) {
		for( s = 0; s < board_w*board_h; s ++) {
			if ((board_pieces[s] !== undefined) && 
 				(board_edges[s*4+0]+board_edges[s*4+1]+board_edges[s*4+2]+board_edges[s*4+3] > 0)){
				console.log("{ "+s+", "+board_pieces[s]+" }," );
			}
		}
	}
}
