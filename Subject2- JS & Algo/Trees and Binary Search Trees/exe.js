class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

        insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    //Ex 1- find node
     findNode(value) {
        if (this.value === value) {
            return true;
        } else if (value < this.value && this.leftChild) {
            return this.leftChild.findNode(value);
        } else if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value);
        } else {
            return false;
        }
    }

    //Ex 2- common parent
    findCommonParent(val1, val2) {
        //if both are smaller- go left
        if (val1 < this.value && val2 < this.value && this.leftChild) {
            return this.leftChild.findCommonParent(val1, val2);
        }
        //if both are greater- go right
        if (val1 > this.value && val2 > this.value && this.rightChild) {
            return this.rightChild.findCommonParent(val1, val2);
        }
        // otherwise - this node is the common parent
        return this.value;
    }

    //Ex3 - delete node
    
    //helper function to find the minimum value in the subtree
    findMinValue() {
        if (this.leftChild) {
            return this.leftChild.findMinValue();
        }
        return this.value;
    }

    removeNode(parent, value) {
        // Search to the left if the value is smaller than current node
        if (value < this.value && this.leftChild) {
            return this.leftChild.removeNode(this, value);
        }

        // Search to the right if the value is greater than current node
        if (value > this.value && this.rightChild) {
            return this.rightChild.removeNode(this, value);
        }

        // If the current node does not match the value, and no child to search – return false
        if (value !== this.value) {
            return false;
        }

        // Node found
        // Case 1: Node has no children
        if (!this.leftChild && !this.rightChild) {
            if (parent) {
                if (parent.leftChild === this) {
                    parent.leftChild = null;
                } else {
                    parent.rightChild = null;
                }
            }
            return true;
        }

        // Case 2: Node has only a right child
        if (!this.leftChild && this.rightChild) {
            if (parent) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.rightChild;
                } else {
                    parent.rightChild = this.rightChild;
                }
            }
            return true;
        }

        // Case 3: Node has only a left child
        if (this.leftChild && !this.rightChild) {
            if (parent) {
                if (parent.leftChild === this) {
                    parent.leftChild = this.leftChild;
                } else {
                    parent.rightChild = this.leftChild;
                }
            }
            return true;
        }

        // Case 4: Node has two children
        // Find the minimum value in the right subtree and replace the current node's value with it
        const minVal = this.rightChild.findMinValue();
        this.value = minVal;
        return this.rightChild.removeNode(this, minVal);
    }

    //Print the tree for debugging
    printInOrder() {
        if (this.leftChild) this.leftChild.printInOrder();
        console.log(this.value);
        if (this.rightChild) this.rightChild.printInOrder();
    }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));

console.log("Before removing 9 (one child case):");
nodeWithOneChild.printInOrder();

nodeWithOneChild.removeNode(nodeWithOneChild, 9);// will return tree like the first image (the 9 will be deletied) 

console.log("After removing 9:");
nodeWithOneChild.printInOrder();



let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));

console.log("\nBefore removing 8 (two children case):");
nodeWithTwoChildren.printInOrder();

nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8);// will return tree like the second image (the root will be 5) 

console.log("After removing 8:");
nodeWithTwoChildren.printInOrder();




