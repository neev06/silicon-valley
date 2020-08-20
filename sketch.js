var plantation;
var title;
var garbage;
var homepage;
var info;
var info1;
var backgroundImg;
var input;
var address;
var phone;
var a=0;
var b=0;
var save;
var count =10 ;
var database;
var us,india,england,canada,russia;
var kanpur,mumbai,chennai,delhi,bareilly,aligarh;
var kanpur1,mumbai1,chennai1,delhi1,bareilly1,aligarh1;
var frameImg,frame;
var slider;
var no;
var neem;
var banyan;
var peepal;
var mahogany;

function preload(){

  backgroundImg=loadImage("js/maxresdefault.jpg")
 frameImg=loadImage("a.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);

  database = firebase.database();

 
 plantation=createButton('PLANTATION');
 plantation.position(displayWidth/2 + 100, displayHeight/2);

 garbage=createButton('GARBAGE CLEANING');
 garbage.position(displayWidth/2 - 100, displayHeight/2);

 homepage=createButton('HOME PAGE');
 homepage.position(displayWidth-displayWidth+50 , displayHeight-displayHeight+70);
 homepage.hide();



 input=createInput("Name");
 input.position(displayWidth/2 - 40 , displayHeight/2 - 140);
 input.hide();

 address=createInput("Address");
 address.position(displayWidth/2 - 40 , displayHeight/2 - 110);
 address.hide();

 phone=createInput("Phone No.");
 phone.position(displayWidth/2 - 40 , displayHeight/2 - 80);
 phone.hide();

 

 info=createButton('INFO GARBAGE CLEANING');
 info.position(displayWidth-displayWidth+50 , displayHeight-displayHeight+100);
 
 info1=createButton('INFO PLANTATION');
 info1.position(displayWidth-displayWidth+50 , displayHeight-displayHeight+130);
 
 save=createButton('Save Info');
 save.position(displayWidth/2+100 , displayHeight/2 - 45);
 save.hide()

 save1=createButton('Save Info');
 save1.position(displayWidth/2+100 , displayHeight/2 - 45);
 save1.hide()

 us=createButton('United State Of America');
 us.position(displayWidth/2-100 , displayHeight/2);
 us.hide()

 india=createButton('India');
 india.position(displayWidth/2-100 , displayHeight/2 - 45);
 india.hide()

 canada=createButton('Canada');
 canada.position(displayWidth/2+100 , displayHeight/2 - 45);
 canada.hide()

 england=createButton('United Kingdom');
 england.position(displayWidth/2+100 , displayHeight/2 );
 england.hide()

 delhi=createButton('Delhi');
 delhi.position(displayWidth/2+100 , displayHeight/2 );
 delhi.hide()

 chennai=createButton('Chennai');
 chennai.position(displayWidth/2+100 , displayHeight/2-40 );
 chennai.hide()

 kanpur=createButton('Kanpur');
 kanpur.position(displayWidth/2+100 , displayHeight/2-80 );
 kanpur.hide()

 mumbai=createButton('Mumbai');

 mumbai.position(displayWidth/2-100 , displayHeight/2-80 );
 mumbai.hide()

 aligarh=createButton('Aligarh');
 aligarh.position(displayWidth/2-100 , displayHeight/2-40 );
 aligarh.hide()

 bareilly=createButton('Bareilly');
 bareilly.position(displayWidth/2-100 , displayHeight/2 );
 bareilly.hide()

 delhi1=createButton('Delhi');
 delhi1.position(displayWidth/2+100 , displayHeight/2 );
 delhi1.hide()

 chennai1=createButton('Chennai');
 chennai1.position(displayWidth/2+100 , displayHeight/2-40 );
 chennai1.hide()

 kanpur1=createButton('Kanpur');
 kanpur1.position(displayWidth/2+100 , displayHeight/2-80 );
 kanpur1.hide()

 mumbai1=createButton('Mumbai');

 mumbai1.position(displayWidth/2-100 , displayHeight/2-80 );
 mumbai1.hide()

 aligarh1=createButton('Aligarh');
 aligarh1.position(displayWidth/2-100 , displayHeight/2-40 );
 aligarh1.hide()

 bareilly1=createButton('Bareilly');
 bareilly1.position(displayWidth/2-100 , displayHeight/2 );
 bareilly1.hide()

 slider=createSlider(0,255,255)
 slider.position(displayWidth-displayWidth+50 , displayHeight-displayHeight+40)

 no=createButton('+91 123456789');
 no.position(displayWidth/2-100 , displayHeight/2 );
 no.hide();

 neem=createButton('Neem Tree');
 neem.position(displayWidth/2-200 , displayHeight/2 +100);
neem.show()
}


function draw(){
  background(slider.value());
  
textSize(23)
textFont("forte")
text("Adjust Brightness",displayWidth-displayWidth+30 , displayHeight-displayHeight+30)
text("Save Environment",displayWidth/2 - 80,30);

plantation.mousePressed(()=>{
  alert("False information will cause strict action")
garbage.hide();
homepage.show();
us.hide()
india.hide()
canada.hide()
england.hide()
no.hide();
input.show();
address.show();
phone.show();
save1.show();

   });
   
   garbage.mousePressed(()=>{
    alert("False information will cause strict action")
    save.hide()
    plantation.hide();
    homepage.show();
    input.show();
    address.show();
    phone.show();
    save.show();
    b=1;
    no.hide()
       });
       if(b==1){
textSize(15);
fill("red");
textFont("algerian")
text("*All fields mandatory.",displayWidth/2 - 40 , displayHeight/2 - 160)

       }
       
   homepage.mousePressed(()=>{
a=0;
b=0;
save.hide()
garbage.position(displayWidth/2 - 100, displayHeight/2);
    garbage.show();
    plantation.show();
    homepage.hide();
    info.show();
    info1.show();
    input.hide();
    address.hide();
    phone.hide();
    us.hide()
    india.hide()
    canada.hide()
    england.hide()
    bareilly.hide()
    aligarh.hide()
    delhi.hide()
    chennai.hide()
    kanpur.hide()
    mumbai.hide()
    no.hide()
    save1.hide();
    
       });
       
       if(a==1){
        textSize(30);
        textFont("Algerian");
        fill("black");
        text("* This feature only work in specific city and area.",displayWidth-displayWidth+50,displayHeight/2-200);
        text("* This helps you get your area cleaned just over a phone call.",displayWidth-displayWidth+50,displayHeight/2-150);
        text("* Any fake calls or incorrect location to the team will cause heavy fines.",displayWidth-displayWidth+50,displayHeight/2-100);
        text("* Telling exact location of the area would be a great help.",displayWidth-displayWidth+50,displayHeight/2-50);

                }

    info.mousePressed(()=>{
      save.hide()
    a=1;
    info1.hide();
    garbage.hide();
    plantation.hide();
    homepage.show();
    input.hide();
    address.hide();
    phone.hide();
    b=0;
    save1.hide();
    us.hide()
    india.hide()
    canada.hide()
    england.hide()
    bareilly.hide()
    aligarh.hide()
    delhi.hide()
    chennai.hide()
    kanpur.hide()
    mumbai.hide()
    no.hide()
        });

        info1.mousePressed(()=>{

          save.hide()
          garbage.hide();
          plantation.hide();
          info.hide();
          homepage.show();
          input.hide();
    address.hide();
    phone.hide();
          b=0;
          us.hide()
          india.hide()
          canada.hide()
          england.hide()
          bareilly.hide()
          aligarh.hide()
          delhi.hide()
          chennai.hide()
          kanpur.hide()
          mumbai.hide()
          no.hide()
          save1.hide();
              });
              save.mousePressed(()=>
              {
              
var store=database.ref("/");

store.update({
  name:input.value(),
  address:address.value(),
  phone_no:phone.value(),
 plantation_name:input.value(),
 plantation_address:address.value(),
 plantation_phone_no:phone.value(),
})
us.show(); 
india.show();  
england.show();
canada.show();  
input.hide();
address.hide();
phone.hide();
b=0;
save.hide();
garbage.hide();  
bareilly.hide()  
aligarh.hide() 
delhi.hide()
chennai.hide()
kanpur.hide()
mumbai.hide()
    })
            
              save1.mousePressed(()=>
              {
              
var store=database.ref("/");

store.update({
 
 plantation_name:input.value(),
 plantation_address:address.value(),
 plantation_phone_no:phone.value(),
})
 
india.show();  

input.hide();
address.hide();
phone.hide();
b=0;
save.hide();
garbage.hide();  
bareilly.hide()  
aligarh.hide() 
delhi.hide()
chennai.hide()
kanpur.hide()
mumbai.hide()
plantation.hide();
save1.hide();
    })
    india.mousePressed(()=>
    {  
      india.position(displayWidth/2 , displayHeight/2 - 45);
      us.hide();
      canada.hide()
      england.hide();
      delhi.show();
      kanpur.show();
      chennai.show();
      mumbai.show();
      bareilly.show();
      aligarh.show();
      
     })
     bareilly1.mousePressed(()=>
     {
      neem.show();  
      no.show(); 
     no.position(displayWidth/2-100 , displayHeight/2-30)  
      aligarh1.hide() 
      delhi1.hide()
      chennai1.hide()
      kanpur1.hide()
      mumbai1.hide();
      india1.hide();
      })
      aligarh1.mousePressed(()=>
     {  
      no.show(); 
      bareilly1.hide()  
      //aligarh.hide() 
      delhi1.hide()
      chennai1.hide()
      kanpur1.hide()
      mumbai1.hide();
      india.hide();
      })
      delhi1.mousePressed(()=>
     {  
      
      no.show(); 
      bareilly1.hide()  
      aligarh1.hide() 
     // delhi.hide()
      chennai1.hide()
      kanpur1.hide()
      mumbai1.hide();
      neem.show();
      india.hide();
      })
 
      chennai1.mousePressed(()=>
     {  
      no.show(); 
      bareilly1.hide()  
      aligarh1.hide() 
      delhi1.hide()
     // chennai.hide()
      kanpur1.hide()
      mumbai1.hide();
      india.hide();
      })
      
 
      mumbai1.mousePressed(()=>
     {  
      no.show(); 
      bareilly1.hide()  
      aligarh1.hide() 
      delhi1.hide()
      chennai1.hide()
      kanpur1.hide()
     // neem.show();
      india.hide();
      })
 

 kanpur.mousePressed(()=>
    {  
     no.show(); 
     bareilly.hide()  
     aligarh.hide() 
     delhi.hide()
     chennai.hide()
     //kanpur.hide()
     mumbai.hide();
     india.hide();
     })

     bareilly.mousePressed(()=>
    {  

     no.show(); 
     no.position(displayWidth/2-100 , displayHeight/2-30)  
     aligarh.hide() 
     delhi.hide()
     chennai.hide()
     kanpur.hide()
     mumbai.hide();
     india.hide();
     })
     aligarh.mousePressed(()=>
    {  
     no.show(); 
     bareilly.hide()  
     //aligarh.hide() 
     delhi.hide()
     chennai.hide()
     kanpur.hide()
     mumbai.hide();
     india.hide();
     })
     delhi.mousePressed(()=>
    {  
     no.show(); 
     bareilly.hide()  
     aligarh.hide() 
    // delhi.hide()
     chennai.hide()
     kanpur.hide()
     mumbai.hide();
     india.hide();
     })

     chennai.mousePressed(()=>
    {  
     no.show(); 
     bareilly.hide()  
     aligarh.hide() 
     delhi.hide()
    // chennai.hide()
     kanpur.hide()
     mumbai.hide();
     india.hide();
     })

     mumbai.mousePressed(()=>
    {  
     no.show(); 
     bareilly.hide()  
     aligarh.hide() 
     delhi.hide()
     chennai.hide()
     kanpur.hide()
     //mumbai.hide();
     india.hide();
     })

     kanpur1.mousePressed(()=>
    {  
     no.show(); 
     bareilly1.hide()  
     aligarh1.hide() 
     delhi1.hide()
     chennai1.hide()
     //kanpur.hide()
     mumbai1.hide();
     india.hide();
     })

    
  drawSprites()
  }
  