window.onload = () => {
	$('#sendbutton').click(() => {
		imagebox = $('#imagebox')
		$.ajax({
			url: "http://127.0.0.1:5000/maskImage",
			type:"GET",
			success: function(data){
				bytestring = data['status']
				image = bytestring.split('\'')[1]
				console.log("Here!")
				imagebox.attr('src' , 'data:image/jpeg;base64,'+image)
				}
			});
			url=document.getElementById("qr-content").value
			var qrcode = new QRCode("qrcode",url);
	});
};