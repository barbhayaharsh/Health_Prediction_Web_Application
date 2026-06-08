import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("❌ " + data.error);
      return;
    }

    alert("✅ Email Verified Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Verify Email</h2>
        <p className="mb-4 text-blue-600 text-sm">
          OTP sent to <span className="font-semibold text-blue-800">{email}</span>
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-2 mb-4 text-black placeholder-gray-400"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
