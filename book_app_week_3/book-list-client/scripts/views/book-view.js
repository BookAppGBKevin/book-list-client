'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});