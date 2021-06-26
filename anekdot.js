function generate() {
    var jokes = [
        '<img src="images/1a.png">',
        '<img src="images/2a.png">',
        '<img src="images/3a.png">',
        '<img src="images/4a.png">',
        '<img src="images/5a.png">',
        '<img src="images/6a.png">',
        '<img src="images/7a.png">',
        '<img src="images/8a.png">',
        '<img src="images/9a.png">',
        '<img src="images/10a.png">',
        '<img src="images/11a1.png">',
        '<img src="images/12a.png">',
        '<img src="images/13a.png">',
        '<img src="images/14a.png">',
        '<img src="images/15a.png">',
        '<img src="images/19a_1.png">',
        '<img src="images/17a.png">',
        '<img src="images/18a.png">',
        '<img src="images/19a.png">',
        '<img src="images/20a.png">',

        ]

        var lol=document.querySelector(".div1");
        lol.innerHTML=jokes[Math.floor(Math.random()*jokes.length)];

}