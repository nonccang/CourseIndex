$(document).ready(function () {
  $(".details").css({ display: "none" });

  $("header .atag").click(function () {
    $(".details").slideToggle();
  });
});
