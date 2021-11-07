let display = document.getElementById("display");


function btNs(btN){
    let number = btN.innerHTML;

		if (number == "AC") {
			display.innerHTML = "0";
		   }else if (number == "=") {
              　display.innerHTML = eval(display.innerHTML);//eval()で計算。eval()はセキュリティリスクあり！
		    }else{
				 if (display.innerHTML == "0") {
                     display.innerHTML  = number;
				}else if(display.innerHTML == "00"){//上記同様"00"も先に表示されないようにする
					display.innerHTML = number;
				}else{
					display.innerHTML += number; //その他の数字がディスプレイに反映
				}
		    }
}

$(function(){
	let bt = $("button");
        bt.click(function(){
	    $(bt).removeClass("button-color");//無職状態にして
	    $(this).addClass("button-color");//枠の青色を入れる
    });
});//ボタンが押される度にイベント発火


function acts(act){
  if (display.innerHTML.slice(-1) === "+"){
       return;
   }else if (display.innerHTML.slice(-1) === "-") {
       return;
   }else if (display.innerHTML.slice(-1) === "*") {
	   return;
   }else if (display.innerHTML.slice(-1) === "/") {
	   return;
   }else{
	   display.innerHTML += act.innerHTML;
    }
}














