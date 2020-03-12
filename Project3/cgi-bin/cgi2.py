#! /usr/bin/python3
import sys
import cgi
import cgitb
import os
import time
cgitb.enable()
sys.sterr = sys.stdout

print('Content-type:text/html\n\n')

user = ""
message= ""

form=cgi.FieldStorage()

#form_ok = 0
#if form.has_key("user") and form.has_key("message"):
#	form_ok = 1
#if not form_ok:
#	print ("<H1> Error </H1>")
#	print ("Please fill user and message fields")
if "user" in form:
	user = form["user"].value
if "message" in form:
	message = form["message"].value

#if form_ok:
#print (form["user"].value)
#print(user)
#if message in form:
#print (form["message"].value)
#print(message)
#if user : #and message:
#	try:
#		f = open("../messages.txt","a")
#		print("User: " + user + "\n")
#		f.close()
#	except:
#		print("ERROR FILE READ")

#try:
if (user != "") and (message != ""):
	f = open("msgs.txt","a")
	f.write("<br>" + user + " - " + message) # + ": " + form["message"].value + "\n")
	f.close()
#redirectURL = "messages.txt"
	
		#print("<head> FILE READ %s</head>" % (user)
		

#except:
#		print('<head>ERROR FILE READ</head>')

redirectURL = "../msgs.txt"


#print('<html>')
#print('  <head>')
#print('<p> noooo </p>')
#print('</head>')
	#print('noooooo')
	#print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
	#print('  </p>')
#print('</html>')

#if 'keyword' not in form or 'text2' not in form:
   #redirectURL = "../p3.html"
print('<html>')
print('  <head>')
print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
print('  </head>')
print('</html>')



redirectURL = "../p3.html"
print('<html>')
print('  <head>')
time.sleep(4)
print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
print('  </head>')
print('</html>')



#else:
	#f = open("./messages.txt","a")
	#print(form['keyword'].value)
   	#print(form['text2'].value)
	#print("User: " + keyword + " Message: " + text2)
	#f.close()
	
#redirectURL = "./messages.txt"
	#<meta http-equiv="refresh" content="0; url='+str(redirectURL)+'" />