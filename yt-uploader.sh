facebook(){
        local datum=`date +%s`
        youtube-dl "$1" --output "$datum"; tar cvf - "$datum" | split --bytes=24MB - "$datum".tar; rm "$datum"
        node ../app.js
        rm ${datum}*
}
