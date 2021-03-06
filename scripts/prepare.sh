#!/bin/bash

if [[ ! -d ".git" ]]
then
    echo "The current directory is not a valid git directory";
    exit 1;
fi

git config core.hooksPath .hooks;

chmod ug+x .hooks/*;
chmod ug+x .git/hooks/*;
