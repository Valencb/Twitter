var note=document.createTextNode("Que estas pensando....");
var tittle=document.createElement('h3');
tittle.id="thinking"
var text= document.createElement('input');
text.id= "textThink";
var form= document.createElement('form');
var tweet= document.createElement('button');
tweet.id="bnt-tweet";
tweet.innerHTML= "Tweet";
var blockTweet=document.createElement('div');
blockTweet.id="text"
var tweetNote=document.getElementById('element');
tittle.appendChild(note);
blockTweet.appendChild(tittle);
tweetNote.appendChild(blockTweet)
form.appendChild(tweet);
blockTweet.appendChild(form);
tweetNote.appendChild(blockTweet);
blockTweet.appendChild(tweet);
form.appendChild(text);

var clickTweeter= document.getElementById("bnt-tweet");
clickTweeter.addEventListener('click', function(){
  var valueTweet = document.getElementById('textThink').value;
  document.getElementById('textThink').value = '';
    if (valueTweet.length == 0 || valueTweet == null) {
      alert('Debes ingresar un mensaje');
      return false;
    }

var blockNote = document.createElement('p');
var block = document.createElement('div');
var blockOnHtml = document.getElementById('twetear');
var blockIn = document.getElementById('block-center');
var textNote1= document.getElementById('element')

block.appendChild(blockNote);
blockIn.appendChild(textNote1);
blockOnHtml.appendChild(block);
blockIn.appendChild(blockOnHtml);
var noteValue = document.createTextNode(valueTweet);
console.log(noteValue);
blockNote.appendChild(noteValue);



});
