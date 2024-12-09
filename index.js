const express=require('express');
const app=express();
const port=3000;

// parse JSON using express
app.use(express.json());
app.use(express.urlencoded({extended:false}))

let movies=[
    {
    id:"1",
    title:"amaran",
    director:"rajkumar",
    release_date:"2024-10-31"
    },
    {
    id:"2",
    title:"baby john",
    director:"atlee",
    release_date:"2024-12-25"
    }
]

// get movie list in json format
app.get('/movies',(req,res)=>{
    res.json(movies);
})


//add movie to the list
app.post('/movies',(req,res)=>{
    const movie=req.body;

    console.log(movie);
    movies.push(movie);
    res.send("MOVIE ADDED SUCCESSFULLY");
    res.json(movies);
});


//search for a movie in the list
app.get('/movies/:id',(req,res)=>{
   const id=req.params.id;
   for (let movie of movies){
    if(movie.id===id){
        res.json(movie)
        console.log(movie)
        return
    }
   }
   res.send("MOVIE NOT FOUND")
})


//delete a movie
app.delete('/movies/:id',(req,res)=>{
    const id=req.params.id;
    movies=movies.filter((movie)=>{
        if(movie.id!=id){
            return true
        }
        return false
    });
    res.send("MOVIE DELETED");
})



//get server to listen the port
app.listen(port,()=>{
    console.log(`SERVER RUNNING ON PORT - ${port}`);
});