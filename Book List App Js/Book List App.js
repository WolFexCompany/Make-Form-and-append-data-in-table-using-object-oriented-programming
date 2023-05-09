// VARIABLES WHICH USE IN BOOK LIST APP  START HERE

const Book_items = []
const input_field = document.querySelectorAll('input')
let BookTitle;
let BookAuthor;
let BookIsnbno;
let ID;
let Value;
const tbody = document.querySelector('tbody')
const form = document.querySelector('form')
// VARIABLES WHICH USE IN BOOK LIST APP  CODE HERE 

// WINDOW ON LOAD FUNCTION CODE START HERE

window.addEventListener('load',()=>
{
const Get_Item=localStorage.getItem('Book_items')
if(Get_Item==null)
{
}
else
{
 let data=JSON.parse(Get_Item)
 Book_items.push(...data)


 Book_items.forEach(Book_Data=>
  {
    const tr = document.createElement('tr')
    tbody.appendChild(tr);

    for (const key in Book_Data)
     {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = Book_Data[key]
  }

  let td = document.createElement('td');
  tr.appendChild(td);
  const button = document.createElement('button');
  button.setAttribute('class', 'btn btn-primary');
  button.textContent = 'Delete'
  td.appendChild(button)
  button.addEventListener('click', () => {
    const call_Delete_class = new Delete;
    call_Delete_class.delete_table_row(tr, Book_Data)
  })
}
  )
  

}
})

// WINDOW ON LOAD FUNCTION CODE CLOSE HERE


// ON INPUT FUNCTION CODE START HERE

input_field.forEach(Input_Element => {
  Input_Element.addEventListener('input', (e) => {
    ID = e.target.id;
    Value = e.target.value;
    if (ID === 'Book_Title') {
      BookTitle = Value;
    }
    else if (ID === 'Book_Author') {
      BookAuthor = Value;
    }
    else {
      BookIsnbno = Value;
    }
  })
})

// ON INPUT FUNCTION CODE CLOSE HERE


// FORM SUBMIT FUNCTION CODE START HERE


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const Bookitemsdata = new Book(BookTitle, BookAuthor, BookIsnbno);
  Book_items.push(Bookitemsdata);
  localStorage.setItem('Book_items', JSON.stringify(Book_items))
  form.reset();
  const Book_Data = new Ui()
  Book_Data.setdataui(Bookitemsdata)
})

// SUBMIT FUNCTION CODE CLOSE HERE


// CLASS CONSTURTOR BOOK CODE HAS BEEN START HERE

class Book {
  constructor(title, author, isnbno) {
    this.Book_title = title;
    this.Book_author = author
    this.Book_isnbno = isnbno
  }
}

// CLASS CONSTURTOR CODE BOOK HAS BEEN CLOSE HERE


// UI CLASS CODE START HERE

class Ui {
  setdataui(BookObjectData) {
    const tr = document.createElement('tr')
    tbody.appendChild(tr);
    for (const key in BookObjectData) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = BookObjectData[key]


    }
    let td = document.createElement('td');
    tr.appendChild(td);
    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary');
    button.textContent = 'Delete'
    td.appendChild(button)
    button.addEventListener('click', () => {
      const call_Delete_class = new Delete;
      call_Delete_class.delete_table_row(tr, BookObjectData)
    })

  }
}

// UI CLASS CODE CLOSE HERE


// DELETE CLASS CODE START HERE

class Delete {
  delete_table_row(table_row, Table_data_Object) {
    table_row.remove();
    for (let index = 0; index < Book_items.length; index++) {
      if (Book_items[index] == Table_data_Object) {
        Book_items.splice(index, 1);
      }
    }
    localStorage.setItem('Book_items', JSON.stringify(Book_items))
  }
}

// DELETE CLASS CODE CLOSE HERE