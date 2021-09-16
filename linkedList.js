console.log("Running - linkedLists.js");

let arrray = [1, 4, 19, 3, 8, 16, 4];

function arrayToList(arr){
    if(arr.length === 0) {
        return null;
    }


    const head = {data: arr[0], next: null};
    let prevNode = head;
    for (let i = 1; i < arr.length; i++) {
        prevNode.next = {
            data:arr[i],
            next: null,
        };
        prevNode = prevNode.next;
    }
    return head;
}

function printList(listHead) {
    let node = listHead;
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}

let head = arrayToList(array);

printList(head);


