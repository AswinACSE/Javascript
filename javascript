Java Script

=>To run javascript
    console.log("hello");
----------
=>To comment
    // ->inline comment
    /*
     ....
     ....
     ...
     */ ->Multiline comment
----------
=>Data types
      *Number
      *string
      *undefined
      *null
      *boolean
      *symbol
      *object
----------
=>To declare variable
     var myname="Aswin"
     
     let ourname="SECE"
     
     const pi=3.14
----------
=>Sorting values with the assignment operator
     var a;
     var b = 2;
     
     a = 7;
     b = a;
     
     console.log(a)  // 7
 ----------
=>javaScript is a case sensitive languages , variable declared mast be case sensitive
      e.g var studyGithub; 
          studyGithub = 10;
 -----------
 => Basic maths 
      var add=10+10;
      
      var sub=10-5;
      
      var mal=10*2;
      
      var quo=10/2;
      
      var rem=10%2;
      
      increment ++;
      
      decrement --;
  -----------
  =>To declare string
       var first = "Hi";
       
       var second = "hello";
  -----------
  =>Escape sequence
       \' -> single quote
       \" -> Double quote
       \\ -> Backslash
       \n -> newline
       \r -> carriage return
       \t -> tab
       \b -> backspace
       \f -> formfeed
   -----------
   => To concate string
       var str1 = "Hello " + "My Name is Aswin";
       
       var str1 = "hello"
       var str2 = "Hi " + str1 + "my name is Aswin";
   -----------
   => Plus equal operator
       + =
       var num1 = 10;
       num1 += 20; 
   -----------
   => PLus equal operator for string
       var str1 = "Hi "
       str1 += "Hello."
   -----------
   => Length of a string
       var len1 = 0;
       var str1 = github;
       len1 = str1.length;
       console.log(len1) // 6
   -----------
   => To get specific character
       var str = "Aswin"
       var num = "";
       
       num = str[1];
       console.log(num) // s
   -----------
   => To get last characting
       var str = "Aswin"
       var num = "";
       
       num = str[str.length - 1];
       console.log(num) // n
   -----------
   => Array
       var myarr = [1,"hello"] // it can contain any type of data types
   -----------
   => Nested array
       var myarr = [["hi",1] , ["hello",2]];
   -----------
   => access array element
       var arr = [10,20,30];
       var myarr = arr[1]; 
   -----------
   => Modify array element
       var arr = [10,20,30];
       var arr[1] = 21;
   -----------
   => To push array elements
       var myarr = [ ["hello","hi"] , "hai" ];
       myarr.push(["h ","aswin"]);
   ----------- 
   => To pop array elements
       var myarr = [ ["hello","hi"] , "hai" ];
       var removearr = myarr.pop(); // this well remove the last element or last item set in list
   -----------
   => To shift array elements
       var myarr = [ ["hello","hi"] , "hai" ];
       var removearr = myarr.shift(); // this well remove the first element or first item set in list
   -----------
    => To unshift array elements
       var myarr = [ ["hello","hi"] , "hai" ];
       var newarr = myarr.unshift("Welcome"); // this well add the item before first element or first item set in list
   -----------
   => Shopping list
       var myarr = [ ["mango",3] , ["banana",6] , ["apple",2] , ["pineapple",7] ];
   -----------
   => To write reusable with funtions 
       function myarr() {
          console.log("hello world ");
          }
       myarr();
   -----------
   => TO pass argument into funtion
       function myarr( a,b ) {
          console.log( a + b );
          }
       myarr( 10,10 );
   -----------
   => Queue - stand in line
       function newarr(arr , item){
           arr.push(item);
           return arr.shift();
           }
        var myarr = [1,2,3,4,5];
        
        console.log("Before : " + JSON.stringify( myarr ); \\ before : [1,2,3,4,5] \\ JOSON.stringify is to make array into string to display on the screen
        console.log(newarr(myarr , 6); \\ 1
        console.log("Before : " + JSON.stringify( myarr ); \\ after : [2,3,4,5,6]
    -----------
    => Boolean values
         funtion myarr(){
             return true;
             return false;
          }
    -----------
    => if statement
         funtion myarr(val){
           if(val){
             return "yes true";
             }
             return "no false";
          }         
          console.log(myarr(true)); // yes true
    -----------
    => Equality operator
         funtion myarr(val){
           if(val == 12){
             return "Equal";
             }
             return "Not equal";
          }         
          console.log(myarr(10)); // Not equal    
    -----------
    => inquality operator
         funtion myarr(val){
           if(val != 10){
             return "Equal";
             }
             return "Not equal";
          }         
          console.log(myarr(10)); // Not equal
     -----------
     => Greater than operator
          funtion myarr(val){
           if(val > 10){
             return "greater";
             }
             return "Not greater";
          }         
          console.log(myarr(17)); // Greater
      -----------
      =>Greater than or equal to
          funtion myarr(val){
           if(val >= 10){
             return "Equal";
             }
             return "Not equal";
          }         
          console.log(myarr(10)); // Equal
      -----------
      => Less than opertor
            funtion myarr(val){
             if(val < 10){
               return "lesser";
               }
               return "greater";
            }         
           console.log(myarr(12)); // greater
      -----------
      => Less than or equal to
          funtion myarr(val){
           if(val <= 10){
             return "Equal";
             }
             return "Not equal";
          }         
          console.log(myarr(10)); // Eqaual
      -----------
      => Logical AND operator
          funtion myarr(val){
           if(val >= 10 && val <= 50){
             return "Yes";
             }
             return "No";
          }         
          console.log(myarr(46)); // Yes   
      -----------
      => Logical OR operator
          funtion myarr(val){
           if(val == 10 || val == 50){
             return "Yes";
             }
             return "No";
          }         
          console.log(myarr(46)); // NO   

      -----------
      => Else statement
          funtion myarr(val){
           if(val >= 10 ){
             return "Yes";
             }
           else{
             return "No";
             }      
          }
          console.log(myarr(46)); // Yes
      -----------
      => Else statement
          funtion myarr(val){
           if(val > 10 ){
             return "Greater than 10";
             }
           else if(val < 10){
             return "Less than 10;
             }
           else{
             return "Not a number";
             }      
          }
          console.log(myarr(5)); // Less than 10  
      ------------
      => Switch case
           funtion myarr(val){
           var answer = "";
           switch(val){
              case 1:
              answer = "alpha";
              break;
              case 2;
              answer = "beta";
              break;
              case 3:
              answer = "gamma";
              break;
              case 4:
              answer = "delta";
              break;
             }
             return answer;
          }
          console.log(caseswitch(2)); // beta

            ------------
      => Switch case - default case
           
           It is like else statement if all the cases fails default case works
           
           funtion myarr(val){
           var answer = "";
           switch(val){
              case 1:
              answer = "alpha";
              break;
              case 2;
              answer = "beta";
              break;
              case 3:
              answer = "gamma";
              break;
              default:
              answer = "delta";
              break;
             }
             return answer;
          }            
          console.log(caseswitch(10)); // delta
      ------------
      => Boolean value from funtion
            funtion isless(a,b){
               return a < b ;
            }
            console.log(isless(10 , 15); // true   
      ------------
      => Object
           var myobj = {
           "name" = "cat",
           "legs" = 4,
           "tail" = 1,
           };
      ------------
      => Accessing object using dot
           var myobj = {
           "name" = "cat",
           "legs" = 4,
           "tail" = 1,
           };
           
           var animal = myobj.name;
           var itslegs = myobj.legs;
      -------------
      => Accessing nested object
           var myobj = {
             "inside":{
                "animal":{
                  "pet name" = "cat",
                  "legs" = 4,
                  "tail" = 1
                  },
                  "outside":{
                     "dog":"barks"
                     }
                  }   
           };
           
           var animal = myobj.inside.animal["pet name"];
           console.log(animal)
      
      
