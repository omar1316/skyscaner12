//#region drop
var next = document.getElementById("next2");
var prev = document.getElementById("preves");
var card1 = document.getElementById("card_1");
var card2 = document.getElementById("card_2");

// Initial State
card2.style.display = 'none';
card1.style.transform = 'translateX(0)';

// Handle the next button click
next.onclick = function() {
    // Immediately hide card1 by sliding it to the left
    card1.style.transition = 'transform 0.5s ease-in-out';
    card1.style.transform = 'translateX(-100%)';

    setTimeout(function() {
        card1.style.display = 'none';
        card2.style.display = 'block';
        card2.style.transform = 'translateX(0%)'; // Position card2 off-screen to the right

        // Trigger the slide-in transition immediately
        setTimeout(function() {
            card2.style.transition = 'transform 0.5s ease-in-out';
            card2.style.transform = 'translateX(0)'; // Slide card2 into view
        }, 0); // No delay to trigger the transition immediately
    }, 0); // No delay to hide card1 and show card2 immediately
}

// Handle the previous button click
prev.onclick = function() {
    // Immediately hide card2 by sliding it to the right
    card2.style.transition = 'transform 0.5s ease-in-out';
    card2.style.transform = 'translateX(100%)';

    setTimeout(function() {
        card2.style.display = 'none';
        card1.style.display = 'block';
        card1.style.transform = 'translateX(-100%)'; // Position card1 off-screen to the left

        // Trigger the slide-in transition immediately
        setTimeout(function() {
            card1.style.transition = 'transform 0.5s ease-in-out';
            card1.style.transform = 'translateX(0)'; // Slide card1 into view
        }, 0); // No delay to trigger the transition immediately
    }, 0); // No delay to hide card2 and show card1 immediately
}
//#region puls and mins button
const plus1=document.getElementById(" bt_+");
const mins1=document.getElementById(" bt_-");
const count=document.getElementById("count");
let counter=0;
const plus=()=>{
    counter++;
    count.textContent=counter;
}
const mins=()=>{
    counter--;
    count.textContent=counter;
}
const plus2=document.getElementById(" bt_+1");
const mins2=document.getElementById(" bt_-1");
const count1=document.getElementById("count1");
let counter1=0;
const plus_1=()=>{
    counter1++;
    count1.textContent=counter1;
}
const mins_1=()=>{
    counter1--;
    count1.textContent=counter1;
}
const plus3=document.getElementById(" bt_+2");
const mins3=document.getElementById(" bt_-2");
const count2=document.getElementById("count2");
let counter2=0;
const plus_2=()=>{
    counter2++;
    count2.textContent=counter2;
}
const mins_2=()=>{
    counter2--;
    count2.textContent=counter2;
}
//#endregion

const drop_down_bt=document.getElementById("drop_down");
const drop_down_list=document.getElementById("arrow_adult");
const drop_down_closs=document.getElementById("closs");
drop_down_bt.onclick = function() {
    // Toggle the display of the dropdown window
    if (drop_down_list.style.display === "block") {
      drop_down_list.style.display = "none";
    } else {
      // Position the dropdown below the button
      drop_down_list.style.display = "block";
      var rect = button.getBoundingClientRect();
      drop_down_list.style.top = rect.bottom + "px";
      drop_down_list.style.left = rect.left + "px";
    }
  }
  
  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (event.target != drop_down_bt && !drop_down_list.contains(event.target)) {
      drop_down_list.style.display = "none";
    }
  }
  
//#endregion
//#region next
//#region drop
//#region next
//#region drop
var next1 = document.getElementById("next1");
var prev1 = document.getElementById("preves1");
var card11 = document.getElementById("car1");
var card22 = document.getElementById("car2");

// Initial State
card22.style.display = 'none';
card11.style.transform = 'translateX(0)';

// Handle the next button click
next1.onclick = function() {
    // Immediately hide card1 by sliding it to the left
    card11.style.transition = 'transform 0.5s ease-in-out';
    card11.style.transform = 'translateX(-100%)';

    setTimeout(function() {
        card11.style.display = 'none';
        card22.style.display = 'block';
        card22.style.transform = 'translateX(0%)'; // Position card2 off-screen to the right

        // Trigger the slide-in transition immediately
        setTimeout(function() {
            card222.style.transition = 'transform 0.5s ease-in-out';
            card2.style.transform = 'translateX(0)'; // Slide card2 into view
        }, 0); // No delay to trigger the transition immediately
    }, 0); // No delay to hide card1 and show card2 immediately
}

// Handle the previous button click
prev1.onclick = function() {
    // Immediately hide card2 by sliding it to the right
    card22.style.transition = 'transform 0.5s ease-in-out';
    card22.style.transform = 'translateX(100%)';

    setTimeout(function() {
        card22.style.display = 'none';
        card11.style.display = 'block';
        card11.style.transform = 'translateX(-100%)'; // Position card1 off-screen to the left

        // Trigger the slide-in transition immediately
        setTimeout(function() {
            card11.style.transition = 'transform 0.5s ease-in-out';
            card11.style.transform = 'translateX(0)'; // Slide card1 into view
        }, 0); // No delay to trigger the transition immediately
    }, 0); // No delay to hide card2 and show card1 immediately
}
//#endregion
//#region dropup

function tex(){
    var bt1_un =document.getElementById("t-b-1");
    var tex_1 =document.getElementById("t-1");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites<br>, including Booking.com, Agoda and<br> Trip.com to name a few. From there, we compare prices and show you the best options.</p></div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}
function tex1(){
    var bt1_un =document.getElementById("t-b-2");
    var tex_1 =document.getElementById("t-2");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites<br>, including Booking.com, Agoda and<br> Trip.com to name a few. From there, we compare prices and show you the best options.</p></div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}
function tex2(){
    var bt1_un =document.getElementById("t-b-3");
    var tex_1 =document.getElementById("t-3");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites<br>.</p></div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}
function tex3(){
    var bt1_un =document.getElementById("t-b-4");
    var tex_1 =document.getElementById("t-4");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>We always show the best-value price we can find from<br> the hotel suppliers we offer, and give you the most up-to-date price overview.</p></div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}
function tex4(){
    var bt1_un =document.getElementById("t-b-5");
    var tex_1 =document.getElementById("t-5");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>We make planning a breeze with simple search filters,<br> handy hotel reviews and accurate pricing. <br> can also keep everything in one place by comparing <a >flight</a> and <a>car</a> hire prices with us..</p><div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}
function tex5(){
    var bt1_un =document.getElementById("t-b-6");
    var tex_1 =document.getElementById("t-6");
    if(tex_1.textContent==""||tex_1.classList.contains('hidden')){
        tex_1.innerHTML="<div style='font-size: small;'><p>There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites<br>, including Booking.com, Agoda and<br> Trip.com to name a few. From there, we compare prices and show you the best options.</p></div>";
        bt1_un.innerHTML="<i class='bx bxs-chevron-up' style='color:rgba(16,16,16,0.95)' ></i>";
        tex_1.classList.remove('hidden');
    }
    else{
        tex_1.textContent="";
        tex_1.classList.add('hidden');
        bt1_un.innerHTML="<i class='bx bx-chevron-down' style='color:rgba(16,16,16,0.95)' ></i>";
    }

}


//#endregion
//#region 
const bt0=document.getElementById("talk-bt");
const bt1=document.getElementById("talk-bt1");
const bt2=document.getElementById("talk-bt2");
const col1=document.getElementById("col1");
const col2=document.getElementById("col2");
const col3=document.getElementById("col3");
bt1.onclick=function(){
    bt0.style.background='white';
    bt0.style.color='black';
    bt2.style.background='white';
    bt2.style.color='black';
    bt1.style.background='black';
    bt1.style.color='white';
    col2.style.display='block';
    col1.style.display='none';
    col3.style.display='none';
  bt0.onclick=function(){
    bt0.style.background='black';
    bt0.style.color='white';
    bt1.style.background='white';
    bt1.style.color='black';
    bt2.style.background='white';
    bt2.style.color='black';
    col2.style.display='none';
    col3.style.display='none';
    col1.style.display='block';
  }
  bt2.onclick=function(){
    bt1.style.background='white';
    bt1.style.color='black';
    bt0.style.background='white';
    bt0.style.color='black';
    bt2.style.background='black';
    bt2.style.color='white';
    col2.style.display='none';
    col1.style.display='none';
    col3.style.display='block';
  };
}
//#endregion
