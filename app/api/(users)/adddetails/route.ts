import { connect } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const user = await User.findById(data._id);

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }
   
    user.dob = data.dob ?? user.dob;
    user.collegeDetails = data.collegeDetails ?? user.collegeDetails;
    user.professionalDetails =
      data.professionalDetails ?? user.professionalDetails;
    user.bio = data.bio ?? user.bio;
    user.about = data.about ?? user.about;
    user.interests = data.interests ?? user.interests;
    user.gender = data.gender ?? user.gender;
    user.activities = data.activities ?? user.activities;
    user.socialMedia = data.socialMedia ?? user.socialMedia;
    user.role = data.role ?? user.role;

    await user.save();

    return NextResponse.json(
      {
        message: "User updated successfully",
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "INTERNAL SERVER ERROR",
      },
      { status: 500 }
    );
  }
}
