// fires when the document's window is ready for presentation
window.onload = function()
{

  //storing the elements of the form in the inputs variable
    var inputs = document.forms[0].elements;

    //Here to  store the indexes of the elements in the form
    var elementNumber;  




//Looping the elements to validate the form using the type attribute
    for(elementNumber=0;elementNumber<inputs.length;elementNumber++)
    {

//text boxes
      //Here  it will take the type of the text
     if(inputs[elementNumber].type=="text")
      {
         //function expression using onfocus
        inputs[elementNumber].onfocus = function()  
         {
           //points to the particular object.
          alerts(this); 
         }     
         
         //after key up the answer will be validated by moving to the function text(this)
         inputs[elementNumber].onkeyup = function() 
          {
            //points to the text type in the form.
            text(this); 
          }
       }
      



// email validation


      //Here  it will take the type of the email

       if(inputs[elementNumber].type=="email")
       {
         //function expression using onfocus
         inputs[elementNumber].onfocus = function() 
        {
          //points to the particular object.

          alerts(this);
        }

        //after key up the answer will be validated by moving to the function email(this)
        inputs[elementNumber].onkeyup = function()
        {
          //points to the email type in the form
          email(this);  
      
        }
       }  
       
       

//Phone  number validation
      //Here it will take the type of the tel
       if(inputs[elementNumber].type=="tel")
       {
        
         //function expression using onfocus
         inputs[elementNumber].onfocus = function()
        {

          //points to the particular object.

          alerts(this);
        }

        //after key up the answer will be validated by moving to the function email(this)

        inputs[elementNumber].onkeyup = function()
        {

          //points to the tel type in the form
          phone(this);
        }
       }    





  //Here it will validate the button "submit"  


     
       
      else if(inputs[elementNumber].type=="submit")
        {

          //function expression for clicking on the button 
           inputs[elementNumber].onclick = function()  
           {

            //move to the validation function with inputs[elementNumber]
            return validation(inputs[elementNumber]);
           }
        }
       
      }
}



//onfocus function

//Error message displaying after every field in form

function alerts(a)
{
  
  var error=a.name + "error"; //id

  //validation condition for every field in the form to display the error message
  if(a.value.length == 0 && !document.getElementById(error))
  {
    //Here creating the span tag to place the error message
    var errorMsg = document.createElement('span');

    //setting the id to the span tag
    errorMsg.id = error;

    //For the span tag we are adding the message
    errorMsg.textContent="This is required field";
    
    //Here adding the color to the text
    errorMsg.style.color = "red"  

    //Appending the error message to the a.parentnode
    a.parentNode.appendChild(errorMsg);
  }
}



//text boxes validation
 
function text(t)
{   

  //This are the attributes which are present in the type text and retrieving the values
      var type=t.getAttribute("type")

      //Here creating the id for the text field
      var textid=t.name + "error";

      //Here we are retrieving the min and max value to set the range for the answer which is given by the user
      var minLength=t.getAttribute("min");
      var maxLength=t.getAttribute("max");

      //Setting the values to the min and max to validate
      if(minLength==null) minLength=2;
      if(maxLength==null) maxLength=50;
     

      //Taking the type text 
      if(type=="text")         
        {
           
          //Here taking the user answer  length for text field  and validating it.
           var len=t.value.length;

           //if length 0 then they need to provide the following message
           if(len==0)
            { 
              document.getElementById(textid).innerHTML = "Minimum 2 chars"; 
             
              return false;
            }
            //If the following condition is satisfied then it wont display any message
           else if(len>=minLength && len<=maxLength)
            {
              document.getElementById(textid).innerHTML = "";            
             
              return true;
            }
       }
       
}





       //email validation
       
       function email(e)
       {

        //Here taking the type form the email field
         var type=e.getAttribute("type");

         //id
         var show=e.name + "error";

         //email type satisfied
         if(type == "email")  
         {

          //This is the regular expression for the email
           var match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

           //Taking the length of the user email  for validating
           var l=e.value.length;

           //if the following condition satisfied then it is going to display the particular message
           if(l==0)
           { 
             document.getElementById(show).innerHTML = " Not Empty";   
             return false;
           }

           //Here the value of the user is testing with the regular expression
           if(l>0 && match.test(e.value)==false)
           {
             document.getElementById(show).innerHTML = " Enter a valid email address";  
             document.getElementById(show).style.color="red";         
        
             return false;
           }

          //Here the value of the user is testing with the regular expression

           if(l>0 && match.test(e.value)==true)
           {
             document.getElementById(show).innerHTML = "";
             return true;
           }
         }
       }




        //Phone validation

        function phone(p)
        {

          //Taking the type of the phone for storing in the variable
          var type=p.getAttribute("type");

          //id
          var phoneid=p.name + "error";

          //taking the type tel for validating
          if(type == "tel")  
          {

            //here it is a regular expression
            var regex =  /[7-9]\d{9}/;
          
            //taking the lenth of the value and storing in the variable to validate it
            var len=p.value.length;

            //if condition is satisfied the following message will be displayed
            if(len==0)
            { 
              document.getElementById(phoneid).innerHTML = "Not Empty";   
              document.getElementById(phoneid).style.color="balck";         
              return false;
            }

            //Here we are testing with the regular expression over the user answer
            if(len>0 && regex.test(p.value)==false)
            {
              document.getElementById(phoneid).innerHTML = " Enter a valid number";  
              document.getElementById(phoneid).style.color="red";         
              return false;
            }

            //Here we are testing with the regular expression over the user answer

            if(len>0 && regex.test(p.value)==true)
            {
              document.getElementById(phoneid).innerHTML = "";         
              return true;
            }
          }
        }



     //Form Validation  (false conditions)
     function validation(form)
     {
     

      //Taking the elements of the first form 
      var x = document.forms[0].elements; 

      //Here initialising the rc and rb values with 0
      var rc=0,rb=0;;
      
             for(var i=0;i<x.length;i++)
             {
                  //regular expressions for the text field
                   var funRegex = /^[A-Za-z0-9 ]/ ;


                  //regular expressions for the text field
                   var match= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                   //regular expression for the phone number
                   var regex =  /[7-9]\d{9}/;
                   

                   //storing the types in the type variable
                   var type = x[i].type;         
                   
                   //taking the attributes for the types and storing them in the variable
                   var minLength=x[i].getAttribute("min");
                   var maxLength=x[i].getAttribute("max");              
               

                  //setting range values to the text field and 
                  if(type == "text") 
                   { 

                    //if the condition is satisfied then the minlength value is set to 2
                     if(minLength==null)
                     { 
                     minLength=2;
                     }

                    //if the condition is satisfied then the maxlength value is set to 50

                     if(maxLength==null)
                     {
                      maxLength=50;
                     }
                    
                     if(x[i].value.length < minLength || x[i].value.length > maxLength) 
                       {
                         x[i].focus(); //focus to the x[i] 
                         return false;
                       } 

                     else if(x[i].value.length>minLength && x[i].value.length<maxLength && funRegex.test(x[i]).value==false)
                       {
                         x[i].focus();
                         return false;
                       }
                     }  
                  
     
                //false conditions for the email field
                 else if(type == "email")
                   {
                     //if the condition is true then it will focus on the x[i]

                     if(x[i].value.length == 0)
                     {
                       x[i].focus();
                       return false;
                     } 

                    //Here it is checking with the regular expression and if it true then  it focus on the "x[i]"
                  
                    if(match.test(x[i].value) != true)           
                     {
                       x[i].focus();
                       return false;
                     }
     
                   }

                  //false conditions for the phone field

                   else if(type == "tel")
                   {
                     
                    //if the condition is true then it will focus on the x[i]
                     if(x[i].value.length == 0)
                     {
                       x[i].focus();
                       return false;
                     } 
                     //Here it is checking with the regular expression and if it true then  it focus on the "x[i]"
                     if(regex.test(x[i].value) != true)           
                     {
                       x[i].focus();
                       return false;
                     }
     
                   }

     
                //validation for the radio buttons in the form
                 else if(type=="radio")
                 {  

                        //storing the length in the variable
                         var l= x[i].parentNode.children.length;

                         //loop through the radio buttons
                         for(var j=0;j<l;j++)
                          {
                            //if the condition is true then the "rb" value is incremented
                             if(x[i].parentNode.children[j].type=="radio"){

                              //increment operator
                               rb++;
                             } 

                             //if the radio button is checked then the "rc" incremented
                             if(x[i].parentNode.children[j].checked==true){

                              //increment operator
                               rc++;

                               //applying the style
                               x[i].style.outline="0px";
                               x[i]
                             } 
                          }
                             
                          
                          if(rb>0 && rc==0)
                          {
                            x[i].focus();
                            return false;
                           }
     
                             else {
                               rb=0;
                               rc=0;
                             }
                          }        
                   
                  //validation for the checkboxes
     
                   else if(type == "checkbox")
                   {

                    //taking the value of the name for the checkbox 
                     var checkbtn=document.getElementsByName("day");
                     var ch=0;

                     //looping through the checkbox type
                     for(var m=0 ;m<checkbtn.length; m++)
                     {
                       //if checked the "ch" incremented
                       if(checkbtn[m].checked)
                       {
                         ch++;
                       }
                     }

                     //if the ch==0 then it will focus.(false condition)
                     if(ch == 0)
                     {
                       checkbtn[0].focus();                  
                       return false;
                     }
                   } 
     
     
                  //This is for the dropdowns validation

                  else if(type=="select-one"){

                    //conditions to validate the dropdowns by using the values
                     if( x[i].value == "0" || x[i].value == ""|| x[i].value == "-1" || x[i].value == " " )
                     {
                          x[i].focus();
                          //adding the styles
                          x[i].style.border="0px";
                          return false;
                     } 
                     else if(x[i].value!="0"){
                       //adding the styles
                       x[i].style.outline="0px";
                     }
                     
                     }   
               
             }

             //after successfully filled then the message will be displayed
             alert("Event registration completed");
         }
