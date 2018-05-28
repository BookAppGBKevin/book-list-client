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
    console.log(ctx);
    $('.book-detail').empty();
    app.showOnly('.detail-view');
    $('.book-detail').append(app.render('book-template-detail', ctx[0]));

    $('#delete-book').on('click', function() {
      module.Book.destroyBook($(this).data('id'));
    });

    $('#update-book').on('click', function() {
      $('.update-view').show();
      page(`/books/${$(this).data('id')}/update`);
    });
  };

  bookView.initUpdateForm = function(ctx) {
    app.showOnly('.update-view');

    $('#update-form input[name="author"]').val(ctx.book.author);
    $('#update-form input[name="title"]').val(ctx.book.title);
    $('#update-form input[name="isbn"]').val(ctx.book.isbn);
    $('#update-form input[name="image_url"]').val(ctx.book.image_url);
    $('#update-form textarea[name="description"]').val(ctx.book.description);

    $('#update-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        book_id: ctx.book.book_id,
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };
      module.Book.update(book, book.book_id);
    });
  };

  bookView.initAddForm = function() {
    $('.container').hide();
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