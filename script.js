/*

    intros = ['Kudos to', 'Shout out to', 'Thanks', 'I commend', 'Good job', 'Congrats']
    kudos = ['being good with their KIDS', 'helping the CLASS teacher', 'taking their KIDS to CLASS on time', 'getting to dismissal on time', 'being cool', 'dressing nicely', 'helping me with my KIDS', 'helping me solve a problem', 'being a good mentor', 'being respectful']
    
    
    kids = ['kids', 'children', 'students', 'little dudes', 'class']
    classes = ['math', 'science', 'LA', 'musical theater', 'rec']
*/

var intros = [
    'Kudos to',
    'Shout out to',
    'Thanks',
    'I commend',
    'Good job',
    'Congrats'
];

var outros = [
    'being good with their KIDS',
    'helping the CLASS teacher',
    'taking their KIDS to CLASS on time',
    'getting to dismissal on time',
    'being cool',
    'dressing nicely',
    'helping me with my KIDS',
    'helping me solve a problem',
    'being a good mentor',
    'being respectful'
];

var kids = ['kids', 'children', 'students', 'little dudes', 'class']

var classes = ['math', 'science', 'LA', 'musical theater', 'rec']

function onSubmit() {
    document.getElementById('kudos').innerHTML = "LOADING..."
    var name = '';
    name = document.getElementById('name').value;
    if (name == '') {
        name = 'Joan';
    } else if (name == ' ') {
        document.getElementById('kudos').innerHTML = 'Whoah you put a space instead of a name. Do you feel powerful? <a href="https://bit.ly/2tI03XD">Click here to die instantly</a>';
        return;
    } else if (name == '  ') {
        document.getElementById('kudos').innerHTML = 'Whoah you put TWO spaces this time. You wanna click again? <a href="https://bit.ly/2tI03XD">Click here to die instantly</a>';
        return;
    } else if (name == '   ') {
        document.getElementById('kudos').innerHTML = 'Look man I can\'t write stuff for a lot of spaces because I\'d have to write a lot. Just please put a name. Or don\'t, and let it default to me <a href="https://bit.ly/2tI03XD">Click here to die instantly</a>';
        return;
    } else if (name == '    ') {
        document.getElementById('kudos').innerHTML = 'This is literally the last one I\'m checking for. Just make a Kudos yourself, man. This is a joke website! It\s not that hard to write a lil Kudos. Adios! <a href="https://bit.ly/2tI03XD">Click here to die instantly</a>';
        return;
    } else if (name == '     ') {
        document.getElementById('kudos').innerHTML = 'Fine, you called my bluff. This is the real last one. But please just go write a kudos and get on with your life!!!! <a href="https://bit.ly/2tI03XD">Click here to die instantly</a>';
        return;
    } else if (name.length > 4 && name.trim() == '') {
        document.getElementById('kudos').innerHTML = 'I\'m not writing any more of these. Put as many spaces as you want kiddo. This is all you\'re gonna get. <a href="http://homer.stuy.edu/~jchirinos/KudosGen/please.html">>:(</a>';
        return;
    }
    console.log("Name: |" + name + "|")
    var intro = intros[Math.floor(Math.random() * intros.length)];
    console.log("Intro: " + intro);
    var outro = outros[Math.floor(Math.random() * outros.length)];
    console.log("Outro: " + outro);
    var toWrite = intro + ' ' + name + ' for ' + outro;
    toWrite = toWrite.replace('KIDS', kids[Math.floor(Math.random() * kids.length)]);
    toWrite = toWrite.replace('CLASS', classes[Math.floor(Math.random() * classes.length)]);
    document.getElementById('kudos').innerHTML = (toWrite);
}
