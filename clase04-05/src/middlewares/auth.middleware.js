export const prueba1 = (req,res,next)=>{
    console.log('Entrando a prueba 1');
    const {isAdmin} = req.body
    if(!isAdmin){
        return res.send('Unauthorized')
    }
    next()
}

export const prueba2 = (req,res,next)=>{
    console.log('Entrando a prueba 2');
    next()
}