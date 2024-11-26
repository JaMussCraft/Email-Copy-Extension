// Regular expression to match email addresses
const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function addCopyButtonToEmails() {
  // Find all the email addresses in the page
  const bodyText = document.body.innerHTML;
  const emailMatches = [...bodyText.matchAll(emailRegex)];

  emailMatches.forEach(match => {
    const email = match[0];
    // Create a "copy" button element
    const button = document.createElement("button");
    button.textContent = "Copy";
    button.style.marginLeft = "10px";

    // Add event listener to copy the email to clipboard
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
      });
    });

    // Insert the button next to the email address
    const emailNode = match.input.slice(match.index, match.index + email.length);
    const emailHtml = document.body.innerHTML;
    document.body.innerHTML = emailHtml.replace(email, `${email} ${button.outerHTML}`);
  });
}

// Run the function to add copy buttons when the page loads
window.addEventListener('DOMContentLoaded', addCopyButtonToEmails);
