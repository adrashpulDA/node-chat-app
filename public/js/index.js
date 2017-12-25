var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('newMessage', function (data) {
    console.log(data);

    var li = jQuery('<li></li>');

    li.text(`${data.from}: ${data.text}`);

    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
    var li = jQuery('<li></li>');
    var a = jQuery(`<a target=_blank">My current location</a>`);

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function (err) {

    });
});

var locationButton = jQuery("#send-location");
locationButton.on('click', function (e) {
    if (!navigator.geolocation) {
        return console.log('no access to geoloacation API');
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function (err) {
        alert('unable to fetch location');
    });
});