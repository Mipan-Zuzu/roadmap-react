import axios from "axios"
import express from "express"
import cors from "cors"
import fs from "fs"
import { json } from "stream/consumers"
import { parse } from "path"
import { stringify } from "querystring"

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.get("/data", (req, res) => {
    fs.readFile("./db.json", 'utf8', (err, jsonString)=> {
        try{
            if(!jsonString){
                res.json({data : "invalid Data"})
                console.warn("invalid data")
            }
            const parse = JSON.parse(jsonString)
            res.status(200).json(parse)
        }catch{
            res.status(404).json({data: "not found"})
            console.error("data not found")
        }
    })
})


app.post("/data", (req, res) => {
    const data = req.body
    const {id, barang} = data
    fs.readFile("./db.json", "utf-8", (err, jsonString) => {
        const parses = JSON.parse(jsonString)
        
        if(parses.find(item => item.id === id)){
            res.json({data : "data id duplikat"})
            return
        }

        if(parses.find(item => item.barang === barang)){
            res.json({data : "data barang duplikat"})
            return
        }
        const together = [...parses, data]
        const change = JSON.stringify(together)
        fs.writeFile("./db.json", change, "utf-8", (err) => {
            if(err) {
                res.status(401).json(err)
            }
            res.json(data)
        })
    })
})

app.put("/data/:id", (req, res) => {
    fs.readFile("./db.json", 'utf8', (err, jsonString) => {
        const parses = JSON.parse(jsonString)
        const data = req.body
        const {id} = req.params
        const findId = parses.find(item => item.id === id) //findData
        Object.assign(findId, req.body) //Update
        res.json(findId)
    })
})


app.listen(port, () => console.log("server listen on port " + port))