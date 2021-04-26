#!/bin/bash

apt update

if hash node 2>/dev/null;
then
    echo "node is already installed"
else
    apt install nodejs
    apt install npm
fi

if hash pm2 2>/dev/null;
then
    echo "pm2 is already installed"
else
    npm i -g pm2
fi

if hash python3 2>/dev/null;
then
    echo "python3 is already installed"
else
    apt install software-properties-common
    add-apt-repository ppa:deadsnakes/ppa
    apt update
    apt install python3.8
fi

if hash pip3 2>/dev/null;
then
    echo "pip3 is already installed"
else
    apt install python3-pip
    pip3 install requests
    pip3 install beautifulsoup4
    pip3 install lxml
fi
