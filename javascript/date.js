let thirteenth = new Date("Dec 12, 2022 8:00 pm");
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = thirteenth - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + ' days, ';
    document.getElementById('countdown').innerHTML += hours + ' hours, ';
    document.getElementById('countdown').innerHTML += minutes + ' minutes, and ';
    document.getElementById('countdown').innerHTML += seconds + ' seconds';

    const daysAgo = new Date();
    var options = { month: 'long', day: 'numeric' };

    daysAgo.setDate(daysAgo.getDate() - days);
    document.getElementById('daysago').innerHTML = `${days} days ago was ${daysAgo.toLocaleDateString('en-US', options)}`;
}
showRemaining();

timer = setInterval(showRemaining, 1000);
