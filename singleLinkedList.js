class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // tambah item baru di posisi terakhir
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // ini bisa pake this.tail.next tapi yg masuk di header karena itu assign variable linked sama yg this.head nya
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    // tambah item baru di posisi terakhir
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    // hapus item di posisi terakhir
    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // hapus item di posisi paling awal
    shift() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        this.head = current.next;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    // ambil posisi di posisi misal 0
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let position = 0;

        while(index !== position) {
            current = current.next;
            position++;
        }

        return current;
    }

    // update node at spesific index
    set(index, val) {
        let current = this.get(index);

        if (current && current.val) {
            current.val = val;
            return true;
        }
        
        return false;
    }

    // insert node right before at spesific index
    insert(index, val) {
        if (index < 0 || index >= this.length) return undefined;

        // kalo index 0, langsung pake function yang unshift saja untuk insert dipaling awal
        if (index === 0) {
            this.unshift(val);
            return true;
        };

        // kalo index = panjang linkedlist nya, langsung pake function yang push saja karena langsung insert yang dipaling akhir
        if (index === this.length) {
            this.push(val);
            return true;
        };

        // node yang mau di insertkan diposisi sebelum index
        let newNode = new Node(val);

        // ambil previous node, lalu nanti nextnya di set ke new value
        let prevNode = this.get(index-1);

        // ambil previousNode.next supaya bisa disambungkan di newNode.next = nextNode
        let nextNode = prevNode.next;

        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length++;

        return true;
    }
}

let list = new singleLinkedList();
list.push('Hi');
list.push('There');
list.push({name: 'Joko', email: 'joko@mail.com'});
// list.unshift({name: 'Anton', email: 'anton@mail.com'});
// list.unshift({name: 'Audrey', email: 'audrey@mail.com'});
// list.unshift('Hi');
// list.shift();
// list.pop();
// list.pop();
list.set(1, 'Michi Momo');
list.insert(1, 'Diablo');

console.log(JSON.stringify(list, null, 2));
// console.log(list.head.next.next);