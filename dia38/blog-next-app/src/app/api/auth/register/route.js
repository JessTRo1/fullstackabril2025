import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();
  const { username, email, password, isAdmin = false } = await req.json();

  if (!username || !email || !password) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "Email or username already exists." }), {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    isAdmin,
  });

  await newUser.save();

  return new Response(JSON.stringify({ message: "User registered successfully." }), {
    status: 201,
  });
}
