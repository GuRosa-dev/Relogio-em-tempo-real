function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    setInterval(carregar, 1000);
 // Ajusta as horas e minutos para sempre exibir dois dígitos
 //padStart verifica se a string tem dois digitos, senão ela completa com o '0'
 var horaFormatada = String(hora).padStart(2, '0');
 var minutosFormatados = String(minutos).padStart(2, '0');
 var segundosFormatados = String(segundos).padStart(2, '0');

 // Ajusta o texto para singular ou plural com o operador ternário
 var horaTexto = hora === 1 ? 'hora' : 'horas';
 var minutosTexto = minutos === 1 ? 'minuto' : 'minutos';
 var segundosTexto = segundos === 1 ? 'segundo' : 'segundos';

 // Exibe a mensagem com a hora e os minutos formatados
 msg.innerHTML = `Agora são ${horaFormatada} ${horaTexto}, ${minutosFormatados} ${minutosTexto} e ${segundosFormatados} ${segundosTexto}!`;

 if (hora >= 0 && hora < 12){
    imagem.src = "manha.png"
    document.body.style.background = '#6a7599'
 } else if (hora >=12 && hora <18){
    imagem.src = "tarde.png"
    document.body.style.background = '#f4a948'
 } else {
    imagem.src = "noite.png"
    document.body.style.background = '#03438c'
 }
}