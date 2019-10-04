const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;  //начальная инициализация
        this._head = null;
        this._tail = null;

    }

    append(data) {
        const newNode = new Node(data);

        if(this.length === 0) { //когда еще нету нод
            this._head = newNode;
            this._tail = newNode;
        } else { //замена tail и новой ноды
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;

            if(this.length === 1) { //отдельно если нода только одна и tail совпадало до добавления с head
                this._head.next = newNode;
                newNode.prev = this._head;
            }
        }
        this.length += 1; //обновляем длину листа
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index > -1) {
            let curNode = this._head; //начинаем сначала перебор
            let i = 0;
            while ((curNode !== null) && (i < index)) { //пока не дойдем до null в конце(проверка) и индекс не станет равен заданному
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
            let curNode = this._head; //аналогично как at(index)
            let i = 0;
            while ((curNode !== null) && (i < index)) {
                curNode = curNode.next;
                i++;
            }
            newNode._next = curNode; //теперь добавляем новую ноду
            if(curNode.prev === null) { //проработка исключения
                newNode.prev = null;
                this._head = newNode;
                this._tail = newNode;
            } else {
                newNode.prev = curNode.prev; //вставка и замена местами с текущей нодой
                curNode.prev.next = newNode;
            }
            curNode.prev = newNode; //вставка и замена местами с текущей нодой
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

        return this;
    }

    deleteAt(index) {
        if (index > 0) {
            let curNode = this._head; //аналогично, начинаем перебор с начала
            let i = 0;
            while ((curNode !== null) && (i < index)) {
                curNode = curNode.next;
                i++;
            }

            if (curNode.prev === null) { //проработка исключения, удаляем
                this._head = curNode.next;
            } else {
                curNode.prev.next = curNode.next; //esle удаляем
            }

            if(curNode.next === null) { // приводим в порядок tail, если удаление в конце
                this._tail = curNode.prev;
            } else {
                curNode.next.prev = curNode.prev;
            }
        }
        return this;
    }

    reverse() {
        let curNode = this._head; //начало, меняем head и tail и идем с конца в начало
        this._tail = curNode;

        while (curNode !== null) {
            let temp = curNode.prev; //вводим временную вспомогательную переменную и с помощью нее делаем перемену
            curNode.prev = curNode.next;
            curNode.next = temp;

            if (curNode.prev !== null) { // условие перебора цикла, пока не дойдем в начало
                curNode = curNode.prev;
            } else {
                this._head = curNode;
                break;
            }
        }
        return this;
    }

    indexOf(data) {
        let curNode = this._head; //перебор сначала
        let i = 0;
        while ((curNode !== null) && (i < this.length)) { //пока не дойдем до конца
            if (curNode.data === data) { // сверяем значения в ноде с требуемым
                return i; // если нашли, то возвращаем индекс ноды
            }
            curNode = curNode.next; // если не нашли, перебираем дальше до конца листа
            i++;
        }
        return -1; // случай, если данные в нодах листа не совпадают с запрашиваемыми данными
    }
}

module.exports = LinkedList;
