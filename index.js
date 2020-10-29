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
  
  SLL.remove('UNICORN');
  SLL.remove('Lord Snow');
  
  SLL.insertBefore('Boomer', 'Athena');
  SLL.display();

  const testList2 = new LinkedList();

  testList2.insertFirst('test');
  testList2.insertBefore('test', 'bacon');
  SLL.display();
  console.log('SLL is size: ', SLL.size());
  testList2.display();
  console.log('testList2 is size: ', testList2.size());

  const empty = new LinkedList();
  console.log('empty.isEmpty() is: ', empty.isEmpty());
  console.log('SLL.isEmpty() is: ', SLL.isEmpty());

  console.log('findPrevious of Starbuck :', SLL.findPrevious('Starbuck'));
  console.log('findPrevious of Wendy\'s :', SLL.findPrevious('Wendy\'s'));

  console.log('findLast of testList2', testList2.findLast());
  console.log('findLast of SLL', SLL.findLast());
  console.log('findLast of empty', empty.findLast());


  

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