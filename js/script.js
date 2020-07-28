
var host = 'gladHost.html';

$(".b1").click(() => $(location).attr('href','https://jaceybuchner.github.io/GOC/'+host));


$(".b2").click(() => $(location).attr('href','https://jaceybuchner.github.io/GOC/sessionMaxV2.html'));

$(".b3").click(() => alert("This session is closed")); 

var rolesA = 'rolesSpotA';

var rolesB = 'rolesSpotB';

$(".rolesA").click(() => alert("this will route you to the Roles A Assignment page"));

$(".rolesB").click(() => alert("this will route you to the Roles B Assignment page"));