   (function () {
			// product counter scripts 
			const counter = document.getElementById("product__counter");
			if(counter){
			setInterval(() => {
				//set day hours
				const d = new Date();
				const setTimeOfDay = d.getHours();
				//set day hours
				let	date1 = new Date().setHours(08,59,59) 
				let date2 =  new Date().setHours(14,59,59) 
				let date3 = new Date().setHours(32,59,59) 

				const currentDate = d;
				const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
				const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
				const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
						if(setTimeOfDay >= 0 && setTimeOfDay < 9){
							if(timeBetweenDates1 < 0) return
							countTimer(timeBetweenDates1)
						}
						else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
							if(timeBetweenDates2 < 0) return
							countTimer(timeBetweenDates2)
						}
						else{
							if(timeBetweenDates3 < 0) return
							countTimer(timeBetweenDates3)
						}
				}, 1000)
			//add zeros
			function addZero(num) {
					return ("0" + parseInt(num)).substr(-2);
			}
			function countTimer(time){
				const seconds = addZero(time % 60)
				const minutes = addZero(Math.floor(time / 60) % 60)
				const hours = addZero(Math.floor(time / 3600))
					counter.innerHTML = "<div class='inner'>"+hours+"<span class='dots'>:</span></div><div class='inner'>"+minutes+"<span class='dots'>:</span></div><div class='inner'>"+seconds+"</div>";
			}
			}


			//quantity selector
			const qtyPlus = document.querySelector(".qty__plus")
			const qtyMinus = document.querySelector(".qty__minus")
			const qtyBreaksBullets = document.querySelectorAll(".qb__item");
			qtyBreaksBullets.forEach((bullet, index) => bullet.addEventListener("DOMContentLoaded", addClassToItems(bullet, index)));

			qtyPlus.addEventListener("click", ()=> {
					qtyBreaksBullets.forEach((bullet, index) =>{
							var qtyInputValue = document.querySelector(".quantity-selector__input").value;
							if(`bulletNum__${qtyInputValue}` == `bulletNum__${index}`){
								bullet.classList.add("bullet");
							} 
							else {
							bullet.classList.remove("bullet");
							}
					})
				});

			qtyMinus.addEventListener("click", () =>{
					qtyBreaksBullets.forEach((bullet, index) =>{
								var qtyInputValue = document.querySelector(".quantity-selector__input").value -2;
								if(`bulletNum__${qtyInputValue}` == `bulletNum__${index}`){
									bullet.classList.add("bullet");
								} 
								else {
								bullet.classList.remove("bullet");
							}
					})
			})

			function addClassToItems(b, i){
			b.classList.add(`bulletNum__${i}`);
			}

			function selectBullet() {
				removeBullet();

				this.classList.add("bullet");
				if(this.classList.contains("bulletNum__1")){
				document.querySelector(".quantity-selector__input").value = +2;
				} else if( this.classList.contains("bulletNum__2")){
					document.querySelector(".quantity-selector__input").value = +3;
				}else {
				document.querySelector(".quantity-selector__input").value = 1;
				}
			}

			// Remove show class from all content items
			function removeBullet() {
			qtyBreaksBullets.forEach(item => {
					item.classList.remove("bullet");
				});
			}
			// Listen for tab item click
			qtyBreaksBullets.forEach((item, index) => {
				item.addEventListener('click', selectBullet);
			});
})();