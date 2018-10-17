'use strict'

var FactorialController = (function() {
  function _showResult(result) {
    var span = document.getElementById('result')
    span.innerHTML = result || 0
  }

  function _getNumber() {
    var inputNumber = document.getElementById('number')
    var number = parseInt(inputNumber.value)
    return number
  }

  function _eventClickHandler(event) {
    event.preventDefault()
    var result = FactorialService.calculate(_getNumber())
    _showResult(result)
  }

  function _setButton() {
    var form = document.querySelector('form')
    form.addEventListener('submit', _eventClickHandler)
  }

  function init() {
    _setButton()
  }

  //public api
  return {
    init: init
  }
})()
