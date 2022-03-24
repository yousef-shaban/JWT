const notFound = (req, res, next)=>{
    res.send(`cannot found the requested url ${req.url}`)
}
export default notFound