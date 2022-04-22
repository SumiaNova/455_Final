var typedword = '';
function findMeal (){
    text = document.getElementById('search-meal').value;
    connectMeal(typedword)
}


function connectMeal (typedword) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=typedword`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');
    var id = data.meals[0].strMealId;
    var name = data.meals[0]. strMealName
     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;

    // var newDiv = document.createElement("div");

     container.innerHTML = `<p><b> ${id}</b><p> 
                         <p><b> ${Name}</b><p> 
                        <p><b> ${title} </b></p>
                         <img src="${imgLink}" <br/>
                         <p> Category: ${cat} </p>
                         <button class='btn-style' onclick="details()">Show All</button>
                         `;

   

    container.appendChild(newDiv);

}