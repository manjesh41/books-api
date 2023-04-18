const express = require('express');
const router = express.Router();
let books = require('../data/books.js');
router.route('/')
.get((req,res)=>{
    res.json(books);

})
.post((req,res)=>{
    if(!req.body.title || !req.body.author){
        res.status(400).json({msg:'Please include a title and author'});
    }
    const newBook={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author  || 'Unknown'

}
        books.push(newBook);
        res.status(201).json(newBook);
})
.put((req,res)=>{
    res.status((405).json({msg:'Method not allowed'}))
.delete((req,res)=>{
    res.json({})

})
});
router.route('/:books_id')
.get((req,res)=>{

 const book_id=Number(req.params.books_id);
    const book= books.find((book)=>
        book.id==book_id)
        res.json(book)
})
 //creating the book
.post((req, res)=>{
    if(!req.body.title || !req.body.author){
        res.status(400).json({msg:'Please include a title and author'});
    }
    const newBook={
        id:books.length+1,
        title:req.body.title,
    }


    res.json(req.body);
}


)
//updating the book
.put((req, res)=>{
    const updateBook= books.map((book)=>{
        if(book.id==Number(req.params.books_id)){
            book.title=req.body.title;
            book.author=req.body.author;
          
        }
        return book;

    })
    res.json(updateBook);
})


// //deleting the book
.delete((req, res)=>{
    //filter method is used to filter the array. const delete book is used to store the filtered array. if the id of the book is not equal to the id of the book that we want to delete then we will return the book.
    const deleteBook= books.filter((book)=>{
        if(book.id!=Number(req.params.books_id)){
            return book;

        }
    })
    res.json(deleteBook);
    

})



    // const book_id=Number(req.params.books_id);

    // const book= books.find((book)=>
    //     book.id==book_id)
    //     res.json(book)



module.exports = router;

//     }    
