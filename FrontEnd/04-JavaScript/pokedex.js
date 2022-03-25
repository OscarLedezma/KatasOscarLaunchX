const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif",null,null,null,null,null)
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeId = data.id;
            let pokeImg = data.sprites.front_default;
            let pokeNOmbre = data.name;
            let pokeTipo = data.types[0].type.name
            let pokeStatistics = [data.stats];
            let pokeMoves = [data.moves]
            pokeImage(pokeImg,pokeId,pokeNOmbre,pokeTipo,pokeStatistics,pokeMoves);
            
        }
    });
}

const pokeImage = (url,id,nombre,tipo,estadisticas,movimientos) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokeNOmbre = document.getElementById("pokeNombre");
    const pokeTipo = document.getElementById("pokeTipo");
    const pokeEstadisticas = document.getElementById("pokeEstadisticas")
    const pokeMovimientos = document.getElementById("pokeMovimientos");
    
    pokePhoto.src = url;
    pokeNOmbre.innerHTML = '#'+ id +'-'+ nombre.toUpperCase();
    pokeTipo.innerHTML = tipo.toUpperCase();

    /*
    console.log(estadisticas[0][0]);
    console.log(estadisticas[0].length);
    console.log(estadisticas[0][0].stat.name);
    console.log(estadisticas[0][0].base_stat);
    console.log(estadisticas[0][0].effort);
*/
    console.log('--------------Estadisticass------------------');
    let cadenaEstadisticas = '';
    for(i= 0;   i < estadisticas[0].length; i++){
        cadenaEstadisticas += estadisticas[0][i].stat.name + ':' + estadisticas[0][i].base_stat + ' ';
    }
    pokeEstadisticas.innerHTML = cadenaEstadisticas;
    console.log('--------------Movimientos------------------');
  
    let cadenaMovimientos = '';
    let movs = movimientos[0].length;

    if( movs > 10){
        movs = 17;
    }

    for(i= 0;   i < movs; i++){
        cadenaMovimientos += movimientos[0][i].move.name + ', '
    }
    pokeMovimientos.innerHTML = cadenaMovimientos;
    
}
 