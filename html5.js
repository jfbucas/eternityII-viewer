/*

Copyright (C) 2019 Jef Bucas

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>

*/

// Eternity II - Javascript simple viewer interface



// HTML5 Canvas

// Elements
var canvas = undefined;
var controls = undefined;

// Interactivity
document.onkeypress=key_manager;

var show_conflicts = true;
var show_piecenumber = false;
var show_piecetype = false;
var show_tiles = [ false, false, false, false, false, false, false, false ];
var show_coordinates = false;
var show_motifs = [
	true, true, true, true,
	true, true, true, true,
	true, true, true, true,
	true, true, true, true,
	true, true, true, true,
	true, true, true, true,
	true, true, true, true,
	true, true, true, true 
	];
var show_log = false;

intervalId = null; 


var xmlns = "http://www.w3.org/2000/svg";

// Shortcuts
function $i(id) { return document.getElementById(id); }
function $c(code) { return String.fromCharCode(code); }

// Printing

// ----- Print score
function printInfo() {
	$i("Score").innerHTML = "Score " + score + " / " + max_score ;
	//window.document.title = "Eternity II - "+ puzzle + " - Score "+score;
}



// ----- Print one space of the puzzle 
function printSpace( space ) {

	var c_use = document.getElementById("space"+space+"R0");
	m = board_edges[ space*4 + EDGE_UP ]
	mx = String('00' + m.toString(16,2).toLowerCase()).slice(-2)
	c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
	c_use.setAttributeNS( null, 'visibility', (show_motifs[m]?"visible":"hidden") );

	var c_use = document.getElementById("space"+space+"R1");
	m = board_edges[ space*4 + EDGE_RIGHT ]
	mx = String('00' + m.toString(16,2).toLowerCase()).slice(-2)
	c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
	c_use.setAttributeNS( null, 'visibility', (show_motifs[m]?"visible":"hidden") );

	var c_use = document.getElementById("space"+space+"R2");
	m = board_edges[ space*4 + EDGE_DOWN ]
	mx = String('00' + m.toString(16,2).toLowerCase()).slice(-2)
	c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
	c_use.setAttributeNS( null, 'visibility', (show_motifs[m]?"visible":"hidden") );

	var c_use = document.getElementById("space"+space+"R3");
	m = board_edges[ space*4 + EDGE_LEFT ]
	mx = String('00' + m.toString(16,2).toLowerCase()).slice(-2)
	c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
	c_use.setAttributeNS( null, 'visibility', (show_motifs[m]?"visible":"hidden") );

	// Piece Type
	if (board_types !== undefined) {
		var c_use = document.getElementById("piecetype"+space);
		/*switch (board_types[ space ]) {
			case TYPE_CORNER: c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#cornertype" ); break;
			case TYPE_BORDER: c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#bordertype" ); break;
			case TYPE_CENTER: c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#centertype" ); break;
		}*/
		if ((board_types[ space ] & TYPE_CORNER) != 0) c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#cornertype" );
		if ((board_types[ space ] & TYPE_BORDER) != 0) c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#bordertype" );
		if ((board_types[ space ] & TYPE_CENTER) != 0) c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#centertype" );
		if ((board_types[ space ] & TYPE_FIXED ) != 0) c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#fixedtype" );
		c_use.setAttributeNS( null, 'visibility', (show_piecetype?"visible":"hidden") );
	}

	// Piece Conflicts
	var c0 = document.getElementById("conflict"+space+"R0");
	var c1 = document.getElementById("conflict"+space+"R1");
	var c2 = document.getElementById("conflict"+space+"R2");
	var c3 = document.getElementById("conflict"+space+"R3");
	c0.setAttributeNS( null, 'visibility', ((show_conflicts && board_conflicts[ space*4+EDGE_UP    ])?"visible":"hidden" ));
	c1.setAttributeNS( null, 'visibility', ((show_conflicts && board_conflicts[ space*4+EDGE_RIGHT ])?"visible":"hidden" ));
	c2.setAttributeNS( null, 'visibility', ((show_conflicts && board_conflicts[ space*4+EDGE_DOWN  ])?"visible":"hidden" ));
	c3.setAttributeNS( null, 'visibility', ((show_conflicts && board_conflicts[ space*4+EDGE_LEFT  ])?"visible":"hidden" ));

	// Piece Number overlay and text
	var c_use = document.getElementById("piecenumberoverlay"+space);
	c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#darkoverlay" );
	c_use.setAttributeNS( null, 'visibility', (show_piecenumber?"visible":"hidden") );
	if (board_pieces !== undefined) {
		// Negative numbers will be in black
		if (board_pieces[space] >= 0) {
			var c_use = document.getElementById("piecenumber"+space);
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#piecenumbertext"+board_pieces[space] );
			c_use.setAttributeNS( null, 'visibility', (show_piecenumber?"visible":"hidden") );
		} else {
			var c_use = document.getElementById("piecenumber"+space);
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#piecenumberconflicttext"+(-board_pieces[space] ));
			c_use.setAttributeNS( null, 'visibility', ((show_conflicts||show_piecenumber)?"visible":"hidden") );
		}
	}

	// Custom text
	if (board_custom !== undefined) {
		var c_use = document.getElementById("piecenumberoverlay"+space);
		c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#darkoverlay" );
		c_use.setAttributeNS( null, 'visibility', "visible" );
		var c_use = document.getElementById("customspace"+space);
		c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#customspacetext"+space );
		c_use.setAttributeNS( null, 'visibility', "visible" );
	}
}

// ----- Print Board
function printBoard() {
	for( s = 0; s < board_w*board_h; s ++)
		printSpace( s );

	for (n = 0; n < 8; n++) {
		var b = (show_tiles[n]?"visible":"hidden");
		var tl = $i("tiles"+(1<<n));
		var tt = $i("tiles"+(1<<n)+"text");
		tl.setAttributeNS( null, 'visibility', b );
		tt.setAttributeNS( null, 'visibility', b );
	}
	
	canvas = $i("Board");
	if (show_coordinates) {
		canvas.setAttributeNS( null, "viewBox" , "-150 -150 "+ ((256*board_w)+300) + " " + ((256*board_h)+300));
	} else {
		canvas.setAttributeNS( null, "viewBox" , "-32 -32 "+ ((256*board_w)+64) + " " + ((256*board_h)+64));
	}
}

// ----- Print Screen
function printScreen() {

	printBoard();

	if ( score == max_score ) {

	}
}



// HTML5

// ----- Build page and print contents
function build_page( action ) {

	//if (typeof action === 'undefined') { action = 'load'; }

	// Action is about starting
	if ( action == 'load' ) {

		// Read parameters from URL, if any
		url_parameters = extractUrlParameters();

		// if no parameters, we go to first URL
		if ( url_parameters[ "board_w" ] === undefined ) {
			window.location=window.location.pathname+'#'+puzzles_urls[0];
			location.reload(false);
		}

		// Init the puzzle
		init_puzzle( url_parameters )

		// New puzzle means new board
		if ( canvas != undefined )
			if ((canvas.board_w != board_w) || (canvas.board_h != board_h)) 
				document.body.removeChild(canvas);
	}


/*
	if ( !$i("pageTable") ) {
		var pageTable = document.createElement('div');
		pageTable.setAttribute("id", "pageTable");
		document.body.appendChild(pageTable); 
	} else {
		var pageTable = $i("pageTable");
	}
<div class="table">

    <div class="column first">Name:</div>
    <div class="column">test1</div>

    <div class="column first">Address:</div>
    <div class="column">test2</div>

</div>
*/
	// Action is about resize event
	//if (( action == 'resize' ) || ( action == 'load' )) {
	new_h = window.innerHeight;
	new_w = window.innerWidth;

	/*if ( !$i("Title") ) {
		var title = document.createElement('div');
		title.setAttribute("id", "Title");
		title.setAttribute("onclick", "window.location.hash='';window.location.reload()");
		document.body.appendChild(title); 
	}*/

	if ( !$i("Title-Horizontal") ) {
		var title = document.createElement('div');
		title.setAttribute("id", "Title-Horizontal");
		title.setAttribute("onclick", "window.location.hash='#puzzle=Joshua_Blackwood_470';window.location.reload()");
		var verified = document.createElement('div');
		verified.setAttribute("id", "Verified-Horizontal-Before");
		verified.setAttribute("class", "verified");
		verified.style.visibility = (puzzle_verified?"hidden":"visible");
		title.appendChild(verified); 
		var verified = document.createElement('div');
		verified.setAttribute("id", "Verified-Horizontal-After");
		verified.setAttribute("class", "verified");
		verified.style.visibility = (puzzle_verified?"hidden":"visible");
		title.appendChild(verified); 
		document.body.appendChild(title); 
	}

	if ( !$i("Title-Vertical") ) {
		var title = document.createElement('div');
		title.setAttribute("id", "Title-Vertical");
		title.setAttribute("onclick", "window.location.hash='#puzzle=Joshua_Blackwood_470';window.location.reload()");
		var verified = document.createElement('div');
		verified.setAttribute("id", "Verified-Vertical-Before");
		verified.setAttribute("class", "verified");
		verified.style.visibility = (puzzle_verified?"hidden":"visible");
		title.appendChild(verified); 
		var verified = document.createElement('div');
		verified.setAttribute("id", "Verified-Vertical-After");
		verified.setAttribute("class", "verified");
		verified.style.visibility = (puzzle_verified?"hidden":"visible");
		title.appendChild(verified); 
		document.body.appendChild(title); 
	}

	// Position the title and Verified symbols
	title = $i('Title-Horizontal');
	title_horizontal_width = window.innerWidth*2/3;
	title_horizontal_height = title_horizontal_width/9;
	title.style.height = title_horizontal_height+"px";
	title.style.width = title_horizontal_width+"px";
	title.style.backgroundSize = title_horizontal_width+"px"+" "+title_horizontal_height+"px";
	title.style.left = (window.innerWidth*1/6) + "px";

	title = $i('Title-Vertical');
	title_vertical_height = window.innerHeight*2/3;
	title_vertical_width = title_vertical_height/9;
	title.style.height = title_vertical_height+"px";
	title.style.width = title_vertical_width+"px";
	title.style.backgroundSize = title_vertical_width+"px"+" "+title_vertical_height+"px";
	title.style.top = (window.innerHeight*1/6) + "px";

	verified = $i('Verified-Horizontal-Before');
	verified.style.height = verified.style.width = verified.style.backgroundSize = title_horizontal_height /2+"px";
	verified.style.top = title_horizontal_height/3 + "px";
	verified.style.left = "-" + title_horizontal_height/1.5 + "px";
	verified = $i('Verified-Horizontal-After');
	verified.style.height = verified.style.width = verified.style.backgroundSize = title_horizontal_height /2+"px";
	verified.style.top = title_horizontal_height/3 + "px";
	verified.style.right = "-" + title_horizontal_height/1.5 + "px";
	verified = $i('Verified-Vertical-Before');
	verified.style.height = verified.style.width = verified.style.backgroundSize = title_vertical_width /2+"px";
	verified.style.bottom = "-" + title_vertical_width/1.5 + "px";
	verified.style.left = title_vertical_width/3 + "px";
	verified = $i('Verified-Vertical-After');
	verified.style.height = verified.style.width = verified.style.backgroundSize = title_vertical_width /2+"px";
	verified.style.top = "-" + title_vertical_width/2 + "px";
	verified.style.left = title_vertical_width/3 + "px";

	board_margin = 20;
	board_border = 10;
	board_position_top = 0;
	board_position_right = 0;
	board_position_bottom = 0;
	board_position_left = 0;

	if (new_h < new_w) {
		// In a wide screen
		c=$i('Title-Vertical');
		c.style.display = "block";
		new_board_h = window.innerHeight - (board_margin+board_border)*2;
		new_board_w = window.innerWidth  - title_vertical_width - (board_margin+board_border)*2;
		new_board_size = (new_board_h < new_board_w)?new_board_h:new_board_w;
		board_position_top   = board_position_bottom = board_margin;
		board_position_right = board_position_left = ((window.innerWidth-new_board_size)/2)-board_margin;

		c=$i('Title-Horizontal');
		c.style.display = "none";

	} else {
		// In a portrait screen
		c=$i('Title-Horizontal');
		c.style.display = "block";
		new_board_h = window.innerHeight - title_horizontal_height - (board_margin+board_border)*2;
		new_board_w = window.innerWidth  - (board_margin+board_border)*2;
		new_board_size = (new_board_h < new_board_w)?new_board_h:new_board_w;
		board_position_top    = (window.innerHeight/2)+(title_horizontal_height/2)-(new_board_size/2);
		board_position_bottom = (window.innerHeight/2)-(title_horizontal_height/2)-(new_board_size/2);
		board_position_right  = board_position_left = (window.innerWidth/2)-(new_board_size/2);

		c=$i('Title-Vertical');
		c.style.display = "none";
	}


	board_position_inset = board_position_top+"px "+board_position_right+"px "+board_position_bottom+"px "+board_position_left+"px";




	if ( action == 'resize' ) {
		canvas = $i('Board');
		canvas.setAttribute( "width" , new_board_size);
		canvas.setAttribute( "height", new_board_size);

		canvas.style.inset  = board_position_inset;
		
		controls = $i('Controls');
		controls.style.height = (window.innerHeight-40) + "px";

	}


	// Create the HTML structure dynamicaly


	if ( !$i("Controls") ) {
		controlsshow = document.createElement('div');
		controlsshow.setAttribute("id", "ControlsShow");
		controlsshow.setAttribute("onclick", "toggleControls();");
		controlsshow.innerHTML = "&#9776;";
		document.body.appendChild(controlsshow); 

		controls = document.createElement('div');
		controls.setAttribute("id", "Controls");
		/*controls.setAttribute("onclick", "toggleControls();");*/
		controls.style.height = (window.innerHeight-40) + "px";

		if ( !$i("Buttons") ) {
			var buttons_elem = document.createElement('div');
			buttons_elem.setAttribute("id", "Buttons");

			var select_puzzle = document.createElement('select'); 
			select_puzzle.setAttribute("id", "Select_Puzzle");
			select_puzzle.setAttribute("class", "select_puzzle");
			select_puzzle.setAttribute("onchange", "if (this.value){window.location=window.location.pathname+'#'+this.value;location.reload(false);}");

			for( var i = 0; i < puzzles_urls.length; i ++ ) {
				var select_option = document.createElement('option'); 
				name = puzzles_urls[ i ].split("&")[0];
				name = name.split("=")[1];
				if (name == puzzle) {
					select_option.setAttribute("selected","");
				}
				select_option.setAttribute("value", puzzles_urls[ i ]);
				select_option.innerHTML = name.replace(/_/g, " ");
				select_puzzle.appendChild(select_option);
			}

			// ---- Controls
			var button_conflicts_elem = document.createElement('input');
			button_conflicts_elem.setAttribute("id", "ButtonToggleConflicts");
			button_conflicts_elem.setAttribute("class", "checkbox");
			button_conflicts_elem.setAttribute("type", "checkbox");
			if (show_conflicts)
			button_conflicts_elem.setAttribute("checked", "True");
			button_conflicts_elem.setAttribute("onClick", "toggleConflicts()");

			var button_piecenumber_elem = document.createElement('input');
			button_piecenumber_elem.setAttribute("id", "ButtonTogglePieceNumber");
			button_piecenumber_elem.setAttribute("class", "checkbox");
			button_piecenumber_elem.setAttribute("type", "checkbox");
			if (show_piecenumber)
			button_piecenumber_elem.setAttribute("checked", "True");
			button_piecenumber_elem.setAttribute("value", "Show Piece Number");
			button_piecenumber_elem.setAttribute("onClick", "togglePieceNumber()");

			var button_piecetype_elem = document.createElement('input');
			button_piecetype_elem.setAttribute("id", "ButtonTogglePieceType");
			button_piecetype_elem.setAttribute("class", "checkbox");
			button_piecetype_elem.setAttribute("type", "checkbox");
			if (show_piecetype)
			button_piecetype_elem.setAttribute("checked", "True");
			button_piecetype_elem.setAttribute("onClick", "togglePieceType()");

			var button_coordinates_elem = document.createElement('input');
			button_coordinates_elem.setAttribute("id", "ButtonToggleCoordinates");
			button_coordinates_elem.setAttribute("class", "checkbox");
			button_coordinates_elem.setAttribute("type", "checkbox");
			if (show_coordinates)
			button_coordinates_elem.setAttribute("checked", "True");
			button_coordinates_elem.setAttribute("onClick", "toggleCoordinates()");

			var button_tiles_elem = [];
			for (n = 0; n < 8 ; n++) {
				button_tiles_elem[n] = document.createElement('input');
				button_tiles_elem[n].setAttribute("id", "ButtonToggleTiles"+(1<<n));
				button_tiles_elem[n].setAttribute("class", "checkbox");
				button_tiles_elem[n].setAttribute("type", "checkbox");
				button_tiles_elem[n].setAttribute("onClick", "toggleTiles("+n+")");
			}

			/*var button_get_elem = document.createElement('input');
			button_get_elem.setAttribute("id", "ButtonToggleGet");
			button_get_elem.setAttribute("class", "button");
			button_get_elem.setAttribute("type", "button");
			button_get_elem.setAttribute("value", "Get");
			button_get_elem.setAttribute("onClick", "get_new_parameters()");*/

			var paste_elem = document.createElement('textarea');
			paste_elem.setAttribute("id", "Paster");
			paste_elem.setAttribute("wrap", "off");
			paste_elem.setAttribute("placeHolder", "Paste Here");
			paste_elem.setAttribute("spellcheck", "false");
			//paste_elem.setAttribute("onpaste", "document.pasted_text=this; setTimeout(function(){window.location.hash='e2.html'+document.pasted_text.value.replace(/(\\r\\n|\\n|\\r)/gm, \"\");window.location.reload();}, 100);");
			paste_elem.setAttribute("onpaste", "document.pasted_text=this; setTimeout(function(){window.location.hash='#'+document.pasted_text.value.replace(/(\\r\\n|\\n|\\r)/gm, \"\");window.location.reload();}, 100);");



			// Combine elements together
			var div_elem = document.createElement("div"); 
			div_elem.setAttributeNS( null, "id", "ControlsClose");
			div_elem.setAttribute("onclick", "toggleControls();");
			div_elem.innerHTML = "&#8598;";
			div_elem.innerHTML = "&#8689;";
			buttons_elem.appendChild(div_elem); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Select puzzle";
			div_elem.appendChild(select_puzzle); 
			buttons_elem.appendChild(div_elem); 
			buttons_elem.appendChild(document.createElement('br')); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Conflicts";
			div_elem.appendChild(button_conflicts_elem); 
			buttons_elem.appendChild(div_elem); 
			//buttons_elem.appendChild(button_conflicts_elem); 
			buttons_elem.appendChild(document.createElement('br')); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Numbers";
			div_elem.appendChild(button_piecenumber_elem); 
			buttons_elem.appendChild(div_elem); 
			buttons_elem.appendChild(document.createElement('br')); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Types";
			div_elem.appendChild(button_piecetype_elem); 
			buttons_elem.appendChild(div_elem); 
			buttons_elem.appendChild(document.createElement('br')); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Coordinates";
			div_elem.appendChild(button_coordinates_elem); 
			buttons_elem.appendChild(div_elem); 
			buttons_elem.appendChild(document.createElement('br')); 

			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "Tiles";
			div_elem.appendChild(document.createElement('br')); 
			for (n = 0; n < 8 ; n++) {
				div_elem.appendChild(button_tiles_elem[n]); 
			}
			buttons_elem.appendChild(div_elem); 

			//buttons_elem.appendChild(document.createElement('br')); 
			buttons_elem.appendChild(document.createElement('br')); 
			/*buttons_elem.appendChild(button_get_elem); 
			buttons_elem.appendChild(document.createElement('br')); 
			buttons_elem.appendChild(document.createElement('br')); */
			buttons_elem.appendChild(paste_elem); 
			buttons_elem.appendChild(document.createElement('br')); 


			controls.appendChild(buttons_elem); 


		}

		document.body.appendChild(controls); 
	}

	if ( !$i("Score") ) {
		var score_elem = document.createElement('div');
		score_elem.setAttribute("id", "Score");
		score_elem.setAttribute("class", "score");
		score_elem.innerHTML = "Score " + score + " / " + max_score ;
		score_elem.style.visibility = (puzzle_verified?"visible":"hidden");
		score_elem.style.display = "block";

		document.body.appendChild(score_elem); 
	}

	if ( !$i("Board") ) {

		// Create the SVG canvas
		canvas = document.createElementNS( xmlns, 'svg'); 
		canvas.setAttributeNS( null, "id", "Board");
		canvas.setAttributeNS( null, "class", "board");
		//canvas.setAttributeNS( null, "viewBox" , "0 0 "+ 256*board_w + " " + 256*board_h);
		canvas.setAttributeNS( null, "viewBox" , "-50 -50 "+ ((256*board_w)+100) + " " + ((256*board_h)+100));
		canvas.setAttribute( "width" , new_board_size);
		canvas.setAttribute( "height", new_board_size);

		canvas.style.inset  = board_position_inset;
		
		// Coordinates Numbers
		for (x = 0; x < board_w; x++ ) {
			var coordtextsvg = document.createElementNS( xmlns, 'text'); 
			coordtextsvg.setAttributeNS( null, 'id', "coordtextsvgX"+x );
			coordtextsvg.setAttributeNS( null, "font-size", "96");
			coordtextsvg.setAttributeNS( null, "fill", "white");
			coordtextsvg.setAttributeNS( null, "opacity", "0.6");
			coordtextsvg.setAttributeNS( null, "stroke", "black");
			coordtextsvg.setAttributeNS( null, "stroke-width", "2");
			coordtextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			coordtextsvg.setAttributeNS( null, "text-anchor", "middle");
			coordtextsvg.setAttributeNS( null, "dominant-baseline", "middle");
			//coordtextsvg.setAttributeNS( null, 'visibility', "hidden" );
			var coordtextspansvg = document.createElementNS( xmlns, 'tspan'); 
			coordtextspansvg.setAttributeNS( null, 'x', x*256 + 128 );
			coordtextspansvg.setAttributeNS( null, 'y', -80 );
			coordtextspansvg.textContent = x+1;
			coordtextsvg.appendChild( coordtextspansvg );
			canvas.appendChild( coordtextsvg );
		}
		for (y = 0; y < board_h; y++ ) {
			var coordtextsvg = document.createElementNS( xmlns, 'text'); 
			coordtextsvg.setAttributeNS( null, 'id', "coordtextsvgY"+y );
			coordtextsvg.setAttributeNS( null, "font-size", "96");
			coordtextsvg.setAttributeNS( null, "fill", "white");
			coordtextsvg.setAttributeNS( null, "opacity", "0.6");
			coordtextsvg.setAttributeNS( null, "stroke", "black");
			coordtextsvg.setAttributeNS( null, "stroke-width", "2");
			coordtextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			coordtextsvg.setAttributeNS( null, "text-anchor", "middle");
			coordtextsvg.setAttributeNS( null, "dominant-baseline", "middle");
			//coordtextsvg.setAttributeNS( null, 'visibility', "hidden" );
			var coordtextspansvg = document.createElementNS( xmlns, 'tspan'); 
			coordtextspansvg.setAttributeNS( null, 'x', -80 );
			coordtextspansvg.setAttributeNS( null, 'y', y*256 + 150 );
			coordtextspansvg.textContent = $c('A'.charCodeAt(0)+y);
			coordtextsvg.appendChild( coordtextspansvg );
			canvas.appendChild( coordtextsvg );
		}

		/*canvas.style.inset  = undefined;
		canvas.style.top    = (board_position_top    != null )?board_position_top:undefined;
		canvas.style.right  = (board_position_right  != null )?board_position_right:undefined;
		canvas.style.bottom = (board_position_bottom != null )?board_position_bottom:undefined;
		canvas.style.left   = (board_position_left   != null )?board_position_left:undefined;*/
		/*if (board_position_top    != null ) canvas.style.top    = board_position_top;
		if (board_position_right  != null ) canvas.style.right  = board_position_right;
		if (board_position_bottom != null ) canvas.style.bottom = board_position_bottom;
		if (board_position_left   != null ) canvas.style.left   = board_position_left;*/
		
		// Define the inset-light-shadow filter
		filter = document.createElementNS( xmlns, 'filter');
		filter.setAttribute( "id", "inset-light-shadow");
		filter.setAttribute( "x", "0");
		filter.setAttribute( "y", "0");

		fcomponent = document.createElementNS( xmlns, 'feOffset');
		fcomponent.setAttribute( "dx", "-1");
		fcomponent.setAttribute( "dy", "-1");
		fcomponent.setAttribute( "result", "offsetOut");
		filter.appendChild( fcomponent );
		
		fcomponent = document.createElementNS( xmlns, 'feGaussianBlur');
		fcomponent.setAttribute( "stdDeviation", "4");
		fcomponent.setAttribute( "in", "offsetOut");
		filter.appendChild( fcomponent );

		canvas.appendChild( filter );

		var c_defs = document.createElementNS( xmlns, 'defs' );
		
		// Define papper pattern
		patt = document.createElementNS( xmlns, 'pattern' );
		patt.setAttribute( "id", "papier");
		patt.setAttribute( "width", "256");
		patt.setAttribute( "height", "256");
		patt.setAttribute( "patternUnits", "userSpaceOnUse");

		pattimg = document.createElementNS( xmlns, 'image' );
		// https://www.transparenttextures.com/
		pattimg.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "img/paper.png");
		pattimg.setAttribute( "x", "0");
		pattimg.setAttribute( "y", "0");
		pattimg.setAttribute( "width", "256");
		pattimg.setAttribute( "height", "256");

		patt.appendChild( pattimg );
		c_defs.appendChild( patt );

		
		// Define the motifs
		var c_clip_path = document.createElementNS( xmlns, 'clipPath' );
		c_clip_path.setAttributeNS( null, "id", "motifClip" );
		var c_clip_path_bg = document.createElementNS( xmlns, 'path' );
		c_clip_path_bg.setAttributeNS( null, "d", "m0,0 l -128,128 l 0,-256  l 128,128");
		c_clip_path.appendChild( c_clip_path_bg );
		c_defs.appendChild( c_clip_path );

		for (index = 0; index < motifs_svg_definitions.length; ++index) {
			m = motifs_svg_definitions[ index ];

			// ---- Normal motif
			var c_gm = document.createElementNS( xmlns, 'g' );
			c_gm.setAttributeNS( null, "id", "motif"+m[ 0 ]);

			// Background
			var c_gm_bg = document.createElementNS( xmlns, 'path' );
			c_gm_bg.setAttributeNS( null, "d", "m0,0 l -128,128 l 0,-256  l 128,128");
			c_gm_bg.setAttributeNS( null, "fill", m[ 1 ]);
			c_gm_bg.setAttributeNS( null, "stroke", m[ 2 ]);
			c_gm_bg.setAttributeNS( null, "stroke-width", "0");
			c_gm.appendChild( c_gm_bg );

			if (m[ 3 ] != null) {
				// Path
				var c_gm_path = document.createElementNS( xmlns, 'path' );
				c_gm_path.setAttributeNS( null, "d", m[ 3 ]);
				c_gm_path.setAttributeNS( null, "fill", m[ 4 ]);
				c_gm_path.setAttributeNS( null, "stroke", m[ 5 ]);
				c_gm_path.setAttributeNS( null, "stroke-width", "1");
				c_gm_path.setAttributeNS( null, "clip-path", "url(#motifClip)");
				c_gm.appendChild( c_gm_path );
			}

			c_defs.appendChild( c_gm );
		}



		// Corner Type
		var cornertypesvg = document.createElementNS( xmlns, 'rect'); 
		cornertypesvg.setAttributeNS( null, "id", "cornertype");
		cornertypesvg.setAttributeNS( null, "width" , "256");
		cornertypesvg.setAttributeNS( null, "height", "256");
		cornertypesvg.setAttributeNS( null, "fill", "blue");
		cornertypesvg.setAttributeNS( null, "fill-opacity", "0.5");
		cornertypesvg.setAttributeNS( null, "stroke-opacity", "0.9");
		cornertypesvg.setAttributeNS( null, 'x', 0 );
		cornertypesvg.setAttributeNS( null, 'y', 0 );
		cornertypesvg.setAttributeNS( null, 'rx', 0 );
		cornertypesvg.setAttributeNS( null, 'ry', 0 );
		c_defs.appendChild( cornertypesvg );

		// Border Type
		var bordertypesvg = document.createElementNS( xmlns, 'rect'); 
		bordertypesvg.setAttributeNS( null, "id", "bordertype");
		bordertypesvg.setAttributeNS( null, "width" , "256");
		bordertypesvg.setAttributeNS( null, "height", "256");
		bordertypesvg.setAttributeNS( null, "fill", "green");
		bordertypesvg.setAttributeNS( null, "fill-opacity", "0.5");
		bordertypesvg.setAttributeNS( null, "stroke-opacity", "0.9");
		bordertypesvg.setAttributeNS( null, 'x', 0 );
		bordertypesvg.setAttributeNS( null, 'y', 0 );
		bordertypesvg.setAttributeNS( null, 'rx', 0 );
		bordertypesvg.setAttributeNS( null, 'ry', 0 );
		c_defs.appendChild( bordertypesvg );

		// Center Type
		var centertypesvg = document.createElementNS( xmlns, 'rect'); 
		centertypesvg.setAttributeNS( null, "id", "centertype");
		centertypesvg.setAttributeNS( null, "width" , "256");
		centertypesvg.setAttributeNS( null, "height", "256");
		centertypesvg.setAttributeNS( null, "fill", "yellow");
		centertypesvg.setAttributeNS( null, "fill-opacity", "0.5");
		centertypesvg.setAttributeNS( null, "stroke-opacity", "0.9");
		centertypesvg.setAttributeNS( null, 'x', 0 );
		centertypesvg.setAttributeNS( null, 'y', 0 );
		centertypesvg.setAttributeNS( null, 'rx', 0 );
		centertypesvg.setAttributeNS( null, 'ry', 0 );
		c_defs.appendChild( centertypesvg );

		// Fixed Type
		var fixedtypesvg = document.createElementNS( xmlns, 'rect'); 
		fixedtypesvg.setAttributeNS( null, "id", "fixedtype");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "fill", "purple");
		fixedtypesvg.setAttributeNS( null, "fill-opacity", "0.5");
		fixedtypesvg.setAttributeNS( null, "stroke-opacity", "0.9");
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		fixedtypesvg.setAttributeNS( null, 'rx', 0 );
		fixedtypesvg.setAttributeNS( null, 'ry', 0 );
		c_defs.appendChild( fixedtypesvg );


		// Dark overlay
		var fixedtypesvg = document.createElementNS( xmlns, 'rect'); 
		fixedtypesvg.setAttributeNS( null, "id", "darkoverlay");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "fill", "black");
		fixedtypesvg.setAttributeNS( null, "fill-opacity", "0.5");
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		fixedtypesvg.setAttributeNS( null, 'rx', 0 );
		fixedtypesvg.setAttributeNS( null, 'ry', 0 );
		c_defs.appendChild( fixedtypesvg );

		// Texture overlay
		var fixedtypesvg = document.createElementNS( xmlns, 'rect'); 
		fixedtypesvg.setAttributeNS( null, "id", "textureoverlay");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "fill", "url(#papier)");
		fixedtypesvg.setAttributeNS( null, "fill-opacity", "0.25");
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		c_defs.appendChild( fixedtypesvg );

		// Shadow overlay
		/*
		var fixedtypesvg = document.createElementNS( xmlns, 'rect'); 
		fixedtypesvg.setAttributeNS( null, "id", "shadowoverlay");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "fill", "rgb(0,0,0)");
		fixedtypesvg.setAttributeNS( null, "fill-opacity", "0");
		fixedtypesvg.setAttributeNS( null, "stroke", "rgb(30,30,30)");
		fixedtypesvg.setAttributeNS( null, "stroke-width", "4");
		fixedtypesvg.setAttributeNS( null, "filter", "url(#inset-shadow)" );
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		c_defs.appendChild( fixedtypesvg );
		*/

		var fixedtypesvg = document.createElementNS( xmlns, 'path'); 
		fixedtypesvg.setAttributeNS( null, "id", "lightoverlay");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "stroke", "white");
		fixedtypesvg.setAttributeNS( null, "stroke-width", "4");
		fixedtypesvg.setAttributeNS( null, "filter", "url(#inset-light-shadow)" );
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		fixedtypesvg.setAttributeNS( null, 'd', "M 4 0 l 0,252 M 0,4 l 252,0" );
		c_defs.appendChild( fixedtypesvg );

		var fixedtypesvg = document.createElementNS( xmlns, 'path'); 
		fixedtypesvg.setAttributeNS( null, "id", "shadowoverlay");
		fixedtypesvg.setAttributeNS( null, "width" , "256");
		fixedtypesvg.setAttributeNS( null, "height", "256");
		fixedtypesvg.setAttributeNS( null, "stroke", "black");
		fixedtypesvg.setAttributeNS( null, "stroke-width", "4");
		fixedtypesvg.setAttributeNS( null, "filter", "url(#inset-light-shadow)" );
		fixedtypesvg.setAttributeNS( null, 'x', 0 );
		fixedtypesvg.setAttributeNS( null, 'y', 0 );
		fixedtypesvg.setAttributeNS( null, 'd', "M 252 0 l 0,252 M 0,252 l 252,0" );
		c_defs.appendChild( fixedtypesvg );


		// Define the piece numbers from 0 to 256
		//for (piece = 0; piece <= board_w*board_h; piece++ ) {
		for (piece = 0; piece <= 256; piece++ ) { // See #10197

			// Ellipses for pieces number
			var piecenumbertext = document.createElementNS( xmlns, 'g'); 
			piecenumbertext.setAttributeNS( null, 'id', "piecenumbertext"+piece );

			// Piece Numbers
			var piecenumbertextsvg = document.createElementNS( xmlns, 'text'); 
			piecenumbertextsvg.setAttributeNS( null, 'id', "piecenumbertextsvg"+piece );
			piecenumbertextsvg.setAttributeNS( null, 'x', 0 );
			piecenumbertextsvg.setAttributeNS( null, 'y', 0 );
			piecenumbertextsvg.setAttributeNS( null, "font-size", "96");
			piecenumbertextsvg.setAttributeNS( null, "fill", "white");
			piecenumbertextsvg.setAttributeNS( null, "stroke", "black");
			piecenumbertextsvg.setAttributeNS( null, "stroke-width", "2");
			piecenumbertextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			piecenumbertextsvg.setAttributeNS( null, "text-anchor", "middle");
			piecenumbertextsvg.setAttributeNS( null, "dominant-baseline", "middle");
			//piecenumbertextsvg.setAttributeNS( null, 'visibility', "hidden" );

			var piecenumbertextspansvg = document.createElementNS( xmlns, 'tspan'); 
			piecenumbertextspansvg.setAttributeNS( null, 'x', 128 );
			piecenumbertextspansvg.setAttributeNS( null, 'y', 128 );
			piecenumbertextspansvg.textContent = piece;
			piecenumbertextsvg.appendChild( piecenumbertextspansvg );
			piecenumbertext.appendChild( piecenumbertextsvg );
			c_defs.appendChild( piecenumbertext );
		}

		canvas.appendChild( c_defs );

		// Define the custom text for each space from 0 to 256
		for (space = 0; space <= board_w*board_h; space++ ) {

			var customspacetext = document.createElementNS( xmlns, 'g'); 
			customspacetext.setAttributeNS( null, 'id', "customspacetext"+space );

			// Custom text on space
			var customspacetextsvg = document.createElementNS( xmlns, 'text'); 
			customspacetextsvg.setAttributeNS( null, 'id', "customspacetextsvg"+space );
			customspacetextsvg.setAttributeNS( null, 'x', 0 );
			customspacetextsvg.setAttributeNS( null, 'y', 0 );
			customspacetextsvg.setAttributeNS( null, "font-size", "70");
			customspacetextsvg.setAttributeNS( null, "fill", "white");
			customspacetextsvg.setAttributeNS( null, "stroke", "black");
			customspacetextsvg.setAttributeNS( null, "stroke-width", "2");
			customspacetextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			customspacetextsvg.setAttributeNS( null, "text-anchor", "middle");
			customspacetextsvg.setAttributeNS( null, "dominant-baseline", "middle");

			var customspacetextspansvg = document.createElementNS( xmlns, 'tspan'); 
			customspacetextspansvg.setAttributeNS( null, 'x', 128 );
			customspacetextspansvg.setAttributeNS( null, 'y', 128 );
			if (board_custom !== undefined)
				customspacetextspansvg.textContent = board_custom[space];
			customspacetextsvg.appendChild( customspacetextspansvg );
			customspacetext.appendChild( customspacetextsvg );
			c_defs.appendChild( customspacetext );
		}

		canvas.appendChild( c_defs );

		// Define the piece numbers conflict from 0 to 256
		//for (piece = 0; piece <= board_w*board_h; piece++ ) {
		for (piece = 0; piece <= 256; piece++ ) { // See #10197

			// Ellipses for pieces number
			var piecenumberconflicttext = document.createElementNS( xmlns, 'g'); 
			piecenumberconflicttext.setAttributeNS( null, 'id', "piecenumberconflicttext"+piece );

			// Piece Numbers
			var piecenumberconflicttextsvg = document.createElementNS( xmlns, 'text'); 
			piecenumberconflicttextsvg.setAttributeNS( null, 'id', "piecenumberconflicttextsvg"+piece );
			piecenumberconflicttextsvg.setAttributeNS( null, 'x', 0 );
			piecenumberconflicttextsvg.setAttributeNS( null, 'y', 0 );
			piecenumberconflicttextsvg.setAttributeNS( null, "font-size", "96");
			piecenumberconflicttextsvg.setAttributeNS( null, "fill", "black");
			piecenumberconflicttextsvg.setAttributeNS( null, "stroke", "black");
			piecenumberconflicttextsvg.setAttributeNS( null, "stroke-width", "2");
			piecenumberconflicttextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			piecenumberconflicttextsvg.setAttributeNS( null, "text-anchor", "middle");
			piecenumberconflicttextsvg.setAttributeNS( null, "dominant-baseline", "middle");
			//piecenumberconflicttextsvg.setAttributeNS( null, 'visibility', "hidden" );

			var piecenumberconflicttextspansvg = document.createElementNS( xmlns, 'tspan'); 
			piecenumberconflicttextspansvg.setAttributeNS( null, 'x', 128 );
			piecenumberconflicttextspansvg.setAttributeNS( null, 'y', 128 );
			piecenumberconflicttextspansvg.textContent = piece;
			piecenumberconflicttextsvg.appendChild( piecenumberconflicttextspansvg );
			piecenumberconflicttext.appendChild( piecenumberconflicttextsvg );
			c_defs.appendChild( piecenumberconflicttext );
		}

		canvas.appendChild( c_defs );


		// Conflict
		var conflict = document.createElementNS( xmlns, 'g' );
		conflict.setAttributeNS( null, "id", "conflict");
		var conflictp = document.createElementNS( xmlns, 'path' );
		var path = "m-128,-128"
		path += "l 0,256"
		//for (i = 0; i < 8; i++)
			//dpath += "l 16,16  l -16,16"
		conflictp.setAttributeNS( null, "d", path);
		conflictp.setAttributeNS( null, "stroke", "white" );
		conflictp.setAttributeNS( null, "stroke-width", "32");
		conflict.appendChild( conflictp );
		c_defs.appendChild( conflict );




		// Define the motifs and conflicts on each space of the board
		for (y = 0; y < board_h; y++ ) {
		for (x = 0; x < board_w; x++ ) {
			space = x + y*board_w;

			// motifs
			m = "00";
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "space"+space+"R0" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( null, "transform", "rotate(90 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			canvas.appendChild( c_use );

			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "space"+space+"R1" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( null, "transform", "rotate(180 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			canvas.appendChild( c_use );

			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "space"+space+"R2" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( null, "transform", "rotate(-90 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			canvas.appendChild( c_use );

			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "space"+space+"R3" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( null, "transform", "rotate(0 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			canvas.appendChild( c_use );

			// conflicts
			m = "17"; // White
			

			// Piece type
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "piecetype"+space );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#fixedtype" );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );


			// Piece number dark overlay
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "piecenumberoverlay"+space );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#fixedtype" );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );

			// Piece Texture
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "piecetextureoverlay"+space );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#textureoverlay" );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'class', "piece_texture" );
			c_use.setAttributeNS( null, 'visibility', "visible" );
			canvas.appendChild( c_use );

			// Piece light
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "piecelightoverlay"+space );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#lightoverlay" );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'class', "piece_light" );
			c_use.setAttributeNS( null, 'visibility', "visible" );
			canvas.appendChild( c_use );

			// Piece shadow
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "pieceshadowoverlay"+space );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#shadowoverlay" );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'class', "piece_shadow" );
			c_use.setAttributeNS( null, 'visibility', "visible" );
			canvas.appendChild( c_use );

			// Piece number
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "piecenumber"+space );
			c_use.setAttributeNS( null, "class", "piecenumber" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#piecenumbertext"+space );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );


			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "conflict"+space+"R0" );
			//c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#conflict" );
			c_use.setAttributeNS( null, "transform", "rotate(90 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );
			

			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "conflict"+space+"R1" );
			//c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#conflict" );
			c_use.setAttributeNS( null, "transform", "rotate(180 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );


			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "conflict"+space+"R3" );
			//c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#conflict" );
			c_use.setAttributeNS( null, "transform", "rotate(0 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );
			

			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "conflict"+space+"R2" );
			//c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+m );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#conflict" );
			c_use.setAttributeNS( null, "transform", "rotate(-90 " + (256*x+128) + " " + (256*y+128) +")" );
			c_use.setAttributeNS( null, 'x', x*256+128 );
			c_use.setAttributeNS( null, 'y', y*256+128 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );

			// Custom Text
			var c_use = document.createElementNS( xmlns, 'use' );
			c_use.setAttributeNS( null, "id", "customspace"+space );
			c_use.setAttributeNS( null, "class", "customspace" );
			c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#customspacetext"+space );
			c_use.setAttributeNS( null, 'x', x*256 );
			c_use.setAttributeNS( null, 'y', y*256 );
			c_use.setAttributeNS( null, 'visibility', "hidden" );
			canvas.appendChild( c_use );
		}}

		// Grid Lines
		// From http://upload.wikimedia.org/wikipedia/commons/d/d5/Chess_Board.svg
		var gridsvg = document.createElementNS( xmlns, 'path'); 
		uw="256"*1;
		uh="256"*1;
		lw=256*(board_w);
		lh=256*(board_h);
		path="M0,0"
		path+="m0,"+uh
		for (y = 1; y < board_h; y++ ) path+="H"+lw+"H0m0,"+uh;
		path+="M0,0"
		path+="m"+uw+",0"
		for (x = 1; x < board_w; x++ ) path+="V"+lh+"V0m"+uw+',0';
		gridsvg.setAttributeNS( null, "id", "grid1" );
		gridsvg.setAttributeNS( null, "d", path );
		gridsvg.setAttributeNS( null, 'visibility', "visible" );
		gridsvg.setAttributeNS( null, "stroke", "#000");
		gridsvg.setAttributeNS( null, "stroke-width", 1);
		canvas.appendChild( gridsvg );

		// Tiles
		for (n = 0; n < 8 ; n++) {
			tiles_w=XY_TILES_PACE_SCALAR[n][0];
			tiles_h=XY_TILES_PACE_SCALAR[n][1];

			// Lines
			// From http://upload.wikimedia.org/wikipedia/commons/d/d5/Chess_Board.svg
			var tilessvg = document.createElementNS( xmlns, 'path'); 
			uw="256"*tiles_w;
			uh="256"*tiles_h;
			lw=256*(board_w);
			lh=256*(board_h);
			path="M0,0"
			path+="m0,"+uh
			for (y = 1; y < Math.floor(board_h/tiles_h); y++ ) path+="H"+lw+"H0m0,"+uh;
			path+="M0,0"
			path+="m"+uw+",0"
			for (x = 1; x < Math.floor(board_w/tiles_w); x++ ) path+="V"+lh+"V0m"+uw+',0';
			tilessvg.setAttributeNS( null, "id", "tiles"+(1<<n) );
			tilessvg.setAttributeNS( null, "d", path );
			tilessvg.setAttributeNS( null, 'visibility', "hidden" );
			tilessvg.setAttributeNS( null, "stroke", "black");
			tilessvg.setAttributeNS( null, "stroke-width", 2 + n*10);
			canvas.appendChild( tilessvg );

			
			// Numbers
			var tilestextsvg = document.createElementNS( xmlns, 'text'); 
			tilestextsvg.setAttributeNS( null, 'id', "tiles"+(1<<n)+"text" );
			tilestextsvg.setAttributeNS( null, 'x', 0 );
			tilestextsvg.setAttributeNS( null, 'y', 0 );
			tilestextsvg.setAttributeNS( null, "font-size", 96+n*64);
			tilestextsvg.setAttributeNS( null, "fill", "white");
			tilestextsvg.setAttributeNS( null, "fill-opacity", "0.9");
			tilestextsvg.setAttributeNS( null, "stroke", "black");
			tilestextsvg.setAttributeNS( null, "stroke-width", 2+n);
			tilestextsvg.setAttributeNS( null, "stroke-opacity", "0.8");
			tilestextsvg.setAttributeNS( null, "text-anchor", "middle");
			tilestextsvg.setAttributeNS( null, "dominant-baseline", "middle");
			tilestextsvg.setAttributeNS( null, 'visibility', "hidden" );

			tile=0;
			for (y = 0; y < board_h; y+=tiles_h ) {
			for (x = 0; x < board_w; x+=tiles_w ) {

				var tilestextspansvg = document.createElementNS( xmlns, 'tspan'); 
				tilestextspansvg.setAttributeNS( null, 'x', 256*x + 256*(tiles_w/2) );
				tilestextspansvg.setAttributeNS( null, 'y', 256*y + 256*(tiles_h/2) );
				tilestextspansvg.textContent = tile;
				tilestextsvg.appendChild( tilestextspansvg );

				tile+=1;

			}}
			canvas.appendChild( tilestextsvg );
			
		}


		document.body.appendChild(canvas);


	}

	if ( $i("Controls") ) {
		if ( !$i("Motifs") ) {
			// Create a small SVG canvas
			motifscanvas = document.createElementNS( xmlns, 'svg'); 
			motifscanvas.setAttributeNS( null, "id", "Motifs");
			//motifscanvas.setAttributeNS( null, "viewBox" , "0 0 "+ 256*2 + " " + ((256*((motifs_svg_definitions.length%2)+Math.floor(motifs_svg_definitions.length/2)+1))));
			motifscanvas.setAttributeNS( null, "viewBox" , "0 0 "+ ((256+64)*4+128) + " " + (256*((motifs_svg_definitions.length/4)+1)+128));
			motifscanvas.setAttribute( "width" , 32*5);
			motifscanvas.setAttribute( "height", 32*((motifs_svg_definitions.length/4)+1));

			for (index = 0; index < motifs_svg_definitions.length; ++index) {
				x = (index % 4) * (256+64) - 128;
				y = Math.floor(index / 4)*(256+64)-128;

				mx = String('00' + index.toString(16,2).toLowerCase()).slice(-2)

				var c_use = document.createElementNS( xmlns, 'use' );
				c_use.setAttributeNS( null, "id", "motif"+mx+"R1" );
				c_use.setAttributeNS( null, "class", "motif");
				c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
				c_use.setAttributeNS( null, "transform", "rotate(180 " + (x+128) + " " + (y+128) +")" );
				c_use.setAttributeNS( null, 'x', x );
				c_use.setAttributeNS( null, 'y', y );
				c_use.setAttributeNS( null, "onmousedown", "highlightMotif("+index+");");
				motifscanvas.appendChild( c_use );

				var c_use = document.createElementNS( xmlns, 'use' );
				c_use.setAttributeNS( null, "id", "motif"+mx+"R3" );
				c_use.setAttributeNS( null, "class", "motif");
				c_use.setAttributeNS( 'http://www.w3.org/1999/xlink', "xlink:href", "#motif"+mx );
				c_use.setAttributeNS( null, "transform", "rotate(0 " + (x+128) + " " + (y+128) +")" );
				c_use.setAttributeNS( null, 'x', x+256+128+128-8 ); // -8 to remove the quirk in the middle
				c_use.setAttributeNS( null, 'y', y+256 );
				c_use.setAttributeNS( null, "onmousedown", "highlightMotif("+index+");");
				motifscanvas.appendChild( c_use );

			}
			$i("Controls").appendChild(motifscanvas); 
			$i("Controls").appendChild(document.createElement('br')); 

			// Help
			var div_elem = document.createElement("div"); 
			div_elem.innerHTML = "&#42511; Type 'help' in console &#42511; ";
			div_elem.setAttribute("class", "help");
			div_elem.setAttributeNS( null, "onmousedown", "help();");
			$i("Controls").appendChild(div_elem); 
			$i("Controls").appendChild(document.createElement('br')); 
		}
	}
	
	/*if ( !$i("Log") ) {
		var log_elem = document.createElement('textarea');
		log_elem.setAttribute("id", "Log");
		log_elem.setAttribute("wrap", "off");
		log_elem.setAttribute("spellcheck", "false");
		//log_elem.setAttribute("onpaste", "document.pasted_text=this; setTimeout(function(){window.location.hash='e2.html'+document.pasted_text.value;window.location.reload();}, 100);");

		document.body.appendChild(log_elem); 
	}*/
	

	// Action is about starting the engine
	if ( action == 'load' ) {
		printScreen();
	}
}



// Interactivity

// ----- extract the parameters, separated by '&' and defined by '=' from text
function extractParameters( text ) {
	var f = [];

	var t = text.split('&');
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return f;
}


// ----- extract the parameters from the URL and Hash
function extractUrlParameters() {

	return extractParameters(location.search.substring(1)+ "&" + window.location.hash.slice(1))
}


// ----- get new parameters
function get_new_parameters() {

	fetch('http://localhost:8080/')
		.then(function(response) {
			return response.text();
		})
		.then(function(text) {
			console.log(text);
			var new_parameters = extractParameters( text );
			init_puzzle(new_parameters);
			build_page( 'load' );
			printScreen();
		}); 

}

// ----- Key manager
function key_manager(evt) {
	evt=evt||event;
	var key=evt.which||evt.keyCode;
	var ctrl=evt.ctrlKey;
	switch ( key ) {
		case  32 : toggleControls(); break; // space
		case  99 : toggleConflicts(); break; // c
		case 110 : togglePieceNumber(); break; // n
		case 116 : togglePieceType(); break; // t
		case 115 : toggleScore(); break; // s
		case  35 : toggleCoordinates(); break; // #
		case  49 : toggleTiles(0); break; // 1
		case  50 : toggleTiles(1); break; // 2
		case  51 : toggleTiles(2); break; // 3
		case  52 : toggleTiles(3); break; // 4
		case  53 : toggleTiles(4); break; // 5
		case  54 : toggleTiles(5); break; // 6
		case  55 : toggleTiles(6); break; // 7
		case  56 : toggleTiles(7); break; // 8
		case  57 : toggleTiles(8); break; // 9
		case 104 : help(); break; // h
		default :
			console.log( "key is :", key);
			break;
	}
	top.status='$'+key+'='+$c(key);
}


// ----- toggle the conflicts layer
function toggleConflicts() {
	show_conflicts = ! show_conflicts;
	button_conflicts_elem = $i("ButtonToggleConflicts");
	button_conflicts_elem.checked = show_conflicts;
	printScreen();
}

// ----- toggle the piece numbers
function togglePieceNumber() {
	show_piecenumber = ! show_piecenumber;
	button_piecenumber_elem = $i("ButtonTogglePieceNumber");
	button_piecenumber_elem.checked = show_piecenumber;
	printScreen();
}

// ----- toggle the piece type
function togglePieceType() {
	show_piecetype = ! show_piecetype;
	button_piecetype_elem = $i("ButtonTogglePieceType");
	button_piecetype_elem.checked = show_piecetype;
	printScreen();
}

// ----- toggle the coordinates
function toggleCoordinates() {
	show_coordinates = ! show_coordinates;
	button_coordinates_elem = $i("ButtonToggleCoordinates");
	button_coordinates_elem.checked = show_coordinates;
	printScreen();
}


// ----- toggle the tiles
function toggleTiles(n) {
	show_tiles[n] = ! show_tiles[n];
	button_tiles_elem = $i("ButtonToggleTiles"+(1<<n));
	button_tiles_elem.checked = show_tiles[n];
	printScreen();
}

// ----- toggle the Controls
function toggleScore() {
	c=$i('Score');
	if ((c.style.display === undefined)||(c.style.display === '')||(c.style.display == 'none')) {
		c.style.display = 'block';
	} else {
		c.style.display = 'none';
	}
}


// ----- toggle the Controls
function toggleControls() {
	c=$i('Controls');
	if ((c.style.display === undefined)||(c.style.display == '')||(c.style.display == 'none')) {
		c.style.display = 'block';
	} else {
		c.style.display = 'none';
	}
}



// ----- toggle the conflicts layer
function highlightMotif(motif_index) {

	mx = String('00' + motif_index.toString(16,2).toLowerCase()).slice(-2)
	md = String('00' + motif_index.toString(10,2)).slice(-2)
	mt = String.fromCharCode("a".charCodeAt(0) + motif_index);
	
	show_motifs[motif_index] = ! show_motifs[motif_index];
	console.log( "0x"+mx+" | "+md+" | "+mt, show_motifs[motif_index] );

	
	printScreen();
}

