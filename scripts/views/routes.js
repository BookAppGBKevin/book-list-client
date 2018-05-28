'use strict';


page('/', (ctx) => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', ctx => app.bookView.initAddForm(ctx));
page('/books/:book_id/update', (ctx, next) => app.book.fetchOne(ctx, next), ctx => app.bookView.initUpdateFormPage(ctx));
page('/books/:books_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));

page('/', (ctx) => { console.log('yep'); app.Book.fetchAll(app.bookView.initIndexPage);});

page('/book/new', ctx => app.bookView.initAddForm(ctx));

page('/book/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));


page();