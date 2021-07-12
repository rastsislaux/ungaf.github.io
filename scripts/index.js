$('.item').on('click', function (e) {
    e.preventDefault()
    $(".content").hide()
    $(".item").removeClass("active")
    $('#' + this.id + '_cnt').show()
    this.addClass("active")
  })