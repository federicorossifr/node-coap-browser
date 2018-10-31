#!/bin/bash
npm install
sudo npm install bower -g
sudo npm install grunt-cli -g
bower install
grunt wiredep

