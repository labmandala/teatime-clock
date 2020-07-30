$(document).ready(function(){

    // Gobal variables
    var wakeUpTime = 7; // 7AM
    var noon = 12;
    var lunchTime = 12; // 12PM
    var partyTime = 17; // 5PM
    var evening = 18; // 6PM
    var napTime = lunchTime + 2; // 2PM
    
    // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
    var time = new Date().getHours(); 
    
    // Increment clock and change out messages and pictures
    var updateClock = function() 
    {
        var messageText;
    
        // Getting image DOM elements
        var message = document.getElementById('timeEvent'); 
        var lolcat = document.getElementById('lolcat');  
    
        // Defining default image
        var image = "img/b-n-w-bckgrnd-thmb.jpg";
    
        if (time == partyTime) 
        {
            image = "img/tea-party-time.jpg";
            messageText = "It's Party Time!";
        } else if (time == napTime) 
        {
            image = "img/nap-tea-flowers.jpg";
            messageText = "It's Nap Time...";
        } else if (time == lunchTime) 
        {
            image = "img/lunch-tea.jpg";
            messageText = "It's Lunch Time!";
        } else if (time == wakeUpTime) 
        {
            image = "img/morning-matcha.jpg";
            messageText = "It's Time to Wake up!";
        } else if (time < noon) 
        {
            messageText = "Good morning, Mate!";
        } else if (time > evening) 
        {
    //        image = "img/tea-glasses.jpg"
            messageText = "Good Evening, Mate!";
        } else 
        {
            messageText = "Good afternoon, Mate!";
        }
    
        // console.log(messageText);
        message.innerText = messageText;
        lolcat.src = image;
    
    // Display current time on webpage
    var showCurrentTime = function() 
    {
        // Display the string on webpage
        var clock = document.getElementById('clock');
    
        var currentTime = new Date();
    
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
    
        // Set hours 
        if (hours >= noon) 
        {
            meridian = "PM";
        }
        if (hours > noon) 
        {
            hours = hours - 12; 
        }
    
        // Set Minutes
        if (minutes < 10) 
        {
            minutes = "0" + minutes;
        }
    
        // Set Seconds
        if (seconds < 10) 
        {
            seconds = "0" + seconds;
        }
    
        // Put together string to display the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    
        clock.innerText = clockTime;
    };
    
    
        showCurrentTime();
    };
    
    updateClock();
    
    // Increment clock each second
    var oneSecond = 1000;
    setInterval(updateClock, oneSecond);
    
    // Get Party Time Button to function
    var partyTimeButton = document.getElementById("partyTimeButton");
    
    // Dropdown time selectors
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
    var lunchTimeSelector = document.getElementById("lunchTimeSelector");
    var napTimeSelector = document.getElementById("napTimeSelector");
    
    var isPartyTime = false;
    
    var partyEvent = function() 
    {
        if (isPartyTime === false) 
        {
           isPartyTime = true;
           time = partyTime;
           partyTimeButton.innerText = "PARTY TIME!";
           partyTimeButton.style.backgroundColor = "#945d9d";
        } 
        else 
        {
           isPartyTime = false;
           time = new Date().getHours();
           partyTimeButton.innerText = "Party Over";
           partyTimeButton.style.backgroundColor = "#222";
        }
     };
    
     var wakeUpEvent = function()
     {
         wakeUpTime = wakeUpTimeSelector.value;
     };
    
     var lunchEvent = function()
     {
         lunchTime = lunchTimeSelector.value;
     };
    
     var napEvent = function()
     {
         napTime = napTimeSelector.value;
     };
    
     //partyTimeButton.addEventListener('click', partyEvent); >> change to jQuery format:
     $("#partyTimeButton").click(partyEvent);
     // partyEvent(); 
    
     wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
     lunchTimeSelector.addEventListener('change', lunchEvent);
     napTimeSelector.addEventListener('change', napEvent);
     
    });