import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/dbConnect";
import User from "@/models/user";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password, address } = reqBody;

    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json({
        message: "User Alreay Exists",
        status: 400,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      address,
    });
    const res = await newUser.save();
    console.log(res);
    return NextResponse.json({
      message: "User Created Succesfully",
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
