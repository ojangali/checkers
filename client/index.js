'use strict';
$(document).ready(init);

function init(){
  $('.piece').click(pieceSelection);
}

function pieceSelection(){
  $(this).addClass('selected');

}
