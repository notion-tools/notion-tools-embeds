const modal = (modal, mode) => {
    $(".modal_text").text(modal);
    if (mode === "good") {
        $("#modal").css("background-color", "#5691d4")
        $("#modal").addClass("modal_show");
    } else if (mode === "bad") {
        $("#modal").css("background-color", "#df5151")
        $("#modal").addClass("modal_show");
    }

    setTimeout(() => {
        $("#modal").removeClass("modal_show");
    }, 3000)
}

// <div id="modal" onclick="$(this).removeClass(`modal_show`)">
//    <div class="modal_text"></div>
// </div>

function copylink() {
    var copyText = document.getElementById("output_link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

const make_embed = (name) => {
    if (window.location != window.parent.location) {
        $.ajax({
            url: 'https://api2.notion-tools.com/make_embed',
            data: {
                link: name,
            },
            type: "POST",
            dataType: "json"
        }).done(json => {
            console.log("Server connection successful")
        }).fail((xhr, status, errorThrown) => {
            console.log(`Server connect fail ${status} ${errorThrown}`)
        } )
    }
}