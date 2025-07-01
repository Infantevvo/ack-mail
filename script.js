

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const name = formData.get("Full Name");
  const email = formData.get("Business Email Address");
  //const message = formData.get("message");

  await fetch("/", { method: "POST", body: formData });

  await fetch("/.netlify/functions/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email})
  });

  alert("Thank you! Your message was sent.");
  form.reset();
});
