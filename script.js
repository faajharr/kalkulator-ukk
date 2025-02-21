const input = document.getElementById("input");

		//untuk memasukkan angka kedalam input
		function angka(number){
			input.value += number;
		}

		//untuk memasukkan operator kedalam input 
		function op(operator){
			input.value += operator;
		}

		//untuk menentukan hasil dari input
		function hasil(){
			try{
				input.value = eval(input.value);
			}catch (Error){
				input.value = "Error!";
			}
		}

		//untuk menghapus semua yang ada di dalam input
		function hapusall(){
			input.value = "";
		}

		//untuk menghapus isi input satu persatu
		function hapus(){
			input.value = input.value.slice(0,-1);
		}