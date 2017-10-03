const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        const node = new Node(data);
        if (!this._head){
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return (!this._head) ? null : this._head.data;
    }

    tail() {
        return (!this._tail) ? null : this._tail.data;
    }

    at(index) {
        if(index > -1 && index < this.length){
            let current = this._head,
                i=0;
            while (i++ < index){
                current = current.next;
            }
            return current.data;
        }
    }

    insertAt(index, data) {
        const node = new Node(data);
        if(index > -1 && index <= this.length){
            let current =this._head,
                i=0;
            if(index === 0){
                if(!this._head){
                    this._tail = node;
                    this._head = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this._head = node;
                }
            }else if (index === this.length){
                current = this._tail;
                current.next = node;
                node.prev = current;
                this._tail = node;
            } else {
                while (i++ < index){
                    current = current.next;
                }
                node.prev = current.prev;
                node.next = current;
                current.prev.next = node;
                current.prev = node;
            }
            this.length++;
            return this;
        } else  {
            throw new Error ("Insufficient wrong index.");
        }
    }

    isEmpty() {
        return !this._head;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        if(index > -1 && index < this.length ){
            let current = this._head,
                i=0;
            if (index === 0){
                this._head = current.next;
                if (!this._head){
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            } else if (index === this.length - 1){
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
                while (i++ < index ){
                    current = current.next;
                }
                current.prev.next = current.next;
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        let current = this._head;
        while(current){
            const tp = current.next;
            current.next = current.prev;
            current.prev = tp;
            current = tp;
        }
        const tp = this._head;
        this._head = this._tail;
        this._tail = tp;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i=0;
        while (current) {
            if(current.data === data){
                return i;
            } else {
                current = current.next;
                i++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;