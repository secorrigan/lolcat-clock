var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
	var timeEventJS = document.getElementById("timeEvent");
	var lolcatImage = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	lolcatImage.src = image;

	if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
        messageText = "Good morning!";
	} else if (time > evening) {
        messageText = "Good Evening!";
	} else {
        messageText = "Good afternoon!";
	}

	timeEventJS.innerText = messageText;

	var showCurrentTime = function() {
    // display the string on the webpage
        var clock = document.getElementById('clock');
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }
        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
        clock.innerText = clockTime;
	};
	showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        // text in the button should read "Party Over"
        partyTimeButton.innerText = "Party Over";
        // color of the button should be "#0A8DAB" (bonus!)
    }
    else {
        isPartyTime = false;
        time = new Date().getHours();
        // text in the button should read "PARTY TIME!"
        partyTimeButton.innerText = "PARTY TIME!";
        // color of the button should be "#222" (bonus!)
    }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};
var lunchTimeEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var napTimeEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napTimeEvent);