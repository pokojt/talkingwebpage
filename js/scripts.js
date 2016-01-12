$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>What's up!?</li>");
    $("ul#webpage").prepend("<li>Just Chillin'</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#webpage").children("li").first().remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      $("ul#user").children("li").first().remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Catch ya later!</li>");
    $("ul#webpage").prepend("<li>Leaving so soon!?</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#webpage").children("li").first().remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      $("ul#user").children("li").first().remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>wie geht's?</li>");
    $("ul#webpage").prepend("<li>Oh you speak German? You fancy.</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#webpage").children("li").first().remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      $("ul#user").children("li").first().remove();
    });
  });
});
