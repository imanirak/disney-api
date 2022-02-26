
const searchBtn = document.getElementById('charSearchBtn');
let searchValue = document.getElementById("search");

 
  
  const promise = $.ajax({
    url: `https://api.disneyapi.dev/characters`,
  });
  
  promise.then(
    (disneyData) => {
      const data = disneyData.data;
      
      searchBtn.addEventListener("click", () =>{
        const search = searchValue.value;
      console.log(`button works and grabs value ${search}`)
      
 for(let i=0; i< data.length;i++){
    if(search === data[i].name){
        
       console.log(`${search} and ${data[i].name} are the same`)

    }
const disneyImage = data[i].imageUrl;
   document.getElementById("character").src = disneyImage;
  console.log(data[i])
   $('#name').html(data[i].name);
  $('#details').html(data[i].tvShows);
//    $('#rated').html(data.Rated);
}
    }) 


//  for(let i=0; i< data.length;i++){
//      if(search === data[i].name){
         
//         console.log(`${search} and ${data[i].name} are the same`)

//      }
//  const disneyImage = data[i].imageUrl;
//     document.getElementById("character").src = disneyImage;
//    console.log(data[i])
//     $('#name').html(data[i].name);
//    $('#details').html(data[i].tvShows);
// //    $('#rated').html(data.Rated);
//  } 
    },
    (error) => {
      console.log("bad request: ", error);
    }
   
  );
  


