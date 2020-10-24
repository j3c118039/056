var slider= document.querySelectorAll(".slider");

[].forEach.call(slider,function(things) {
	var slide= things.querySelector(".slide"),
		prev= things.querySelector(".prev"),
		next= things.querySelector(".next"),
		imgs= things.querySelectorAll("img"),
		currentImgIndex=0,
		bubbles= things.querySelector(".bubbles");

	//create bubbles
	for(var i = 0; i < imgs.length; i++){
		var span = document.createElement("span");
		bubbles.appendChild(span);
	}
	var allBubble= things.querySelectorAll(".bubbles span");
	[].forEach.call(allBubble,function(el,i){
		el.addEventListener("click",function(){
			currentImgIndex=i;
			slideImage();
		});
	});

	//slide images
	function slideImage() {
		slide.style.left= (0-100)* currentImgIndex + "%";

		//hilight the bubbles
		[].forEach.call(allBubble,function(el,i) {
			if (currentImgIndex===i) {
				el.classList.add("active");
			}else{
				el.classList.remove("active");
			};
		});
	}

	//next imgs
	next.addEventListener("click",function(){
		currentImgIndex++;
		if(currentImgIndex>=imgs.length){
			currentImgIndex=0;
		}
		slideImage();
	});

	//prev imgs
	prev.addEventListener("click",function() {
		currentImgIndex--;
		if (currentImgIndex<0){
			currentImgIndex= imgs.length-1;
		}
		slideImage();
	});

	//auto load
	setInterval(function(){
		currentImgIndex++;

		if (currentImgIndex>=imgs.length) {
			currentImgIndex=0;
		}

		// slideImage();
	},3000);

	//initial image
	slideImage();

});