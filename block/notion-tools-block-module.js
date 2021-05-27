function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function copylink() {
    var copyText = document.getElementById('output_link');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function apply_theme() {
    let theme = getParameterByName('t');
    if (theme != "black") {
        $("body").addClass("white");
    } else {
        $("body").addClass("black");
    }
}

var our_url;
if (window.location != window.parent.location) {
    out_url = document.referrer
} else {
    out_url = document.location.href
}

if (!out_url) {
    out_url = document.location.ancestorOrigins[0]
}

$.ajax({
    url: 'https://api2.notion-tools.com/v1/embed',
    data: {
        in: document.location.href,
        out: out_url
    },
    type: "POST",
    dataType: "json"
}).done(json => {
    console.log(json)
}).fail((xhr, status, errorThrown) => {
    console.log(`Server connect fail ${status} ${errorThrown}`)
} )

