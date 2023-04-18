require('dotenv').config();
const express =require('express');
const router = require('./routes/books-routes');

let port = process.env.PORT || 3000;//if port is not defined then it will run on port 3000

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your



const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req);
    res.send('Hello World');
});
app.use('/api/books',router);

// app.get('/api/books',(req, res)=>{
//     res.json(books);
// }
// );
// //getting a single book by id 
// app.get('/api/books/:books_id',(req, res)=>{
//     // console.log(req.params);
//     const book_id=Number(req.params.books_id);
//     const book= books.find((book)=>
//         book.id==book_id)
//         res.json(book)
// });

// //creating the book
// app.post('/api/books',(req, res)=>{
//     if(!req.body.title || !req.body.author){
//         res.status(400).json({msg:'Please include a title and author'});
//     }
//     const newBook={
//         id:books.length+1,
//         title:req.body.title,
//     }


//     res.json(req.body);
// }

// );
// 

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

//different between post and get request is that get request is used to get a resource and post request is used to create a new resource.
//get request is used to get a resource and post request is used to create a new resource.










//request ara resonse k bich ma j pani aaaucha teslai middleware vanincha.
//middleware is a function that has access to request and response object.
//get helps to get a resource. 
//post helps to create a new resource.
//put helps to update a resource.
//delete helps to delete a resource.
//patch helps to update a resource. d
//different between put and patch is that put is used to update the whole resource and patch is used to update a part of the resource.