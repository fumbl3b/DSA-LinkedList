const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Gorge');

  SLL.display();

  console.log('inserting UNICORN at position 1');
  SLL.insertAt(1, 'UNICORN');
  SLL.display();

  console.log('inserting Lord Snow at position 4');
  SLL.insertAt(4, 'Lord Snow');
  SLL.display();

  console.log('inserting bepis at position 100');
  SLL.insertAt(100, 'bepis');
  SLL.display();
  
  // console.log('inserting test before starbuck');
  // SLL.insertBefore('Starbuck','test');
  // SLL.display();

  // console.log('inserting bread before something not in the list');
  // SLL.insertBefore('Bacon','bread');

  // console.log('inserting Harry after Helo');
  // SLL.insertAfter('Helo', 'Harry');
  // SLL.display();


}

main();