$(document).ready(function(){
  $('slide').on('slideenter', function(){
    $(this).trigger('slidechanged');
  })
})