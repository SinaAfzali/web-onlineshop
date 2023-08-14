

//نمایش یا حذف منوی کشویی ( منوی دسته بندی محصولات)
//#region 

var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
  
menuIcon.addEventListener('click', function() {
 if (menu.style.display === 'none') {
menu.style.display = 'block';
} else {
menu.style.display = 'none';
}
});
//#endregion


//تغییر خودکار یا دستی پوستر
//#region 

var poster = document.getElementById("poster");
var previousBtn = document.getElementById("previous-btn");
var nextBtn = document.getElementById("next-btn");

var posterImages = [
  "./images/poster1.jpg",
  "./images/poster2.jpg",
  "./images/poster3.jpg",
];

var currentIndex = 0;

//تغییر دستی
previousBtn.addEventListener("click", function() {
 changePoster(false);
});

nextBtn.addEventListener("click", function() {
  changePoster(true);
});

function changePoster(plus){
  if(plus == true)currentIndex++;
  else currentIndex--;
  if (currentIndex >= posterImages.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = posterImages.length - 1;
  }
  poster.src = posterImages[currentIndex];
}

//تغییر خودکار
function autoChangePoster() {
  currentIndex++;
  if (currentIndex >= posterImages.length) {
    currentIndex = 0;
  }
  poster.src = posterImages[currentIndex];
}

var start = autoChangePoster();
var interval = setInterval(autoChangePoster, 6000);


//#endregion



function createCodeRand(){
  var codeRand = '';
  for(var r = 0 ; r<6;r++){
  var randomNumber = Math.floor(Math.random() * 3)+1;
  if(randomNumber == 1 )codeRand+=Math.floor(Math.random() * 10);
  else if(randomNumber == 2){codeRand+=String.fromCharCode(Math.floor(Math.random() * 26)+97);}
  else {codeRand+=String.fromCharCode(Math.floor(Math.random() * 27)+64);}
}
return codeRand;
}



function setProducts(){

var productList = document.querySelector('#product-list');
for(var n = 2;n<56;n++){
if(n == 4)n++;
  var A = document.createElement('a');
  var newProduct = document.createElement('div');
var addressImage = './images/'+n+'.jpg';
var str = createCodeRand();
str = 'PRODUCT'+str;

newProduct.style.border = '1px solid #f2f5e8';
newProduct.style.backgroundColor = 'rgba(255, 255, 255, 1)';
newProduct.id = str;
A.href = '#';
A.style.textDecoration = 'none';
if(window.innerWidth > 539){
A.innerHTML = '<img style="margin-left: 15%;margin-right: 15%;margin-top: 15%;" src="'+addressImage+'" alt="'+'image of product'+'" width="70%" height="45%">'+
                        '<h3 style="color:#000000;text-align: right;width: 85%;margin-left: 5%;margin-right: 10%;font-size: 14px;">گوشی سامسونگ a01 core با ظرفیت 16 گیگابایت و دوربین 13 مگاپیکسل</h3>'+
                        '<p style="color:#ff0000;font-size: 13px;float:right;">10%</p>'+
                        '<p style="color:#000000;font-size: 12px;float:right;"><del>2/200/000تومان </del></p>'+
                        '<p style="color:#000000;display:inline-block;font-size: 15px;margin-right:65%;margin-top:-10%;">4.2</p>'+
                        '<img style="float:left;margin-left: 10%;margin-top:1%;" src="./images/star.png" alt="point" width="6%">'+
                        '<span style="font-size:20px;color:#000000;float:left;margin-left:10%;">2/000/000تومان </span>';
}
else{
  var mydiv = document.createElement('div');
  var image = document.createElement('div');
  A.style.display = 'grid';
  A.style.gridTemplateColumns = 'repeat(2,1fr)';
  mydiv.innerHTML =  '<h3 style="color:#000000;text-align: right;width: 85%;margin: 25% 0% 0% 0%;font-size: 15px;">گوشی سامسونگ s20 ظرفیت 64 گیگ با رم 8 گیگ</h3>'+
                        '<p style="color:#ff0000;font-size: 8px;margin-top:10%;float:right;">10%</p>'+
                        '<p style="color:#000000;font-size: 8px;margin-top:10%;float:right;"><del>2/200/000تومان </del></p>'+
                        '<p style="color:#000000;display:inline-block;font-size: 15px;margin-right:65%;margin-top:-8%;">4.2</p>'+
                        '<img style="float:left;margin-left: 15%;margin-top:2%;" src="./images/star.png" alt="point" width="6%">'+
                        '<span style="font-size:17px;color:#000000;float:left;margin-left:15%;">2/000/000تومان </span>';

  image.innerHTML = '<img style="margin-bottom: 10%;margin-top: 10%;" src="'+addressImage+'" alt="'+'image of product'+'" width="100%" height="80%">';
  A.appendChild(image);
  A.appendChild(mydiv);
}

newProduct.appendChild(A);
productList.appendChild(newProduct);
}
}





setProducts();
setProducts();
setProducts();




function focus_btn(id){
  document.getElementById('active-focus1').style.backgroundColor = '#fff';
  document.getElementById('active-focus1').style.color = 'black';
  document.getElementById('active-focus2').style.backgroundColor = '#fff';
  document.getElementById('active-focus2').style.color = 'black';
  document.getElementById('active-focus3').style.backgroundColor = '#fff';
  document.getElementById('active-focus3').style.color = 'black';
  document.getElementById('active-focus4').style.backgroundColor = '#fff';
  document.getElementById('active-focus4').style.color = 'black';
  document.getElementById('active-focus5').style.backgroundColor = '#fff';
  document.getElementById('active-focus5').style.color = 'black';

  document.getElementById(id).style.backgroundColor = 'dodgerblue';
  document.getElementById(id).style.color = 'white';

}


