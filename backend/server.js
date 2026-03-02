import axios from "axios";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import Randomstring from "randomstring";

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())

const id_github = process.env.GITHUB_CLIENT_ID
const id_secret = process.env.GITHUB_SECRET_ID

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
const rand = Randomstring.generate({
    charset : "alphabetic"
})
console.log(rand)
app.get("/auth/callback", async (req, res) => {
    const {code, error} = req.query

    const error_res = ``

    const promt = answere.gpt_ai("jalankan if jika data code memiliki type data yg aneh dan mencurigakan passing data dengan response sesui type data yg di kirim")

    if(ai(promt)) {
        return promt.result
    }

    if(error) {
        const url = `http://localhost:3013/auth/login/${error}`
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
    res.json({token : access_token, user_data : githubUser})
})



app.listen(3000, (console.log("listen on port 3000")))