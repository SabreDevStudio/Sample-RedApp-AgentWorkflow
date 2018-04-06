#!/bin/bash

for file in $PWD/modules/*
do 
	echo Installing $file
	npm install $file --save
	echo $file should be installed in your local 'node_modules' folder
done
