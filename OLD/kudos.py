#! /usr/bin/python

from random import randint
import cgi, cgitb

cgitb.enable()

print 'Content-type: text/html\n\n'

def gen():
    inputvalues = cgi.FieldStorage()
    name = inputvalues.getvalue('nameofperson', "NO NAME")
    if name == "NO NAME":
        return False
    intros = ['Kudos to', 'Shout out to', 'Thanks', 'I commend', 'Good job', 'Congrats']
    kudos = ['being good with their KIDS', 'helping the CLASS teacher', 'taking their KIDS to CLASS on time', 'getting to dismissal on time', 'being cool', 'dressing nicely', 'helping me with my KIDS', 'helping me solve a problem', 'being a good mentor', 'being respectful']
    final = intros[randint(0, 5)] + ' ' + name  + ' for ' + kudos[randint(0, 9)]
    return final

def synonyms(phrase):
    if phrase == False:
        return False
    kids = ['kids', 'children', 'students', 'little dudes', 'class']
    classes = ['math', 'science', 'LA', 'musical theater', 'rec']
    if "KIDS" in phrase:
        phrase = phrase.replace("KIDS", kids[randint(0, 4)])
    if "CLASS" in phrase:
        phrase = phrase.replace("CLASS", classes[randint(0, 4)])
    return phrase

def main():
    kudos = synonyms(gen())
    tophtml = """<html>
    <head>
        <link rel="stylesheet" type="text/css" href="indexstyle.css">
        <title>Kudos Generator</title>
    </head>
    <body>
        <center>
            <br>
            <a href='index.html' style='text-decoration: none;'><h1 class='heading'>Kudos Generator!</h1></a>
            <div class='searchstuff'>
                <p>Please enter the name of the person whomst you wanna give kudos to below</p>
                <form method='get' action="kudos.py">
                    <span class='namething'>Name</span>:&nbsp;
                    <input type="search" name='nameofperson' placeholder="Ex. Jesus; Felipe" class='searchbox' """
    middlehtml="""required>
                    <input type="submit" name='submit' value="Get Kudos'd!" class="submit">
                </form>
            </div>"""
    bottomhtml = """</center>
        <p style='font-size: 12px; font-family: "Georgia", serif;'>~Joan Chirinos, 2017&nbsp;&copy;</p>
    </body>
</html>"""
    print tophtml
    if kudos == False:
        print middlehtml
        print '<h3>Please enter a name into the box above and try again</h3>'
    else:
        kudostwo = kudos.split(' ')
        name = kudostwo[kudostwo.index('for')-1]
        print ' value="' + name + '" '
        print middlehtml
        print '<div class="kudos"><p class="kudosText">' + kudos + "</p><p style='font-size: 13px;'>Here's your Kudos! If you're not satisfied, you may click the button again for a fresh new kudos, or change the name and try again!</p>"
    print bottomhtml

main()
