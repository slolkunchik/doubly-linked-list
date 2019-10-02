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
        return this;
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
        } else {
            return undefined;
        }
    }

    insertAt(index, data) {

        if (index > -1) {
            const newNode = new Node(data);
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

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
    }

    deleteAt(index) {
        if (index > 0) {
            let curNode = this._head;
            let i = 0;
            while ((curNode !== null) && (i < index)) {
                curNode = curNode.next;
                i++;
            }

            if (curNode.prev === null) {
                this._head = curNode.next;
            } else {
                curNode.prev.next = curNode.next;
            }

            if(curNode.next === null) {
                this._tail = curNode.prev;
            } else {
                curNode.next.prev = curNode.prev;
            }
        } else {
            return undefined;
        }
        return this;
    }

    reverse() {
        let curNode = this._head;
        this._tail = curNode;

        while (curNode !== null) {
            let temp = curNode.prev;
            curNode.prev = curNode.next;
            curNode.next = temp;

            if (curNode.prev !== null) {
                curNode = curNode.prev;
            } else {
                this._head = curNode;
                break;
            }
        }
        return this;
    }

    indexOf(data) {
        let curNode = this._head;
        let i = 0;
        while ((curNode !== null) && (i < this.length)) {
            if (curNode.data === data) {
                return i;
            }
            curNode = curNode.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
