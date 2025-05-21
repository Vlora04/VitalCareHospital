import jwt from "jsonwebtoken"

// use authentication middleware
const authUser = async (req, res, next) => {
    try {

        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: 'Nuk jeni të autorizuar, ju lutem kyçuni përsëri!' })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = token_decode.id
        next()




    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

export default authUser