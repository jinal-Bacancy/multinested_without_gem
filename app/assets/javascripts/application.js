// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require_tree .


$(document).on('turbolinks:load', function() {
	// $('.datepicker').datepicker();
  $('form').on('click', '.destroy_record', function(event) {
    $(this).prev('input[type=hidden]').val('1');
    $(this).closest('tr').hide(); // don't remove it otherwise it will not pass destroy true
    return event.preventDefault();
  });

  $('form').on('click', '.add_record', function(event) {
  	console.log("test")
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g'); 
    $('#tasks').append($(this).data('nested-html').replace(regexp, time));
    return event.preventDefault();
  });

  $('tr').on('click', '.destroy_record_comment', function(event) {
    $(this).prev('input[type=hidden]').val('1');
    $(this).closest('tr').hide(); // don't remove it otherwise it will not pass destroy true
    return event.preventDefault();
  });

  $('tr').on('click', '.add_record_comment', function(event) {
    console.log("comment add clicked")
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g'); 
    $('#comments').append($(this).data('nested-comment-html').replace(regexp, time));
    return event.preventDefault();
  });

});
