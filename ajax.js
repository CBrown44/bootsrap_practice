
//bosses in game
const bossData = null;

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


//locations in game
const locationData = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/locations");
xhr.setRequestHeader("x-rapidapi-host", "escape-from-tarkov.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144");

xhr.send(locationData);


//currency in game
const moneyData = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/currencies");
xhr.setRequestHeader("x-rapidapi-host", "escape-from-tarkov.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144");

xhr.send(moneyData);