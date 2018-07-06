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
    }
    console.log("Name: " + name)
    var intro = intros[Math.floor(Math.random() * intros.length)];
    console.log("Intro: " + intro);
    var outro = outros[Math.floor(Math.random() * outros.length)];
    console.log("Outro: " + outro);
    var toWrite = intro + ' ' + name + ' for ' + outro;
    toWrite = toWrite.replace('KIDS', kids[Math.floor(Math.random() * kids.length)]);
    toWrite = toWrite.replace('CLASS', classes[Math.floor(Math.random() * classes.length)]);
    document.getElementById('kudos').innerHTML = (toWrite);
}
