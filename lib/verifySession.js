import {withIronSession} from "next-iron-session"

export default withIronSession(async(req,res) => {
    res.send("true")
})