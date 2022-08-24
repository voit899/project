module.exports.sendRes=(res, data, statusCode, isError = false) => {
    if(!isError){   res.status(statusCode).json({
        status: "success",
        statusCode,
        data
    })}
 else{
    res.status(400).json({
        status:'failed',
        sratusCode:400,
        error: err
 })
}
}