const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/locations",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "escape-from-tarkov.p.rapidapi.com",
		"x-rapidapi-key": "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/currencies",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "escape-from-tarkov.p.rapidapi.com",
		"x-rapidapi-key": "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/bosses",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "escape-from-tarkov.p.rapidapi.com",
		"x-rapidapi-key": "2934d3483emsh3ea1fbe8a0e5bddp17c441jsnd91e4b089144"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});