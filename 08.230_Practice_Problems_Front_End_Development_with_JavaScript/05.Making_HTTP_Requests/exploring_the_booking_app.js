/*
How many staff are there?
5

How many students are there?
5

How many schedules exist?
9

How many schedules have bookings?
3

Do all staff have schedules?
No, because there are more staff than schedules

Did all students book a schedule?
No
*/

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/api/staff_members');
request.addEventListener('load', event => {
    console.log('load');
    console.log(event);
    var request = event.target;
    console.log(request.responseText);
    console.log(request.status);
    console.log(request.statusText);
});
request.send();



// Implement a function that retrieves all the schedules that are available

function getSchedules() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/schedules')
    request.addEventListener('load', event => {
        let request = event.target;
        let response = JSON.parse(request.responseText);

        
        response.forEach(schedule => {

        });
    });
    request.send();
}