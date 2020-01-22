window.onload = function()
{
    var root = document.forms[0].elements;
    var elementNumber;  


//text boxes

    for(elementNumber=0;elementNumber<root.length;elementNumber++)
    {
     if(root[elementNumber].type=="text")
      {
         root[elementNumber].onfocus = function()
         {
          myFocus(this);
         }        
         root[elementNumber].onkeyup = function()
          {
            text(this);
          }
       }
      



// email validation



       if(root[elementNumber].type=="email")
       {
        root[elementNumber].onfocus = function()
        {
          myFocus(this);
        }
        root[elementNumber].onkeyup = function()
        {
          email(this);
        }
       }  
       
       

//Phone  number validation

       if(root[elementNumber].type=="tel")
       {
        root[elementNumber].onfocus = function()
        {
          myFocus(this);
        }
        root[elementNumber].onkeyup = function()
        {
          phone(this);
        }
       }    





     
       
      else if(root[elementNumber].type=="submit")
        {
           root[elementNumber].onclick = function()
           {
            return validation(root[elementNumber]);
           }
        }
       
      }
}



//onfocus function



function myFocus(a)
{
  
  var err=a.name + "error";
  if(a.value.length == 0 && !document.getElementById(err))
  {
    var errorMsg = document.createElement('span');
    errorMsg.id = err;
    errorMsg.textContent="This is required field"; 
    errorMsg.style.color = "red"  
    a.parentNode.appendChild(errorMsg);
  }
}



//text boxes validation


 
function text(b)
{   
      var type=b.getAttribute("type")
      var show=b.name + "error";
      var minLength=b.getAttribute("min");
      var maxLength=b.getAttribute("max");
      if(minLength==null) minLength=2;
      if(maxLength==null) maxLength=50;
     
      if(type=="text")         
        {
          
           var l=b.value.length;
           if(l==0)
            { 
              document.getElementById(show).innerHTML = "&#10008; minimum 2 chars"; 
             
              return false;
            }
            
           else if(l>=minLength && l<=maxLength)
            {
              document.getElementById(show).innerHTML = "";            
             
              return true;
            }
       }
       
}







        //Email validation
        
        
        
        
        function email(e)
        {
          var type=e.getAttribute("type");
          var show=e.name + "error";
          if(type == "email")  
          {
            var match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var l=e.value.length;
            if(l==0)
            { 
              document.getElementById(show).innerHTML = "Not Empty";  
              document.getElementById(show).style.color="balck";         
              return false;
            }
            if(l>0 && match.test(e.value)==false)
            {
              document.getElementById(show).innerHTML = " Enter a valid email address";   
              document.getElementById(show).style.color="red";         
              return false;
            }
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
          var type=p.getAttribute("type");
          var show=p.name + "error";
          if(type == "tel")  
          {
            var regex =  /[7-9]\d{9}/;
          
            var l=p.value.length;
            if(l==0)
            { 
              document.getElementById(show).innerHTML = "Not Empty";   
              document.getElementById(show).style.color="balck";         
              return false;
            }
            if(l>0 && regex.test(p.value)==false)
            {
              document.getElementById(show).innerHTML = " Enter a valid number";  
              document.getElementById(show).style.color="red";         
              return false;
            }
            if(l>0 && regex.test(p.value)==true)
            {
              document.getElementById(show).innerHTML = "";         
              return true;
            }
          }
        }



     //Form Validation
     
     
     
     function validation(form)
     {
     
      var x = document.forms[0].elements; 
      var rc=0,rb=0;;
      
             for(var i=0;i<x.length;i++)
             {
                   var funRegex = /^[A-Za-z0-9 ]/ ;
                   var match= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                   var regex =  /[7-9]\d{9}/;

                   var type = x[i].type;             
                   var minLength=x[i].getAttribute("min");
                   var maxLength=x[i].getAttribute("max");              
               
                  if(type == "text") 
                   { 
                     if(minLength==null) minLength=2;
                     if(maxLength==null) maxLength=50;
                     if(x[i].value.length < minLength || x[i].value.length > maxLength) 
                       {
                         x[i].focus();
                         return false;
                       }               
                     else if(x[i].value.length>minLength && x[i].value.length<maxLength && funRegex.test(x[i]).value==false)
                       {
                         x[i].focus();
                         return false;
                       }
                     }  
                  
     
     
                 else if(type == "email")
                   {
                     
                     if(x[i].value.length == 0)
                     {
                       x[i].focus();
                       return false;
                     } 
                     
                     if(match.test(x[i].value) != true)           
                     {
                       x[i].focus();
                       return false;
                     }
     
                   }


                   else if(type == "tel")
                   {
                     
                     if(x[i].value.length == 0)
                     {
                       x[i].focus();
                       return false;
                     } 
                     
                     if(regex.test(x[i].value) != true)           
                     {
                       x[i].focus();
                       return false;
                     }
     
                   }

     
                
                 else if(type=="radio")
                 {  
                         var l= x[i].parentNode.children.length;
                         for(var j=0;j<l;j++)
                          {
                             if(x[i].parentNode.children[j].type=="radio"){
                               rb++;
                             } 
                             if(x[i].parentNode.children[j].checked==true){
                               rc++;
                               x[i].style.outline="0px";
                               x[i]
                             } 
                          }
                             
                          if(rb>0 && rc==0)
                          {
                            x[i].focus();
                            x[i].style.outline="1px solid red";
                            return false;
                           }
     
                             else {
                               rb=0;
                               rc=0;
                             }
                          }        
                   
     
     
                   else if(type == "checkbox")
                   {
                     var checkbtn=document.getElementsByName("day");
                     var ch=0;
                     for(var m=0 ;m<checkbtn.length; m++)
                     {
                       if(checkbtn[m].checked)
                       {
                         ch++;
                       }
                     }
                     if(ch == 0)
                     {
                       checkbtn[0].focus();                  
                       return false;
                     }
                   } 
     
     
     
                   else if(type=="select-one"){
                     if( x[i].value == "0" || x[i].value == ""|| x[i].value == "-1" || x[i].value == " " )
                     {
                          x[i].focus();
                          x[i].style.border="0px";
                          x[i].style.outline="1px solid red";
                          return false;
                     } 
                     else if(x[i].value!="0"){
                       x[i].style.outline="0px";
                     }
                     
                     }   
               
             }
             alert("Event registration completed");
         }