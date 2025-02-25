function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} da manhã.`;
        img.src = 'imagens/img_manha.jpg';
        document.body.style.background = '#37648C';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} da tarde.`;
        img.src = 'imagens/img_tarde.jpg';
        document.body.style.background = '#F28705';
    } else {
        msg.innerHTML = `Agora são ${hora} da noite.`;
        img.src = 'imagens/img_noite.jpg';
        document.body.style.background = '#041840'
    }
}

