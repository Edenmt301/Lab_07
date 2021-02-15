// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    //loadDataNew();
});


//load post from fake api function 
function load_fromPlaceHolder() {
    //open the request
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(function(res) {  return res.json(); //return the JSON Promise
      })
      .then(function(posts) {
          //iterate over each post [100 posts]
          let output = '';
          posts.forEach(function(post) {
              output +=  `
              <div class="item">
              <div class="image"> <img src="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"  > </div>
              <div class="content">
                  <a class="header" href="#" id="bTitle"> ${post.title} </a>
                  <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                  <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
            </div>
       </div>           `;  // same code as previous with few update
          });
          postDiv3.innerHTML = output;
      })
      .catch(function(err) {     console.log(err);
      }); 

}
//async await
async function load_fromPlaceHolder_new() {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json();

    return data
}

function loadDataNew() {
    let loading='';
    for(let i=0;i<100;i++){
        loading += `<div class="ui segment">
              <div class="ui active inverted dimmer">
                <div class="ui medium text loader">Loading</div>
              </div>
              <br><br><br><br><br>
            </div>`
    }
    postDiv3.innerHTML = loading;
    load_fromPlaceHolder_new().then(function (posts){
            let output = '';
          posts.forEach(function(post) {        
              output +=  `
              <div class="item">
              <div class="image"> <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
              </div>
              <div class="content">
                  <a class="header" href="#" id="bTitle"> ${post.title} </a>
                  <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                  <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
            </div>
       </div>           `;  // same code as previous with few update
          });
          setTimeout(()=>{
            postDiv3.innerHTML = output;
      } , 200);
          
    })
    
      
    .catch(function(err) {
        console.log(err);
    });
}