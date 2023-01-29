class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
        current = current.next;
            }
        current.next = node;
    }
    this.size++;
    }
    
    printAll(){
        if (this.head == null) {
            return
    }
    else{
        current = this.head;
        while (current != null) {
            console.log(current);
            current = current.next;
            }
        }
    }

    printRandom(){
        if (this.head == null) {
            return
        }
        else{
            current = this.head;
            index = (Math.random() * 100)%this.size; 
            for (let i = 0; i < index; i++){
                current = current.next;
            }
            console.log(current);
        }
    }
}

class pokerCard {
    constructor(text, img) {
        this.text = text;
        this.img = img;
    }
    toString(){
        return `Card: ${this.text}, img: ${this.img}`;
    }
}

let list = new LinkedList();
let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A   ']
let cardSuites = ['hearts', 'diamonds', 'clubs', 'spades']
cardValues.forEach(function(value){
    cardSuites.forEach(function(suite){
        list.add(new pokerCard(value,suit));
    });
});