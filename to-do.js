var ptag=document.getElementById("ptag")
	
		function addFun(){
			if(!document.getElementById("inputt").value==''){
				var d = new Date()
				var input=document.getElementById("inputt").value
				document.getElementById("ptag").innerHTML+=`<div id="addedP"><p id="valuee">${input}</p> <span id="timee"> ${d.getHours()}:${d.getMinutes()} </span></div>`	
				document.getElementById("ptag").classList.add("bgColor")
			}
			document.getElementById("inputt").value=''
		}