import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Function to validate email
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to send email
const sendMail = async (subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "sarthakyadav7303@gmail.com",
      pass: "cepijkqyeruwbwvy", // use app password if 2-factor auth is enabled
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Sarthak" <sarthakyadav7303@gmail.com>', // sender address
      to: "teamblintfly@gmail.com", // receiver's email
      subject,
      text,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Error sending email");
  }
};

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const type = req.nextUrl.searchParams.get("type");
    let subject = "",
      text = "";
    if (type == "feedback") {
      const { name, email, comments, rating } = await req.json();
      // Log the received data for debugging
      console.log("Received data:", { name, email, comments, rating });
      // Validate if all required fields are present
      if (!name || name.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Name is required" }),
          { status: 400 }
        );
      }
      if (!email || email.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Email is required" }),
          { status: 400 }
        );
      }
      if (!comments || comments.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Comments are required" }),
          { status: 400 }
        );
      }
      if (!rating) {
        return new NextResponse(
          JSON.stringify({ message: "Rating is required" }),
          { status: 400 }
        );
      }

      // Validation checks
      if (!validateEmail(email)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid email address" }),
          { status: 400 }
        );
      }
      subject = "Feedback";
      text = `Name: ${name}\nEmail: ${email}\nComments: ${comments}\nRating: ${rating}`;
    } else if (type == "email") {
      const { email } = await req.json();
      console.log("received data", { email });
      if (!email || email.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Email is required" }),
          { status: 400 }
        );
      }
      // Validation checks
      if (!validateEmail(email)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid email address" }),
          { status: 400 }
        );
      }
      subject = "Email inquiry";
      text = ` New Inquiry Received from Email: ${email}\n`;
    } else {
      const {
        firstName,
        email,
        phone,
        requirements,
        instagram,
        facebookTwitter,
      } = await req.json();

      // Log the received data for debugging
      console.log("Received data:", {
        firstName,
        email,
        phone,
        requirements,
        instagram,
        facebookTwitter,
      });

      // Validate if all required fields are present
      if (!firstName || firstName.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "First Name is required" }),
          { status: 400 }
        );
      }

      if (!email || email.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Email is required" }),
          { status: 400 }
        );
      }

      if (!phone || phone.trim() === "") {
        return new NextResponse(
          JSON.stringify({ message: "Phone number is required" }),
          { status: 400 }
        );
      }

      // Validation checks
      if (!validateEmail(email)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid email address" }),
          { status: 400 }
        );
      }

      subject = "Contact Form";
      text = `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nRequirements: ${requirements}\nInstagram: ${instagram}\nFacebook/Twitter: ${facebookTwitter}`;
    }
    await sendMail(subject, text);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    // Return an error response if something goes wrong
    console.error("Error in POST handler:", error);
    return new NextResponse(
      JSON.stringify({ message: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
