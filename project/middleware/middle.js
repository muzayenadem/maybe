function num(req,res,next){
    const key = '12345'
    if( req.query.api_key && (req.query.api_key) ==key){
     next()
    }else{
        res.json({
            Eror : ' invalid information'
        })
    }
}
module.exports = num