'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = function (err) {
    $('.container').hide();
    app.showOnly('.error-view');
    $('#error-message').empty();
    $('#error-message').append(app.render('error-template', err));
    var template = Handlebars.compile($('#error-template').text());
    return template(this);
  };
  errorView.errorCallBack = function(err) { 
    console.log('error', err);
    errorView.initErrorPage(err);
  };
  module.errorView = errorView;
})(app);