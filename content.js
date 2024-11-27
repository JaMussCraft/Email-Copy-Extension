// Regular expression to match email addresses ending in @uky.edu
const emailRegex = /\b[a-zA-Z0-9._%+-]+@uky\.edu\b/g;

const button = null;

function addCopyButtonToEmails() {
  // Find all the email addresses in the page
  const bodyText = document.body.innerHTML;
  const emailMatches = [...bodyText.matchAll(emailRegex)];

  const dirDiv = document.getElementById('DirectoryInfoSection')

  const email = emailMatches[0][0];
  console.log('found email: ', email)

  // Create a "copy" button element
  const button = document.createElement("button");
  button.textContent = "Copy " + email;
  button.style.marginLeft = "10px";

  // // Add event listener to copy the email to clipboard
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(email)
    button.style.backgroundColor = 'lightgreen'
  });

  dirDiv.append(button)
}

window.addEventListener('load', addCopyButtonToEmails);
