$(document).ready(function(){
    
    var img;
    var list=[];
    var get_id=0;
    $(".fields").keyup(preview);
    $("#f_file").change(preview);
    $("#f_content").keyup(preview);
    $("#form_reset").click(reset);
    var once=false;
    var element_id;
    var err_id;
    var passed=false;
    var count=0;
    $("#post_now").click(function(){
        $("form").slideToggle();
    });


     $("#myform").submit( function(event){
        once=true;
        //////If submited check for validation
            $(".fields").each(function(){
                    if( $(this).val()=="" || $(this).val()==null || $(this).val() =="undefined" ){
                     element_id = $(this).attr("id");
                   var get=  err(element_id);
                   
                     event.preventDefault();    
                    }
                   

                    
            });

       
       
            // if(passed){
            //     if(confirm("Do you want to submit this post?")) submit(); else {  alert('Post concelled!'); event.preventDefault();}
            // }
    


        
          





    //////Enclosure function
        function submit(){

            var get_preview = $("#preview").html();
             $("#contents").append(get_preview);

           
            alert('Successfully submit');
            event.preventDefault();
            reset();

        }


    });

////////////Selecting Error div to show error
    function err(element_id){
     
        $(".error").each(function(){
    
               err_id = $(this).attr("id");
                // var cur = $(this);
              
            if( err_id.search(element_id)>=0 ) 
             { if( $(this).text()==""|| $(this).text()=="undefined" || $(this).text()==null) {$(this).text("Error"); return;}
               else  { $(this).text(""); return; }
             }

         
         
        });
        



    }
 
     $(".fields").change(function(){
        if(once){  err( $(this).attr("id")  ); }
     });
 
   















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

         <div data-aos="fade-up" >
             <h2 id="title" class='p_title'></h2>
            <p id="by">By <strong id="author" class="p_author"></strong>  |  <span id="date">   </span>   </p>
             </div>
            <div data-aos="fade-up"><img  id="img" class="p_img" src="" alt=""></div>
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
