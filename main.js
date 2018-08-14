// Create three stacks with max capacity of 20. Create a web interface to add numbers to each stack. The website should return an error if the capacity of a stack is exceeded.




class Stack {
  constructor() {
    this.storage = [];
    this.capacity = 20;
    this.size = 0;
  }

  push(value) {
    if (!value) {
      return alert("please enter a value");
    }

    if (this.size > this.capacity) {
      return alert("stack size exceeded");
    }

    if (value && this.size < this.capacity) {
      this.storage[this.size] = value;
      this.size++;
    }
  }
}





class Node{
  constructor(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.height = 0;
  this.duplicates = 0;
  }
  insert(node){
    if (node.value < this.value) {
      this.height--;
      if (this.left) {
        return this.left.insert(node);
      }
      this.left = node;
    }
  
    if (node.value > this.value) {
      this.height++;
      if (this.right) {
        return this.right.insert(node);
      }
      this.right = node;
    }
  
    if (node.value === this.value) {
      this.duplicates++;
    }
  }
}

class Bst {
  constructor() {
    this.root = null;
    this.length = 0;
    this.nid = 0;
  }

  insert(value) {
    if (!value) {
      return;
    }

    let node = new Node(this.nid++, value);
    this.length++;

    if (!this.root) {
      this.root = node;
      return this.length;
    }

    this.root.insert(node);
  }
}

let stack1 = new Stack();
let stack2 = new Stack();
let stack3 = new Stack();
let bst = new Bst();


stack1.push(1);
stack1.push(3)
stack1.push(5)
stack1.push(7)
stack1.push(9)
stack1.push(12)
stack1.push(15)
stack1.push(18)
stack1.push(21)
stack1.push(23)
stack1.push(2)
stack1.push(4)
stack1.push(6)
stack1.push(8)
stack1.push(10)
stack1.push(12)
stack1.push(14)
stack1.push(18)
stack1.push(20)
stack1.push(22)
