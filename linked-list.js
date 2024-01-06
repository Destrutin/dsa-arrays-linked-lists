/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) { 
      throw new Error('Invalid index');
    } else {
      let idxVal = this.head;
      for (let i = 0; i < idx; i++) {
        idxVal = idxVal.next;
      }
      return idxVal.val
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) { 
      throw new Error('Invalid index');
    } else {
      let idxVal = this.head;
      for (let i = 0; i < idx; i++) {
        idxVal = idxVal.next;
      }
      idxVal.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) { 
      throw new Error('Invalid index');
    }
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    if (idx === this.length) {
      this.push(val);
      return;
    }
    let newNode = new Node(val);
    let current = this.head;
    let previous = null;
    for (let i = 0; i < idx; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = newNode;
    newNode.next = current;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) { 
      throw new Error('Invalid index');
    }
    if (idx === 0) {
      this.shift();
      return;
    }
    if (idx === this.length - 1) {
      this.pop();
      return;
    }
    let current = this.head;
    let previous = null;
    for (let i = 0; i < idx; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
    return current.val
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    } else {
      let total = 0;
      let current = this.head;
      while (current) {
        total += current.val;
        current = current.next;
      }
      return total / this.length;
    }
}

module.exports = LinkedList;
