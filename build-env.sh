if [ "$NETLIFY" == "true" ];
then
    mkdir -p _site
    cp .netlify/* _site/
    echo "Copied Netlify-specific configuration to output directory"
fi
