const input = document.getElementById("input");
		function angka(number){
			input.value += number;
		}
		function op(operator){
			input.value += operator;
		}
		function hasil(){
			try{
				input.value = eval(input.value);
				if (input.value.includes("Infinity")){
					input.value = "Error!";
				}
			}catch (error) {
				input.value = "Error!";
			}
		}
		function hapusall(){
			input.value = "";
		}
		function hapus(){
			input.value = input.value.slice(0,-1);
		}