export const createError = (s,m)=>{
    const err= new Error()
    err.status=s
    err.message=m
    return err
}