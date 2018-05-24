'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  $('.icon-menu').on('click', function(event) {
    $('.nav-menu').slideToggle(400);
  });

  bookView.initIndexPage = function(ctx) {
    $('#book-list').empty();
    app.showOnly('.book-view');
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function(ctx) {
    $('#book-detail').empty();
    app.showOnly('detail-view');
    $('.book-detail.append').append(app.render('book-detail-template', ctx));
  };

  bookView.initAddForm = function() {
    $('.add-view').show();
    $('.add-link').show();
    $('#add-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };

      module.Book.createBook(book);
    });
  };

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});