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

  
    $(".fields").keyup(preview);
    $("#f_file").change(preview);
    $("#f_content").keyup(preview);
    $("#form_reset").click(reset);


    function preview() {
      
            
            
        add_nodes();
        ///Getting info from form 
        var title = $("#ff_title").val();
        var author = $("#f_author").val();
        var content = $("#f_content").val();
        ////////Getting file
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
       var img = reader.result;
        $("#img").attr("src", img);
       
      
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }

        var body = $("#body");
        
     
        /////Add new text nodes to Dom
        $("#title").html(title);
        $("#author").html(author);
        $("#date").html('Today at 5:00pm');
        $("#p_content").html(content);
       

      

            
    }


    function add_nodes(){

            $("#preview").html(`

         <div>
             <h2 id="title" class='p_title'></h2>
            <p id="by">By <strong id="author" class="p_author"></strong>  |  <span id="date">   </span>   </p>
             </div>
            <div><img id="img" class="p_img" src="" alt=""></div>
            <div>
            <p id="p_content" class="p_body">  
            </p>

        </div>  `);


         }








         function reset(){

           
                $("#title").html("");
                $("#author").html("");
                $("#date").html("");
                $("#p_content").html("");
           
                $("#by").html("");

                $("#img").attr("src", "");
                $("#myform").reset();
            
             
         }










    });





    
       
     

    

 

    // function posts(){

    //     var get_author = $("#authoe").val();
    //     var get_title = document.getElementById('title').value;
    //     var get_content = document.getElementById('content').value;
     

    //     var list = document.getElementById("list");

    //     list.innerHTML+=`<p> ${list}  </p> `;
        
  
    //       list.push({author: get_author, title: get_title,  content: get_content, id: get_id });
        
         
     
    //  }

     



   



   












/* <div class="post" >

<div > <img class="post_img img-responsive"  src="img/facebook.png" alt=""></div>

<div class="post_text" >
    <a class="title" style="text-decoration: none;" href="">Mark Zuckerberg and Jack Dorsey to testify before the Senate Judiciary Committee</a>
    <p>By <span class="author">Jay Peters</span> | Today at <span>5:50pm CDT</span>   </p>
</div>

</div> */
