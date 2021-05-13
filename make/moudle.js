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

function copylink() {
    var copyText = document.getElementById("output_link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}