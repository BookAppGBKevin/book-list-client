'use strict';

page('/', (ctx) => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', ctx => app.bookView.initAddForm(ctx));
page('/books/:books_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));
page();