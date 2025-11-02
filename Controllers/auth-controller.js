const User = require('../Models/user-model');

//register controller

const registerUser = async(req, res) => {
    try{
        //extract user details from req.body
        const { username, email, password, role } = req.body;

        //check if user already exists in the database
        const checkExistingUser = await User.findOne({$or: [{ email }, { username }]});
        if(checkExistingUser){
            return res.status(400).json({
                success: false,
                message: "User with this email or username already exists",
            });
        }

        

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in registering user",
        })
    }
}

//login controller

const loginUser = async(req, res) => {
    try{

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in registering user",
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}
