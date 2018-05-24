'use strict';

page('/', (ctx) => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', ctx => app.bookView.initAddForm(ctx));
page('/books/:books_id', ctx => app.Book.fetchOne(ctx, app.bookView.initdetailpage));
page();

function mutateMyStrings(stringOne, stringTwo){
let stringOne = 'bubble gum'.split('');
let stringTwo = 'turtle ham'.split('');
let resultArray = [];
for (let i = 0; i < stringOne.length; i++) { 
  if (stringOne[i] !== stringTwo[i]) {
    stringOne[i] = stringTwo[i]
    resultArray.push(stringOne.join('') + '/n')
  }
}
return resultArray.join('');
}