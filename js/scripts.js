$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>What's up!?</li>");
    $("ul#webpage").prepend("<li>Just Chillin'</li>");
    $("li").css('background-color', 'green');
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Catch ya later!</li>");
    $("ul#webpage").prepend("<li>Leaving so soon!?</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>wie geht's?</li>");
    $("ul#webpage").prepend("<li>Oh you speak German? You fancy.</li>");
  });
});
