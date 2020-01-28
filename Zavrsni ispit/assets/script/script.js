function initMap() {
	var lokacija = {lat: 51.481700, lng: -0.190964};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14,
		center: lokacija
	});
	var marker = new google.maps.Marker({
		position: lokacija, 
		map: map
	});
}
