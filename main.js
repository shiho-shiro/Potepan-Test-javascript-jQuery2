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
function react(){
	if (display.innerHTML.slice(-1) === "+") { //もし四則演算が一番右の"+"の場合
		display.innerHTML = display.innerHTML.slice(0,-1) + "+"//dispayに表示されるのは、連続して出力される四則演算の最後の四則演算を引いた文字列
	}else if (display.innerHTML.slice(-1) === "-") {
		display.innerHTML = display.innerHTML.slice(0,-1) + "-"
	}else if (display.innerHTML.slice(-1) === "*") {
		display.innerHTML = display.innerHTML.slice(0,-1) + "*"
	}else if (display.innerHTML.slice(-1) === "/") {
		display.innerHTML = display.innerHTML.slice(0,-1) + "/"
	}else{
		 display.innerHTML += act.innerHTML; //上記に当てはまらな場合はdisplay　＝　displayに表示された値 + 四則演算
	}
}














