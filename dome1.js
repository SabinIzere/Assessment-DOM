// Exercise 1: Change Text Content 
  const text = document.getElementById("myText"); 
const btn = document.getElementById("changeBtn"); 
btn.addEventListener("click", () => { 
text.textContent = text.textContent === "Hello" ? "Goodbye" : "Hello"; 
}); 
// Exercise 2: Modify CSS Styles Dynamically 
const styleBox = document.getElementById("styleBox"); 
styleBox.addEventListener("click", () => { 
styleBox.style.backgroundColor = 
styleBox.style.backgroundColor === "lightgray" ? "lightgreen" : "lightgray"; 
styleBox.style.fontSize = "20px"; 
}); 
// Exercise 3: Add and Remove Classes 
const highlightText = document.getElementById("highlightText"); 
document.getElementById("highlightBtn").addEventListener("click", () => { 
highlightText.classList.toggle("highlight"); 
}); 
// Exercise 4: Create and Append Elements 
const list = document.getElementById("myList"); 
let count = 1; 
document.getElementById("addItemBtn").addEventListener("click", () => { 
const li = document.createElement("li"); 
li.textContent = "New Item " + count++; 
const del = document.createElement("button"); 
del.textContent = "Remove"; 
del.addEventListener("click", () => li.remove()); 
li.appendChild(del); 
list.appendChild(li); 
}); 
 
    // Exercise 5: Remove Elements 
    const delButtons = document.querySelectorAll(".delBtn"); 
    delButtons.forEach(btn => 
      btn.addEventListener("click", (e) => { 
        if (confirm("Are you sure to delete this item?")) { 
          e.target.parentElement.remove(); 
        } 
      }) 
    ); 
 
    // Exercise 6: Handling Events 
    const eventMsg = document.getElementById("eventMsg"); 
    eventMsg.addEventListener("mouseover", () => { 
      eventMsg.textContent = "Mouse Over!"; 
    }); 
    document.addEventListener("keydown", (e) => { 
      eventMsg.textContent = `You pressed: ${e.key}`; 
    }); 
 
    // Exercise 7: DOM Traversal 
    const child = document.getElementById("child"); 
    const traverseBtn = document.getElementById("traverseBtn"); 
    traverseBtn.addEventListener("click", () => { 
      const parent = child.parentElement; 
      parent.style.backgroundColor = "lightblue"; 
    }); 
 
    // Exercise 8: Form Handling 
    const form = document.getElementById("userForm"); 
    const result = document.getElementById("formResult"); 
    form.addEventListener("submit", (e) => { 
      e.preventDefault(); 
      const name = document.getElementById("name").value; 
      const age = document.getElementById("age").value; 
      if (name && age) { 
        result.textContent = `Hello ${name}, you are ${age} years old.`; 
      } else { 
        result.textContent = "Please fill in all fields."; 
      } 
    }); 
 
    // Exercise 9: Fetch and Display Data 
    const fetchBtn = document.getElementById("fetchBtn"); 
    const dataList = document.getElementById("dataList"); 
    fetchBtn.addEventListener("click", () => { 
      fetch("https://jsonplaceholder.typicode.com/users") 
        .then((res) => res.json()) 
        .then((data) => { 
          dataList.innerHTML = ""; 
          data.slice(0, 5).forEach(user => { 
            const li = document.createElement("li"); 
            li.textContent = `${user.name} (${user.email})`; 
            dataList.appendChild(li); 
          }); 
        }); 
    }); 
 
    // Exercise 10: Simple Animations 
    const animationBox = document.getElementById("animationBox"); 
    document.getElementById("animateBtn").addEventListener("click", () => { 
      animationBox.style.transform = "translateX(200px) rotate(360deg)"; 
      setTimeout(() => { 
        animationBox.style.transform = "translateX(0)"; 
      }, 1500); 
    }); 