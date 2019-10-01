const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;

    }

    append(data) {
        const newNode = new Node(data);

        if(this.length === 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;

            if(this.length === 1) {
                this._head.next = newNode;
                newNode.prev = this._head;
            }
        }
        this.length += 1;

    }

    head() {
        return this._head.data;
    }

    tail() {
        console.log(this._tail.data);
        return this._tail.data;
    }

    at(index) {
        if (index > -1) {
            let curNode = this._head;
            let i = 0;
            while ((curNode !== null) && (i < index)) {
                curNode = curNode.next;
                i++;
            }
             if(curNode !== null){
                 return curNode.data;
             }
        }
    }

    insertAt(index, data) {

        if (index > -1) {
            const newNode= new Node(data);
            let curNode = this._head;
            let i = 0;
            while ((curNode !== null) && (i < index)) {
                curNode = curNode.next;
                i++;
            }
            newNode._next = curNode;
            if(curNode.prev === null) {
                newNode.prev = null;
                this._head = newNode;
            } else {
                newNode.prev = curNode.prev;
                curNode.prev.next = newNode;
            }
            curNode.prev = newNode;
            newNode.next = curNode;
        }

    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
