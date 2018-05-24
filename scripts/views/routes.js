'use strict';

page('/', (ctx) => app.Book.fetchAll(app.bookView.initIndexPage));

page('/book/add', ctx => app.bookView.initAddForm(ctx));

page('/book/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));

page();