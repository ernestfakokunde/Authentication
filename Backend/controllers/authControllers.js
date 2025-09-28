import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//Register user
  export const registerUser = async (req, res)=>{
  try{
    const {username, email , password } = req.body;
    //check for missing fields
    if(!username || !email || !password){
        return res.status(400).json({
          message: "please fill in all fields"
        });
    }

    //check if user exists
    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({
        message: "Email already Exists"
      });
    }

    //hash password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //we then create a new user
    const newUser  = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    //generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "user registered succeefully" ,
      user:{
        id: newUser._id,
        name: newUser.username,
        email: newUser.email,
      },
      token,
    });

  }catch(err){
    console.error(err)
    res.status(500).json({ message: "Server error"})
  }
};

//login user

export const loginUser = async (req, res)=>{
  try {
    const { email, password} = req.body;
    //check if user exists
    const user = await User.findOne({ email });

    if(!user){
      return res.status(400).json({ messaage: "Invalid email"})
    }

    //compare password
    const ismatch = await bcrypt.compare(password, user.password);
    if(!ismatch){
      return res.status(400).json({ mesaage: "Invalid credentials"})
    }

    //generate token
    const token =jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      }
    )

      // return user + token
      res.status(200).json({
        message: "Logged in successfully",
        token,
        user:{
          id: user._id,
          email: user.email,
          username: user.username,
        },
      });

  } catch (error) {
    res.status(500).json({ message: "Server error"})
  }
}