#!/bin/bash

touch dict

files=`find ./var/www/html/logs/ -name "*.txt"`

for var in $files
do
md5=`md5sum $var | grep -Eo '^[a-z0-9]{1,}'`
link=`echo $var | grep -Eo '.{1,}\/{1,}'`
mv $var $link$md5'.txt'
echo $var $link$md5'.txt' >> dict
done