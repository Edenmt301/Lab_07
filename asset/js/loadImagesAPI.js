// UI Vars 
const postDiv4 = document.querySelector('.carousel-inner');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    //loadDataNew();
});


//async await
async function load_fromPlaceHolder_new_images() {
    const response=await fetch('https://picsum.photos/v2/list')
    const data=await response.json();

    return data
}


function loadDataNew() {    
    load_fromPlaceHolder_new_images().then(function (posts){
        let output = '';
      posts.forEach(function(post) {        
        output +=  `
        <div class="carousel-item">
            <img class="d-block w-100" src="${post.download_url}" alt="Third slide">
          </div>          `;  // same code as previous with few update
    });
    setTimeout(()=>{
      postDiv4.innerHTML += output;
      console.log(postDiv4.innerHTML)
} , 200);
      
      
})
    .catch(function(err) {
        console.log(err);
    });
}