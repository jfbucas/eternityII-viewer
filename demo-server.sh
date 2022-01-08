#!/bin/bash

i=0
while :; do
	
	(
	echo "HTTP/1.1 200 OK"
	echo "content-type: text/css;"
	echo "Access-Control-Allow-Origin: *"
	echo ""
	echo ""
	echo -n "puzzle=demo-server""&"
	echo -n "board_w=16""&"
	echo -n "board_h=16""&"


	echo -n "board_types="
	for n in {0..255}; do
		echo -n "1"
	done
	echo -n "&"

	echo -n "board_pieces="
	for n in {00..255}; do
		echo -n "$n"
	done
	echo -n "&"


	echo -n "board_edges="
	for n in {0..255}; do
		case $(($i % 4)) in
			0 ) echo -n "abcd" ;;
			1 ) echo -n "efgh" ;;
			2 ) echo -n "ijkl" ;;
			3 ) echo -n "mnop" ;;
		esac
	done
	) | nc -l -p 8080

	(( i++ ))

	sleep 0.1
done
