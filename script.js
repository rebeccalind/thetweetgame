/*
tweets[2].

tweets= {
	tweet:"YADA Yada yada",
	Option1: Donald.jpg,
	Option2: Kanye.jpg,
	Correct: "1"
}





document.getElementById("imgleft").src = tweets[i].option1;
document.getElementById("imgright").src = tweets[i].option2;
document.getElementById("tweet").innerHTML = tweets[i].tweet;

for (var i = 0, i < 10 && i != cancel , i++){



	function 
} */

var tweets = [
 {

	tweet: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
	imgL: "img/Donald.jpg" ,
	imgR:  "img/kanyewest.jpg",
	option1:  "Donald Trump",
	option2:  "Kanye West",

	correct:  "Donald Trump"
},
{

	tweet:  "Ariana Huffington is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
	imgL: "img/drake.jpg",
	imgR: "img/Donald.jpg",
	option1: "Drake",
	option2: "Donald Trump",

	correct: "Donald Trump"
},
{

	tweet: "Have you ever thought you were in love with someone but then realized that you were just staring in a mirror for 20 minutes?",
	imgL: "img/kanyewest.jpg",
	imgR: "img/bieber.jpg",
	option1:  "Kanye West",
	option2:  "Justin Bieber",

	correct:  "Kanye West"
},
{

	tweet:  "Fur pillows are hard to actually sleep on ",
	imgL: "img/jadensmith.jpg",
	imgR: "img/kanyewest.jpg",
	option1: "Jaden Smith",
	option2: "Kanye West",

	correct: "Kanye West"
},
{

	tweet: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
	
	imgL: "img/Britney.jpg",
	imgR: "img/Minaj.jpg",
	option1:  "Britney Spears",
	option2:  "Nikki Minaj",

	correct:  "Britney Spears"
},
{

	tweet:  "Just an FYI: If you removed all veins, arteries, & capillaries from your body and laid them end to end, you will die.",
	
	imgL: "img/Depp.jpg",
	imgR: "img/neilDeGrasse.jpg",
	option1: "Johnny Depp",
	option2: "Astrophysicist",

	correct: "Astrophysicist"
},
{

	tweet: "Why is rhode island nor a road or an island",
	imgL: "img/jadensmith.jpg",
	imgR: "img/bieber.jpg",
	option1:  "Jaden Smith",
	option2:  "Justin Bieber",

	correct:  "Justin Bieber"
},
{

	tweet:  "On our 6am walk, my daughter asked where the moon goes each morning. I let her know it's in heaven, visiting daddy's freedom.",
	imgL: "img/reynolds.jpg",
	imgR: "img/pratt.jpg",
	option1: "Ryan Renolds",
	option2: "Chris Pratt",

	correct: "Ryan Renolds"
},
{

	tweet: "Do identical twins have the same exact DNA? Like if 1 twin murders someone & leaves their DNA, can the other twin get blamed?",
	imgL: "img/kimkardashian.jpg",
	imgR: "img/hilton.jpg",
	option1:  "Kim Kardashian",
	option2:  "Paris Hilton",

	correct:  "Kim Kardashian"
},
{

	tweet:  "I wish i was aloud to use the n word sometimes (in a non racist way of course)",
	imgL: "img/skillrex.jpg",
	imgR: "img/Donald.jpg",
	option1: "Skrillex",
	option2: "Donald Trump",
	correct: "Skrillex"
}
];
var i = 0;
var test = 4;
var j = Math.floor((Math.random() * 9) + 1);;
var s = 0;




document.getElementById("imgleft").src = tweets[j].imgL;
document.getElementById("imgright").src = tweets[j].imgR;
document.getElementById("tweet").innerHTML = tweets[j].tweet;
document.getElementById("button-left").innerHTML = tweets[j].option1;
document.getElementById("button-right").innerHTML = tweets[j].option2;


/*--------------------------------------------------
//Problem 1: The test has 10 questions selected from a large bank of questions. We want 
//these questions to be in random order and a question must not be called twice for the 
//same test. 

var cancelQ = []; // defining an array to be filled with cancelled questions 
 //first random selection

for (var i = 0; i < 9; i++){ //number of questions
	while (cancelQ.includes(j)){
		var j = Math.floor((Math.random() * 9) + 1); //selection of the random question ( j ).
	}


--------------------------------------------------- */


	// put function Check() here

function pressLeftBut(){


		if (tweets[j].option1 == tweets[j].correct){
			document.getElementById("bl").style.background = 'green'
			document.getElementById('bn').style.display = "block";
				s= s+5;
			document.getElementById("score").innerHTML = "Score: " + s;
				document.getElementById('br').style.display = "none";

		}
		else{
			document.getElementById("bl").style.background = 'red'
			document.getElementById('bn').style.display = "block";
			document.getElementById('br').style.display = "none";
			
		}
			
}
function pressRightBut(){
	
	
		if (tweets[j].option2 == tweets[j].correct){
			console.log("Hi");
			document.getElementById("br").style.background = 'green'
				document.getElementById('bl').style.display = "none";
			document.getElementById('bn').style.display = "block";
					s= s+5;
			document.getElementById("score").innerHTML = "Score: " + s;

		}
		else{
			document.getElementById("br").style.background = 'red'
			document.getElementById('bn').style.display = "block";
				document.getElementById('bl').style.display = "none";

			
		}
		console.log(tweets[j].option2)
		console.log(tweets[j].correct)
			
}
	// put function Check() here
function nextBut(){

	if (i < 9){
		i = i+1;
		console.log(i);
		
		
		
		j = Math.floor((Math.random() * 9) + 1); //selection of the random question ( j ).
		console.log(j);
		console.log( tweets[j].tweet );
		
		document.getElementById("bl").style.background = 'transparent'
		document.getElementById("br").style.background = 'transparent'
		document.getElementById('bn').style.display = "none";
		document.getElementById('br').style.display = "block";
			document.getElementById('bl').style.display = "block";


		document.getElementById("imgleft").src = tweets[j].imgL;
		document.getElementById("imgright").src = tweets[j].imgR;
		document.getElementById("tweet").innerHTML = tweets[j].tweet;
		document.getElementById("button-left").innerHTML = tweets[j].option1;
		document.getElementById("button-right").innerHTML = tweets[j].option2;
		
	}
	else{
		window.location='end.html';
		document.getElementById("tweetS").innerHTML = "Score: ";
	}

}


/*function randomQuestion(){
	while (cancelQ.includes(j)){
		var j = Math.floor((Math.random() * 9) + 1);
	}
	cancelQ.push(j);
}



var j = Math.floor((Math.random() * 9) + 1);
var cancelQ = [j];
*/