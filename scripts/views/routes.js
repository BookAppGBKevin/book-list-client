'use strict';

page('/', (ctx) => { console.log('yep'); app.Book.fetchAll(app.bookView.initIndexPage);});

page('/book/new', ctx => app.bookView.initAddForm(ctx));

page('/book/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));

page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next), ctx => app.bookView.initUpdateForm(ctx)
);

page();