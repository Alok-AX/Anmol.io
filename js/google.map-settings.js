// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(12.963942, 77.6382155);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true
        // mapTypeControlOptions: {
        // mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        // }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: ''

    });

    var contentString = '<div style="max-width: 300px" id="content">' +
        '<div id="bodyContent">' +
        '<h5 class="color-primary"><strong>VIBHA DENTAL CARE CENTRE</strong></h5>' +
        '<p style="font-size: 12px">166, 2nd Cross, Domlur II Stage, Domlur,<br/>' +
        'Bengaluru, Karnataka 560071.<br/>' +
        'Ph: 080 2535 6707' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    infowindow.open(map, marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });



    // var styledMapOptions = {
    // name: 'US Road Atlas'
    // };

    // var usRoadMapType = new google.maps.StyledMapType(styledMapOptions);

    // map.mapTypes.set('roadatlas', usRoadMapType);
    // map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //