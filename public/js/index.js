var socket = io();

        socket.on('connect', function () {
            console.log('Connected to server');

        });

        socket.on('disconnect', function (){
            console.log('Disconnected from the server');
        });

        socket.on('newMessage', function (message) {
            var formattedTime = moment(message.createdAt).format('h:mm a');
            var template = jQuery('#message-template').html();
            var html = Mustache.render(template, {
                text: message.text,
                from: message.from,
                createdAt: formattedTime
            });

            jQuery('#messages').append(html);
            
            // var li = jQuery('<li></li>');
            // li.text(`${message.from} ${formattedTime}: ${message.text}`);

            // jQuery('#messages').append(li);
        });

    

        jQuery('#message-form').on('submit', function(e){
            e.preventDefault();

            var messageTextbox = jQuery('[name=message]');

            socket.emit('createMessage', {
                from: 'User',
                text: messageTextbox.val()
            }, function () {
               messageTextbox.val('')
            });
        });