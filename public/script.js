
const searchBtn = document.getElementById('charSearchBtn');
let searchValue = document.getElementById("search");

  
searchBtn.addEventListener("click", () =>{
    const search = searchValue.value;
 
  const promise = $.ajax({
    url: `https://api.disneyapi.dev/characters/`,
  });
  
  promise.then(
    (disneyData) => {
      const data = disneyData.data;

   //filter through api
 for(let i=0; i< data.length;i++){
  //  console.log(data[i])

console.log(search + data[i].name)
    //find matching name value
if(search == data[i].name.toLowerCase()){
console.log(data[i].name.toLowerCase())
    //view character img
    const disneyImage = data[i].imageUrl;
    document.getElementById("character").src = disneyImage;
   console.log(data[i].name)
    $('#name').html(data[i].name);
   $('#details').html(data[i].tvShows);
    $('#shortFilms').html(data[i].shortFilms);

}
 } 
    },
    (error) => {
      console.log("bad request: ", error);
    }
   
  );

}) 
  







//   const promise = $.ajax({
//     url: `https://api.disneyapi.dev/characters`,
//   });
  
//   promise.then(
//     (disneyData) => {
//       const data = disneyData.data;
   

//  for(let i=0; i< data.length;i++){

//  const disneyImage = data[i].imageUrl;
//     document.getElementById("character").src = disneyImage;
//    console.log(data[i])
//     $('#name').html(data[i].name);
//    $('#details').html(data[i].tvShows);

//  } 
//     },
//     (error) => {
//       console.log("bad request: ", error);
//     }
   
//   );
