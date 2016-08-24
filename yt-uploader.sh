facebook(){
        if ! cd ~/nodeapp/temp; then
                echo "Directory missing"; return;
        fi

        python /usr/local/bin/youtube_dl/__main__.py "$@" --output '%(duration)s__%(title)s__%(id)s' --restrict-filenames
        nodename=`ls`
        tar cvf - ./* | split --bytes=25MB - ../parts/"$nodename".tar; rm ./*
        nodesize=`du -hs ../parts/`
        node ../app.js "$nodename" "$nodesize"
        rm ../parts/*
}
