

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
  var newProduct = document.createElement('div');
var addressImage = './images/'+n+'.jpg';
var str = createCodeRand();
if(window.innerWidth <= 415){
  newProduct.style.display = 'grid';
  newProduct.style.gridTemplateColumns = 'repeat(2,1fr)';
}
newProduct.classList.add(str);
if(window.innerWidth > 415){
newProduct.innerHTML = '<img style="margin-left: 10%;margin-right: 10%;margin-top: 15%;" src="'+addressImage+'" alt="'+'image of product'+'" width75%" height="50%">'+
                        '<p style="text-align: center;width: 70%;margin-left: 15%;margin-right: 15%;font-size: 1.1vmax;">گوشی سامسونگ s20 ظرفیت 64 گیگ با رم 8 گیگ    </p>';
}
else{
  newProduct.innerHTML = '<img style="margin-bottom: 10%;margin-top: 10%;" src="'+addressImage+'" alt="'+'image of product'+'" width="100%" height="auto">'+
                        '<p style="text-align: right;width: 85%;margin: 30% 0% 0% 15%;font-size: 1.1vmax;">گوشی سامسونگ s20 ظرفیت 64 گیگ با رم 8 گیگ    </p>';
}


productList.appendChild(newProduct);
}
}

setProducts();
setProducts();
setProducts();