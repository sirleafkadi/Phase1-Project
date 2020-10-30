$(document).ready(function(){
    
    $(".fields").keyup(preview);
    $("#f_file").change(preview);
    $("#f_content").keyup(preview);
    $("#form_reset").click(reset);
    var once=false;
    var element_id;
    var err_id;
    var count=0;
   
    $("#post_now").click(function(){
        $(".form_parent").toggle();

    });


     $("#myform").submit( function(event){
         
        once=true;
        //////If submited check for validation
            $(".fields").each(function(){
                    if( $(this).val()=="" || $(this).val()==null || $(this).val() =="undefined" ){
                     element_id = $(this).attr("id");
                     var get= err(element_id);
                      count=0;
                    
                    event.preventDefault(); 
                
                    }
                   
                     else {count++;}         


             });

             if(count>=4 ) if(confirm("Do you want to submit this post?")) submit(); else {  alert('Post concelled!'); event.preventDefault();}
              
           //////Enclosure function
        function submit(){

            var get_preview = $("#preview").html();
             $("#contents").prepend(get_preview+'<br><br><br><br>');

           
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
             { if( $(this).text()==""|| $(this).text()=="undefined" || $(this).text()==null) {$(this).text("Empty ");    return;}
               else  { $(this).text(""); count++;  return;  }
             }

      });
        
     }
 
     $(".fields").change(function(){
        if(once){ err( $(this).attr("id")  ); }
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





         /////Add post


     






    });





    
       
     

    

 

  