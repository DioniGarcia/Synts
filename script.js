const synth = new Tone.Synth().toDestination();
const teclas = document.getElementsByClassName("tecla")

for ( var i = 0; i < teclas.length; i ++ ){
    
    let nota = teclas[i].id
    teclas[i].addEventListener('click', () =>{
       
        synth.triggerAttackRelease(nota, "16n");
    })
    
}

// Suena un RE para saber que funciona!
synth.triggerAttackRelease("d4", "16n");
    
    
