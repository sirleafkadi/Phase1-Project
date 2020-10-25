$(document).ready(function(){

    var img;
    var list=[];
    var get_id=0;

    $("#sub").click( function get_post(event){

        var get_author = $("#author").val();
        var  get_title = $("#titl").val();
        // var get_img = img();
        var  get_content = $("#content").val();
        // list.push({author: get_author, title: get_title,  content: get_content, img: get_img, id: get_id });
    //    $("#test").attr("src", get_img);

        console.log( get_title+'\n'+get_author+'\n'+get_content);
        event.preventDefault();
      }
);

  

    function img() {
       var img;
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        var img= document.getElementById("test");
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
         img.src= reader.result;
       
      
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
            
       
     }

    

 

    // function posts(){

    //     var get_author = $("#authoe").val();
    //     var get_title = document.getElementById('title').value;
    //     var get_content = document.getElementById('content').value;
     

    //     var list = document.getElementById("list");

    //     list.innerHTML+=`<p> ${list}  </p> `;
        
  
    //       list.push({author: get_author, title: get_title,  content: get_content, id: get_id });
        
         
     
    //  }

     

});


   



   












/* <div class="post" >

<div > <img class="post_img img-responsive"  src="img/facebook.png" alt=""></div>

<div class="post_text" >
    <a class="title" style="text-decoration: none;" href="">Mark Zuckerberg and Jack Dorsey to testify before the Senate Judiciary Committee</a>
    <p>By <span class="author">Jay Peters</span> | Today at <span>5:50pm CDT</span>   </p>
</div>

</div> */
