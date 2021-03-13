  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  var img = getParameterByName("img");
  var link = getParameterByName("link");
  var theme = getParameterByName("theme");
  img = atob(img);
  link = atob(link);
  
  if (theme != "black") {
    $("body").addClass("white");
  } else {
    $("body").addClass("black");
  }

  if (img == "" || link == "") {
    console.log("틀림");
  } else {
    $("#link").attr("href", link);
    $("#img").attr("src", img);
  }