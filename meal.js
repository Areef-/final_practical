

function api () {
    var searchText = document.getElementById("search_food").value;
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
  
     document.getElementById("search_food").value = " "; 
     document.getElementById("result").textContent = " ";
  
  }
  
  function display (data){    
    var searchNum = parseInt(document.getElementById("search_num").value);
    var oldContent = document.getElementById("result")
   for (var a=0; a<searchNum; a++){
     //console.log(data.meals[a]);
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `

      <div class="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <img src="${data.meals[a].strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.meals[a].strMeal}</h5>
          <p class="card-text"><h4>cooking instructions:</h4> ${data.meals[a].strInstructions}</p>
          <a href="#" class="btn btn-success">Buy Now!</a>
        </div>
      </div>` ;
  
      oldContent.appendChild(newDiv);
   }
   
    document.getElementById("search_num").value = " "; 
  
  }
  