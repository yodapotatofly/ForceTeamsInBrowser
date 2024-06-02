/**
 * Redirects to the meeting directly without showing the launcher screen
 * This runs at document start so we can execute as quickly as possible, mostly to preempt Teams's
 * annoying JS that tries to open the link in the desktop app, but also for a fast UX.
 */
//var intial_URL = "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NmRlZDY2YjYtYmQ5Mi00N2U5LTk4YjUtMzcyMzYzODk3MmM2%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25227ab7e405-f2ff-4f42-8d1a-f96e4fb5e8e3%2522%252c%2522Oid%2522%253a%2522ebe76229-41da-451d-a883-0ef4a71d2687%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=ec1a14bc-55bc-436b-b0e9-bc40b50e2d95&directDl=true&msLaunch=true&enableMobilePage=true"
var intial_URL = window.location.href;
var deeplink = Array.from(intial_URL.matchAll(/(&deeplinkId=.*?)(?:&|$)/gm), m => m[1])[0];
var newurl = intial_URL.replace(/\&.*/,'');
newurl = newurl.replace(/^.*?meetup-join/gm, "https://teams.microsoft.com/v2/?meetingjoin=true#/l/meetup-join");
newurl = newurl.concat(deeplink);
newurl = decodeURIComponent(newurl);
window.location.href = newurl;

