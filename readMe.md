## Stack Sort Method


### Guide
- An example stack is created, and if you run the file the sort method will run (node stack-sort.js)

- the console.log's in the terminal will show the values of the originalStack's top node value as well as the newly created Stack's top value for the duration of the algorithm

- comments in the code explain what is happening and why as the values for the nodes adjust and move back and forth between the stacks

- a print method was added so before/after the sort method is run you can visualize the order of the node values in the stack

### When Following along with the code, think of the Tower of Hanoi (but with 2 stacks)
- The difference being that instead of having to place the removed node onto the other stack, before moving another, you can "hold it", and compare it's value to the "top" of the other stack and move the nodes in that stack accordingly before placing the "held" node onto the other stack.

<img style="textAlign: center;" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tower_of_Hanoi.jpeg/300px-Tower_of_Hanoi.jpeg" />