// Chrome injects content scripts after the DOM is complete

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

$(document).ready(function () {

  // Dublicate button
  var $button = $(".T-I.J-J5-Ji.ar7.nf.T-I-ax7.L3");
  var $buttonClone = $button.clone().toggleClass("dup-btn").removeAttr("id");
  $buttonClone.appendTo(".G-tF");

  // On hover
  $buttonClone.hover(function () {
    $(this).toggleClass("T-I-JW");
  }, function () {
    $(this).toggleClass("T-I-JW");
  });

  // On click
  $buttonClone.click(function () {
    $(this).toggleClass("T-I-JO T-I-Kq");
  });

  $(document).click(function (e) {
    if (!$(e.target).is($buttonClone)) {
      if ($($buttonClone).is(".T-I-JO.T-I-Kq")) {
        $($buttonClone).toggleClass("T-I-JO T-I-Kq");
      }
    }
  })
});
