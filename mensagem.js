function codifica(){
    //base64
    var baseSelecionada = document.querySelector('#tipoEncriptacao').selectedIndex
   
    if(baseSelecionada==2){
        
        var mensagem = document.getElementById('texto').value
        
        if(document.querySelector("#codificar").checked){

            document.getElementById("resultado").innerHTML=btoa(mensagem);
        }
        else{

            document.getElementById("resultado").innerHTML=atob(mensagem);
        }
        
    }

    else{

        var mensagem = document.getElementById("texto").value
        var resultado = document.getElementById("resultado")
        var chave = parseInt(document.getElementById("numero").value)
        if (document.querySelector("#codificar").checked){
            document.getElementById("resultado").innerHTML = decodifica(mensagem,chave);

        }

        else{
            document.getElementById("resultado").innerHTML = decodifica2(mensagem,chave);
        }

       
    }
}

    function decodifica(string, chave){
         
        var result = []
        var lista = string.split("")
        for (i=0; i<lista.length; i++){
            var codigo = lista [i].charCodeAt()
            var resultado = ((codigo-97+chave)%26)+97

            result.push(String.fromCharCode(resultado))
        }

        return result.join("")

    }

    function decodifica2(string,chave){

        var result = []
        var lista = string.split ("")
        for (i=0; i<lista.length; i++){
            var codigo = lista [i].charCodeAt()

            if ((codigo-97+chave)<0) {
                
                var resultado = ((codigo-97+chave)%26)+97
            }

            else {

                var resultado = ((codigo+97+chave)%26)-97

            }
           
        }

        result.push(String.fromCharCode(resultado))
    }