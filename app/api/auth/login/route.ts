import connect from "@/utils/dbConnect";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email: email });
    console.log(reqBody);
    if (!user) {
      return NextResponse.json(
        {
          message: "User Doesn't Exists",
        },
        { status: 404 }
      );
    }

    const isMatched = await bcrypt.compare(password, user.password!);
    if (!isMatched) {
      return NextResponse.json(
        {
          message: "User Doesn't Exists",
        },
        { status: 404 }
      );
    }

    // Creaating token for user
    const tokenData = { id: user._id };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!);

    const response = NextResponse.json(
      {
        message: "Sign in successfully",
        user,
      },
      { status: 200 }
    );
    response.cookies.set("token", token);
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Sever Doesn't Respond" },
      { status: 500 }
    );
  }
}
