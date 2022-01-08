#!/bin/bash

for f in $*; do

(
	preIFS="$IFS"
	IFS=' '
	read w h < "$f"
	IFS="$preIFS"

	
dimensions="${f//pieces_/}" 
dimensions="${dimensions//.txt/}" 

echo '
puzzles[ nb_puzzles ] = "brendan/'$f'.js,Brendan '$dimensions'".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/'$f'.js" ) {

board_w = '$w';
board_h = '$h';

'


	n=0
	IFS=' '
	while read u r d l; do
		if [ "$n" -gt "0" ]; then
			echo 'pieces[ p ] = "'$u','$r','$d','$l'".split( splitreg ); p++;'
		fi
		(( n++ ))
	done < "$f"

echo '
nb_pieces = p;
nb_fixed = f;

}
'
) > "$f"".js"

#echo '<SCRIPT language="JavaScript" src="'$f'.js"></SCRIPT>';

done

