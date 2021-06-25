function generate() {
    var jokes = [
        '<img src="qqq.png">',
        '<img src="images/2.jpeg">',
        '<img src="images/3.jpeg">',
        ]

        var lol=document.querySelector(".div1");
        lol.innerHTML=jokes[Math.floor(Math.random()*jokes.length)];

}