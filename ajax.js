//bosses in game
const bossData = null;

const bossName1 = document.querySelector('.bossName1')
const spawnrate1 = document.querySelector('.spawnRate1')
const follower1 = document.querySelector('.follower1')

const bossName2 = document.querySelector('.bossName2')
const spawnrate2 = document.querySelector('.spawnRate2')
const follower2 = document.querySelector('.follower2')

const bossName3 = document.querySelector('.bossName3')
const spawnrate3 = document.querySelector('.spawnRate3')
const follower3 = document.querySelector('.follower3')

const bossName4 = document.querySelector('.bossName4')
const spawnrate4 = document.querySelector('.spawnRate4')
const follower4 = document.querySelector('.follower4')

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/bosses");
xhr.setRequestHeader("x-rapidapi-host", "escape-from-tarkov.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");

xhr.send(bossData);


//Dealers in game
const data = null;

const dealerName1 = document.querySelector('.dealerName1')
const realName1 = document.querySelector('.realName1')
const origin1 = document.querySelector('.origin1')

const dealerName2 = document.querySelector('.dealerName2')
const realName2 = document.querySelector('.realName2')
const origin2 = document.querySelector('.origin2')

const dealerName3 = document.querySelector('.dealerName3')
const realName3 = document.querySelector('.realName3')
const origin3 = document.querySelector('.origin3')

const dealerName4 = document.querySelector('.dealerName4')
const realName4 = document.querySelector('.realName4')
const origin4 = document.querySelector('.origin4')

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/dealers");
xhr.setRequestHeader("x-rapidapi-host", "escape-from-tarkov.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "40ea6137eemsh9ce3a93415e7d0ap17fac4jsndf9a819d6dde");

xhr.send(data);


//currency in game
const moneyData = null;

const bhr = new XMLHttpRequest();
bhr.withCredentials = true;

bhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
	document.getElementById('rouble').value = [0].name;
	document.getElementById('euro').value = [1].name;
	document.getElementById('dollar').value = [2].name;
});

bhr.open("GET", "https://rapidapi.p.rapidapi.com/currencies");
bhr.setRequestHeader("x-rapidapi-host", "escape-from-tarkov.p.rapidapi.com");
bhr.setRequestHeader("x-rapidapi-key", "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144");

bhr.send(moneyData);