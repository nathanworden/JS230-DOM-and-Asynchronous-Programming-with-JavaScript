// Differences between the target and currentTarget properties on the even object that we covered in the earlier assignment.

// currentTarget is always the element to which an event listener is added.
// target refers to the element on which the event occurred.

// The value of this within the handler when using a function expression is the element that the listener was added to - currentTarget. As such, the following code are equivalent:

elem2.addEventListener('click', function(event) {
    alert(event.currentTarget.id);
});

//is equivalent to
elem2.addEventListener('click', function(event) {
    alert(this.id);
})

// What the capturing and bubbling mechanism implies is that events do not start and end on the target element or the element that an event was triggered on.

