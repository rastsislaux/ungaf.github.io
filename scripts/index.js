arg = document.URL.split('#');

if (arg[1] != undefined) {
  $(".content").hide()
  $(".item").removeClass("active")
  $('#' + arg[1] + '_cnt').show()
  $('#' + arg[1]).addClass("active")
}

$('.item').on('click', function (e) {
    e.preventDefault()
    $(".content").hide()
    $(".item").removeClass("active")
    $('#' + this.id + '_cnt').show()
    $('#' + this.id).addClass('active')
    window.location.replace("#"+this.id)
  })