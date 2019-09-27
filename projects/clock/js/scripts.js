//We need a way to get the current time and have that be updated each second.

//To do this we are going to create a function that contains a timer to call itself again each second.




function showTime(){
    var date = new Date(); //This gets us the current date and time.
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "AM";

    if (hour === 0){
        period = "AM";
    } else if (hour >= 12){
        period = "PM";
    }

    if (hour === 0){
        hour = 12;
    }
    if (hour > 12){
        hour -= 12;
        period = "PM";
    }
    hour = (hour < 10 ? ("0" + hour) : hour); //If hour is less than 10, set hour equal to 0 plus the value of hour. Else keep hour the same.
    minute = (minute < 10 ? ("0" + minute) : minute);
    second =(second < 10 ? ("0" + second) : second);

    var time = (hour + ":" + minute + ":" + second + " " + period);
    console.log(time);
    document.getElementById("clock").innerText = time;

    setTimeout(showTime, 1000); //Schedules the showTime function to be called after 1000 milliseconds, or one second.
    
}
function showDate(){
    var date = new Date();

    var day = date.getDate();
    var month =  1 + date.getMonth();
    var year = date.getFullYear();
    
    var MonthDayYear = (month + "/" + day + "/" + year);
    console.log(MonthDayYear);
    document.getElementById("date").innerText = MonthDayYear;
}
showDate();

showTime();
//We need to make sure the hour is properly represented in 12-hr time, and we also need to determine whether we should display AM or PM.