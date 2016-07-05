facebook(){
	nodemessage=`youtube-dl --get-filename --get-duration --restrict-filenames "$@"`
	local datum=`date +%s`
	youtube-dl "$@" --output "$datum"; tar cvf - "$datum"* | split --bytes=24MB - ./parts/"$datum".tar; rm "$datum"*
	nodesize=`du -hs parts/`
	node ../app.js "$nodemessage" "$nodesize"
	rm ./parts/${datum}*
}
