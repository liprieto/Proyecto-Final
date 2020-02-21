function eliminar(id){
	
	swal({
		  title: "Estás seguro de eliminar?",
		  text: "Once deleted, you will not be able to recover this imaginary file!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((OK) => {
		  if (OK) {
			  $.ajax({
				  url:"/eliminar/"+id,
				  success function(res){
					  console.log(res);
				  }
			  }).then((ok)=>{
				  if (ok){
					  location.href="/listar";
				  }
			  });
		    swal("Poof! Your imaginary file has been deleted!", {
		      icon: "success",
		    });
		  } else {
		    swal("Your imaginary file is safe!");
		  }
		});
	
}