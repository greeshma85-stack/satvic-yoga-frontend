  const continueBtn = document.getElementById("continueBtn");
  const loginContainer = document.getElementById("loginContainer");
  const otpContainer = document.getElementById("otpContainer");
  const otpMessage = document.getElementById("otpMessage");

  continueBtn.addEventListener("click", () => {
    const phone = document.getElementById("phoneNumber").value.trim();
    const code = document.getElementById("countryCode").value;

    if (phone === "") {
      alert("Please enter your mobile number");
      return;
    }

    // Hide login and show OTP screen
    loginContainer.style.display = "none";
    otpContainer.style.display = "block";

    otpMessage.textContent = `We have sent a code on WhatsApp to ${code}${phone}`;
    continueBtn.textContent("Verify OTP");
  });

  var otpInputs = document.querySelectorAll(".otp-inputs input");

for (var i = 0; i < otpInputs.length; i++) {
  otpInputs[i].addEventListener("input", function() {
    var allFilled = true;

    for (var j = 0; j < otpInputs.length; j++) {
      if (otpInputs[j].value === "") {
        allFilled = false;
        break;
      }
    }

    if (allFilled) {
      continueBtn.textContent = "Verify OTP →";
    } else {
      continueBtn.textContent = "Continue →";
    }
  });
}