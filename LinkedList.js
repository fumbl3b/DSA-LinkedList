class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null){
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findPrevious(item) {
    if(!this.head) {
      console.log(`${item} not found`);
      return;
    }
    let currNode = this.head;
    let prevNode = null;
    while(currNode.value !== item) {
      if(!currNode.next) {
        console.log(`${item} not found`);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    return prevNode.value;
  }

  findLast() {
    if(!this.head) {
      return;
    }
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    return currNode.value;
  }

  remove(item) {
    //if empty list
    if(!this.head) {
      return null;
    }
    //if item is first on list
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    //go through list until currNode.value matches the input
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    //point to the next item
    previousNode.next = currNode.next;
  }

  display() {
    if(!this.head) {
      return;
    }
    let currNode = this.head;
    process.stdout.write('\n');
    while(currNode) {
      if(!currNode.next) {
        process.stdout.write(`${currNode.value}`);
        break;
      }
      process.stdout.write(`${currNode.value}, `);
      currNode = currNode.next;
    }
    process.stdout.write('\n\n');
  }

  size() {
    if(!this.head) {
      return 0;
    }
    let counter = 1;
    let node = this.head;

    while(node.next) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  insertBefore(item, newItem) {
    if(!this.head) {
      console.log(`"${item}" not found`);
      return;
    }

    let currNode = this.head;
    let prevNode = null;

    while(currNode.value !== item) {
      if(!currNode.next) {
        console.log(`"${item}" not found`);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    
    const newListItem = new _Node(newItem);
    newListItem.next = currNode;
    if(!prevNode) {
      this.insertFirst(newItem);
    } else {
      prevNode.next = newListItem;
    }
  }

  isEmpty() {
    return !!this.head;
  }

  insertAfter(item, newItem) {
    if(!this.head) {
      console.log(`"${item}" not found`);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while(currNode.value !== item) {
      if(!currNode.next) {
        console.log(`"${item}" not found`);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newListItem = new _Node(newItem);
    newListItem.next = currNode.next;
    currNode.next = newListItem;
  }

  insertAt(position, newItem) {
    if(position === 1) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.head;
    let prevNode;
    let i = 1;

    while(i !== position) {
      if(!currNode.next) {
        console.log(`there are only ${i} positions, ${position} invalid.`);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }
    const newListItem = new _Node(newItem);
    newListItem.next = currNode;
    prevNode.next = newListItem;
  }
}


module.exports = LinkedList;