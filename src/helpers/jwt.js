import jwt from "jsonwebtoken";

const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject)=>  {
        //Agregamos datos al payload
        const payload = {uid, nombre};

        //Firmamos el token
        jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: "2h"
        },(err, token)=> {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token")
            }
            //Si todo funciona
            resolve(token);
        }) 
    })
}

export default generarJWT;