
// Question 3 

class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

	// Function to remove the first node
	function removeFirstNode( head) {
		if (head == null)
			return null;

	
		temp = head;
		head = head.next;

		return head;
	}

	function push( head_ref , new_data) {
		new_node = new Node();
		new_node.data = new_data;
		new_node.next = (head_ref);
		(head_ref) = new_node;
		return head_ref;
	}

		head = null;

		head = push(head, 12);
		head = push(head, 29);
		head = push(head, 11);
		head = push(head, 23);
		head = push(head, 8);

		head = removeFirstNode(head);
		for ( temp = head; temp != null; temp = temp.next)
			document.write(temp.data + " ");
