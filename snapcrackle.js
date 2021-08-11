function snapCrackle(maxValue) {
    let retorno = []
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 === 1 && i % 5 === 0){
            retorno.push("SnapCrackle, ")
        } 
        else if(i % 2 === 1){
            retorno.push("Snap, ")
        }    
        else if(i % 5 === 0){
            retorno.push("Crackle, ")
        }        
        else if(i % 2 === 0){
            retorno.push(i)
        }

        }
    
    return retorno
}
