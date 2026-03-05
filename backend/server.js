import axios from "axios";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors({
    origin : "http://localhost:3013",
    credentials: true
}))
app.use(cookieParser())

const id_github = process.env.GITHUB_CLIENT_ID
const id_secret = process.env.GITHUB_SECRET_ID
const error_key = process.env.ERROR_KEY
const secret_key = process.env.SECRET_KEY

app.get("/", (req, res) => {
    res.json({status : "run"})
})

app.get("/auth/github", (req, res) => {
  const url =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${id_github}` +
    "&scope=user:email read:user";
    
    res.redirect(url);
})

app.get("/data/user", async (req, res) => {
    try {
        const cookie_res = req.cookies.token_accses
        if(!cookie_res) {
            res.status(401).json({data : "request failed with status code 401"})
        }
        const data_auth = await axios.get("https://api.github.com/user", {
        headers: {Authorization : `Bearer ${cookie_res}`} 
        })
        
        if(!data_auth || data_auth == null) {
            res.status(404).json(
                {   
                    data : "invalid data data is null",
                    status_code : 404
                }
            )
        }
        

        res.json([data_auth.data])
    } catch (error) {
        res.status(400).json({data : error})
    }

})

app.get("/auth/callback", async (req, res) => {
    const {code, error} = req.query
    const error_key_res = error + error_key

    if(error) {
        const url = `http://localhost:3013/auth/login/${error_key_res}`
        return res.redirect(url)
    }

    const tokenres = await axios.post("https://github.com/login/oauth/access_token", {
        client_id: id_github,
        client_secret: id_secret,
        code
    },
        { headers: { Accept: "application/json" } }
    )
    const access_token = tokenres.data.access_token
    const data_auth = await axios.get("https://api.github.com/user", 
        {
            headers: {Authorization : `Bearer ${access_token}`}
        }
    )
    const githubUser = data_auth.data

    if(!githubUser && !access_token) {
        res.status(404).json({data : "accses token data user not found"})
    }

    if(!access_token) {
        const url = `http://localhost:3013/auth/login/${error_key}`
        return res.redirect(url)
    }

    // const payload = {access_token}

    // const token = jwt.sign(payload, secret_key, {expiresIn: "5m"})

    res.cookie("token_accses", access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 1000
    })

    res.redirect(`http://localhost:3013/user/dashboard/${access_token}`)
})

//!belum
app.get("/user/api/:id", (req, res) => {
    const {id} = req.params
    if(id) {
        
    }
})

app.listen(3000, (console.log("listen on port 3000")))