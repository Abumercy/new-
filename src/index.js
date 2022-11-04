// shorten url api
$("#shortenUrl").submit(function (e) {
  e.preventDefault();
  const baseUrl = "https://api.shrtco.de/v2/shorten";
  const inputUrl = $("input[name=url]").val();

  if (inputUrl == "") {
    $(".remind").removeClass("hidden");
  } else {
    $(".remind").addClass("hidden");
    $.ajax({
      type: "POST",
      url: baseUrl,
      dataType: "JSON",
      data: {
        url: inputUrl,
      },
      success: function (res) {
        const shortenUrl = res.result.full_short_link;
        $("#shortenResults").append(
          `<div class="w-full rounded bg-white shadow-sm sm:flex flex-row items-center sm:px-3">
            <p class="text-black p-3 flex-1">${inputUrl}</p>
            <hr>
            <div class="p-3 border-shortly-gray flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-end sm:gap-6">
              <p class="text-shortly-cyan mb-3 sm:mb-0">${shortenUrl}</p>
              <button id="${shortenUrl}" class="btn-square hover:bg-shortly-light-cyan" onclick="handleCopyUrl(this)">Copy</button>
            </div>
          </div>`
        );
      },
      error: function (xhr) {
        $(".remind").removeClass("hidden");
        $(".remind").text(xhr.responseJSON.error);
      },
    });
  }
});

function handleCopyUrl(e) {
  const button = $(e);
  const shortenUrl = $(e).attr("id");
  button.text("Copied");
  button.css("background", "hsl(257, 27%, 26%)");
  navigator.clipboard.writeText(shortenUrl);
}

function handleOpenMenu() {
  const mobileMenu = $("#mobileMenu");
  mobileMenu.toggleClass("hidden");
}
