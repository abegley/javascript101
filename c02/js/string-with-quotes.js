/**
 * Created by alan on 28/05/15.
 */
var title;
var message;
title = "Example of injecting anchor tag via JavaScript";
message = '<a href=\"oops.html\"> click me!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;
