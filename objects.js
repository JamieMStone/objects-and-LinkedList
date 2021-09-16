console.log("Running - Objects.js");

class Person {
    constructor(name, parents){
        this.name = name;
        this.parents = parents;
    }

    printParents(){
        console.log(this.parents[0] + "\n" + this.parents[1]);
    }

}

let Jean = new Person("Jean", ['N/A', 'N/A']);

let Brian = new Person("Brian", ['N/A', 'N/A']);

let Joyce = new Person("Joyce", ["N/A", "N/A"]);

let Karl = new Person("Karl", ["N/A", "N/A"]);

let Jane = new Person("Jane", ["Jean", "Brian"]);

let Jason = new Person("Jason", ["Joyce", "Karl"]);

let Jamie = new Person("Jamie", ["Jane", "Jason"]);


console.log(Jamie.name);
Jamie.printParents();
