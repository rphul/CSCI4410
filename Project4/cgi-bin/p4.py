#! /usr/bin/python3
import sys
import cgi
import cgitb
import os
import time
cgitb.enable()
sys.sterr = sys.stdout

print('Content-type:text/html\n\n')

form=cgi.FieldStorage()
filen =""
filestr = ""
fileitem = form['f']

#if fileitem.filename:
	#fn = os.path.basename(fileitem.filename)
	#open('/tmp/' + fn, 'wb').write(fileitem.file.read())
	
	#completename = "../uploads/"
	#fn = os.path.join(completename, fileitem.filename)
	#fn = filename.filename
	#fvalue = fileitem.value
	#file = open(fn,"w")
	#file.write(fvalue)
	#file.close()
	

if "f" in form:
	filen = form["f"].filename
	filestr = form["f"].value

if (filen != ""):
	filename = "./uploads/" + filen;
	file = open(filename,"wb")
	file.write(fileitem.file.read()) # + ": " + form["message"].value + "\n")
	file.close()

redirectURL = "../p4.html"	
print('<html>')
print('  <head>')
print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
print('  </head>')
print('</html>')
