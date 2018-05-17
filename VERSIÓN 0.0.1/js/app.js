var note=document.createTextNode("Que estas pensando....");
var tittle=document.createElement('h2');
tittle.id="thinking"
var text= document.createElement('input');
text.id= "textThink";
var form= document.createElement('form');
var tweet= document.createElement('button');
tweet.id="bnt-tweet";
tweet.innerHTML= "Tweet";
var blockTweet=document.createElement('div');
var tweetNote=document.getElementById('element');
tittle.appendChild(note);
blockTweet.appendChild(tittle);
tweetNote.appendChild(blockTweet)
form.appendChild(text);
form.appendChild(tweet);
blockTweet.appendChild(form);
tweetNote.appendChild(blockTweet);
blockTweet.appendChild(tweet);

var clickTweeter= document.getElementById("bnt-tweet");
clickTweeter.addEventListener('click', function(){
  var valueTweet = document.getElementById('textThink').value;
  document.getElementById('textThink').value = '';
    if (valueTweet.length == 0 || valueTweet == null) {
      alert('Debes ingresar un mensaje');
      return false;
    }
var noteValue = document.createTextNode(valueTweet);
console.log(noteValue);
var blockNote = document.createElement('p');
var block = document.createElement('div');
var blockOnHtml = document.getElementById('twetear');
blockNote.appendChild(noteValue);
block.appendChild(blockNote);
blockOnHtml.appendChild(block);

});
