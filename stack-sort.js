class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Stack {
    constructor(top = null) {
      this.top = top;
    }
    push(data) {
      const newStack = new Node(data);
      newStack.next = this.top;
      this.top = newStack;
    }
    peek() {
      const val = this.isEmpty();
      return val ? "stack is empty" : this.top;
    }
    isEmpty() {
      return !this.top;
    }
    pop() {
      let current = this.top;
      let next = null;
      if (current) {
        next = current.next;
        this.top = next;
        return current;
      }
    }
    
    sort() {
      //  original thisStack order : 21, 34, 8, 12, 2
      const newStack = new Stack();
      const thisTop = this.pop();
      newStack.push(thisTop.data);
      /* 
      initial Values:
        thisStack : 34, 8, 12, 2  
        newStack : 21, null
     
      */
  
      while (!this.isEmpty()) {
        let thisNextTop = this.pop();
        console.log("thisNextTop:", thisNextTop.data,)
        /* 
          thisNextTop : 34

          thisNextTop : 8
          
          thisNextTop : 21
  
          thisNextTop : 34
  
          thisNextTop : 12
  
          thisNextTop : 21
  
          thisNextTop : 34
  
          thisNextTop : 2 (AT THIS POINT THIS STACK IS EMPTY)
  
          thisNextTop : 8
  
          thisNextTop : 12
  
          thisNextTop : 21
  
          thisNextTop : 34 (THIS STACK IS EMPTY AGAIN)
          
        */
        while (!newStack.isEmpty()) {
          let newStackTop = newStack.peek();
          console.log("newStackTop:",newStackTop, "\n")
          /* 
            newStackTop : 21 (thisNextTop is 34 (line 50))

            newStackTop : 34 (thisNextTop is 8 (line 52))

            newStackTop : 21 (thisNextTop variable is still 8 (line 52) )
  
            newStackTop : 8 (thisNextTop is 21(line 53))
  
            newStackTop : 21 (thisNextTop is 34(line 55))
  
            newStackTop : 34 (thisNextTop is 12(line 57))
  
            newStackTop : 21 (thisNextStop variable is still 12 (line 57) )
            newStackStop : 8 (thisNextStop variable is still 12 (line 57) )
            newStackTop : 12 (thisNextStop is 21 (line 59))
  
            newStackTop : 21 (thisNextStop is 34 (line 61))
  
            newStackTop : 34 (thisNextStop is 2 (line 63))
  
            newStackTop : 21 (thisNextStop variable is still 2 (line 63) )
  
            newStackTop : 12 (thisNextStop variable is still 2 (line 63) )
  
            newStackTop : 8 (thisNextStop variable is still 2 (line 63) )
  
            newStackTop : 2 (thisNextTop : 8 (line 65))
  
            newStackTop : 8 (thisNextTop : 12 (line 67))
  
            newStackTop : 12 (thisNextTop : 21 (line 69))
  
            newStackTop : 21 (thisNextTop : 34 (line 71))
          */
  
          /* 
            34 !< 21 -> break
            8 < 34 -> run if conditional
            8 < 21 -> run if conditional
            21 !< 8 -> break
            34 !< 21 -> break
            12 < 34 -> run if conditional
            12 < 21 -> run if conditional
            12 !< 8 -> break
            21 !< 12 -> break
            34 !< 21 -> break
            2 < 34 -> run if conditional
            2 < 21 -> run if conditional
            2 < 12 -> run if conditional
            2 < 8 -> run if conditional
            8 !< 2 -> break
            12 !< 8 -> break
            21 !< 12 -> break
            34 !< 21 -> break
          */
          if (thisNextTop.data < newStackTop.data) {
            let removeNewStackTop = newStack.pop();
            this.push(removeNewStackTop.data);
            /*
              when 8 < 34: 
                - pop off newStackTop(34) -> newStack : 21
                - push to top of thisStack -> 34, 12, 2
                - stay in nested while loop -> go back up to line 59
  
              when 8 < 21:
                - pop off newStackTop(21) -> newStack : EMPTY
                - push to top of thisStack -> 21, 34, 12, 2
                -BREAK OUT OF NESTED WHILE LOOP B/C NEWSTACK EMPTY : go to line 180
  
              when 12 < 34 :
              - pop off newStackTop(34) -> newStack : 21, 8, null
              - push to top of thisStack -> 34, 2
              -stay in nested while loop -> go back up to line 59
              
              when 12 < 21
              - pop off newStackTop(21) -> newStack : 8, null
              - push to top of thisStack -> 21, 34, 2
              -stay in nested while loop -> go back up to line 59
  
              when 2 < 34
              - pop off newStackTop(34) -> newStack : 21,12,8, null
              - push to top of thisStack -> 34
              -stay in nested while loop -> go back up to line 59
  
              when 2 < 21
              - pop off newStackTop(21) -> newStack : 12,8, null
              - push to top of thisStack -> 21, 34
              -stay in nested while loop -> go back up to line 59
  
              when 2 < 12
              - pop off newStackTop(12) -> newStack : 8, null
              - push to top of thisStack -> 12, 21, 34
              -stay in nested while loop -> go back up to line 59
  
              when 2 < 8
              - pop off newStackTop(8) -> newStack : EMPTY
              - push to top of thisStack -> 8, 12, 21, 34
              -BREAK OUT OF NESTED WHILE LOOP B/C NEWSTACK EMPTY : go to line 160
            */
          } else {
            break;
          }
        }
        
        newStack.push(thisNextTop.data);
        /* 
          thisStack : 8, 12, 2
          newStack: 34, 21, null
  
          thisStack : 21, 34, 12, 2
          newStack : 8, null -> go to line 47
  
          thisStack : 34, 12 , 2
          newStack : 21, 8, null -> go to line 47
  
          thisStack : 12, 2
          newStack : 34, 21, 8, null -> go to line 47
  
          thisStack : 21, 34, 2
          newStack : 12, 8, null -> go to line 47
  
          thisStack : 34, 2
          newStack : 21, 12, 8, null -> go to line 47
  
          thisStack :  2
          newStack : 34, 21, 12, 8, null -> go to line 47
  
          thisStack : 8, 12, 21, 34
          newStack : 2, null -> go to line 47
  
          thisStack : 12, 21, 34
          newStack : 8, 2, null -> go to line 47
  
          thisStack : 21, 34
          newStack : 12, 8, 2, null -> go to line 47
  
          thisStack : 34
          newStack : 21, 12, 8, 2, null -> go to line 47
  
          thisStack : EMPTY (OUTER WHILE LOOP ENDS MOVE TO LINE 220)
          newStack : 34,21, 12, 8, 2, null -> GO TO LINE 220
          
        */
      }
  
      // while loop finishes, thisStack is EMPTY, newStack in Descending order -> pop top off nodes off of newStack and push them back to thisStack until newStack is empty -> then return top of this stack
      /* 
        thisStack : EMPTY (OUTER WHILE LOOP ENDS MOVE TO LINE 226)
        newStack : 34,21, 12, 8, 2, null -> GO TO LINE 226
      */
        while (!newStack.isEmpty()) {
          let newStackTop = newStack.pop();
          this.push(newStackTop.data);
        }
      
      /* 
        thisStack : 2, 8, 12, 21, 34
        newStack : EMPTY
        **WHEEEWWWWW FINALLY RETURN THIS.TOP (LINE 236)
      */
        return this.top;
      }
    
    // print out values in node to see entire list
    print(){
      let current = this.top
      while(current){
        console.log(current.data)
        current = current.next
      }
    }
  };
  
  //  create a stack
  
  const stack = new Stack();
  stack.push(2);
  stack.push(12);
  stack.push(8);
  stack.push(34);
  stack.push(21);
  
  // print stack before
  // stack.print()
  // sort
  stack.sort()
  // see full stack after sort
  stack.print();
  