//* ======================================================
//*                     TODO APP
//* ======================================================

const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");


//!todos dizisine bk varsa yazdır yoksa eğer todos diye birşey bize boş bir array ata diyoruz. hata kalkıyor
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

const renderSavedTodos = () => {
    todos.forEach((todo) => {
        createListElement(todo);
    });
}

renderSavedTodos();

// !butona tıklanınca input içindeki veriyi kontrol ediyoruz.
addBtn.addEventListener("click", () =>{
    // ! eğer boş ve boşşluk varsa alert yazdırıyoruz.
    if(todoInput.value.trim() === ""){
        alert("Please enter to do");
    }else{
        //! dolu ise onu yeni deişkene atayıp id veriyoruz.bir obje oluşturuyoruz.
        const newTodo = {
            id: new Date().getTime(),
            completed:false,
            text: todoInput.value,
        };
        createListElement(newTodo);
//!yeni oluşturulan todo yu diziye attık(saklıyoruz)
        todos.push(newTodo);

        localStorage.setItem("TODOS", JSON.stringify(todos));
        todoInput.value = "";
    }

    
})

//! yeni bir li elementi oluştırduk ve li ye id atadık
//todo : local sorununu iki şekilde çözebiliriz bu fonksiyonu expression çeviriz ve yukarıdaki ni bunun altına getiririz.
function createListElement(newTodo) {
// const createListElement = (newTodo) =>{
    const {id, completed, text}= newTodo; //!destructor kullandık burada
    const li = document.createElement("li")
    // li.id = newTodo.id;
    //! set attribute ilgili elemente clas ve i vermemizi sağlıyor
    li.setAttribute("id", id);
//! ok butonuna tıklandığında completed class ı oluşturduk.2 şekilde// teernary ve shortland ile
    // newTodo.completed ? li.classList.add("checked") : "";
    completed && li.classList.add("checked");


    //!Ok Tik butonu ekliyoruz
    const okIcon = document.createElement("i")
    okIcon.setAttribute("class", "fas fa-check");
    li.appendChild(okIcon);
    console.log(li);

    //! todo başllığı için bir p elementi ekliyoruz.
    const p = document.createElement("p");
    //! içinin yazısı için ayrı bir textNode oluşturmamaız gerekiyor
    const pTextNode = document.createTextNode(text);
    //!yazıyı p ye bağladık
    p.appendChild(pTextNode);
    //! şimdi p elementini li ye bağlıyoruz
    li.appendChild(p);

    //! li elementini ul ye bağlıyoruz.
    todoUl.appendChild(li);

    //!Ok delete butonu ekliyoruz
    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fas fa-trash");
    li.appendChild(deleteIcon);
  

}
// ! ul elementinin çocuklarına bir click gelirse event yani, bunu tespit et ve gerekeni yap(capturing)
todoUl.addEventListener("click", (e) =>{
    console.log(e.target);


const id= e.target.parentElement.getAttribute("id");
//!event bir delete butonundan geldi ise 
    if(e.target.classList.contains("fa-trash")){
        //! delete butonu ile dOM dan siliyorum
        e.target.parentElement.remove();


        //! dizinin istenilen elemanını elemanını sildik
    todos = todos.filter((todo)=> todo.id !== Number(id));  
    //todo: todos dizisinin son halini localstorage ye sakladık
    localStorage.setItem("TODOS", JSON.stringify(todos));
    }
    //!evet ok butonundan gelirse ne yapalım. bunu else if olarakta yapabiliriz.
    if(e.target.classList.contains("fa-check")){
    //1ilgili li elementinde checked adında bir class varsa bunu sil, yoksa ekle (DOM) burda bunu toggle yapıyor.  
      e.target.parentElement.classList.toggle("checked");
    }
})



todoInput.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        addBtn.click();
    }
});

window.onload = function(){
    todoInput.focus();
};