$(document).ready(function () {
  var $form = $('form')
  var $links = $('a')

  $links.on('click', function (e) {
    e.preventDefault()
  })

  $form.on('submit', function (e) {
    e.preventDefault()
    var details = $(this).serializeArray()
    var newArr = details.map(function (form) {
      return form.value
    })
    $('h1').text(newArr[1] + ': ' + newArr[2])
  })
})
