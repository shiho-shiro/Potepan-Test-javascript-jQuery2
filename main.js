let display = document.getElementById("display");
let act = document.getElementsByClassName("act");

function btNs(btN){
    let number = btN.innerHTML;
		if (number == "AC") {
			display.innerHTML = "0"
			//eval()で計算。eval()はセキュリティリスクあり！
		   }else if (number == "=") {
              　display.innerHTML = eval(display.innerHTML)
		    }else{
				 if (display.innerHTML == "0") {
                     display.innerHTML  = number
				}
				//上記同様"00"も先に表示されないようにする
				else if(display.innerHTML == "00"){
					display.innerHTML = number
				}
				//四則演算を先に表示されないようにする
                else if(display.innerHTML == "+"){
                    display.innerHTML =  number;
                }
				else if(display.innerHTML == "-"){
                    display.innerHTML = number;
                }
                else if(display.innerHTML == "*"){
                    display.innerHTML = number;
                }
                else if(display.innerHTML == "/"){
                    display.innerHTML = number;
                }
                else if(display.innerHTML == "."){
                    display.innerHTML = number;
                }

				//その他の数字がディスプレイに反映
				else{display.innerHTML += number;
				}
		    }
}
function react(act){
	let acTion = act;

	if (display.innerHTML.slice(-1) == acTion) {
		let ac = display.innerHTML.slice(0,-1)
		    display.innerHTML = ac + acTion;
	}else{
		 display.innerHTML += acTion.innerHTMLi;
	}
}














