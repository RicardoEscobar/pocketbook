# Pocketbook
## Description
Pocketbook wants to add error message to their sign up page if any of the form fields are filled out incorrectly. [Here's what it looks like]("https://s3.amazonaws.com/codecademy-content/projects/2/pocketbook/index.html"). Leave all form fields blank and click the Create account button.

## Tasks

### 1. Look at index.html:

In the `<form>`, there are four `<input>` elements for the first name, last name, email, and password fields.

If a user leaves the `#first-name` input blank, the text of the `<p class="first-name-error">` updates with an error message.

Similarly if the password is too short or the email matches an existing account, the `<p class="email-error">` and `<p class="password-error">` elements update with an error message.

Look at app.js:

In the main function, a submit event handler is attached to form. When a user clicks the Create account button and submits the form, the code inside the submit event handler will run.

Currently inside the event handler, the text entered into the `#first-name` input is retrieved using `.val()` and saved into the variable `firstName`. If `firstName` is blank, we want to update the text of the `<p class="first-name-error">` with an error message.

### 2. In app.js

If `firstName` is blank, set the text of `<p class="first-name-error">` to the error message `"Please enter your first name."`

### 3. Using the existing code as a model
Get the text entered into the `#last-name` input and save it into the variable `lastName`. If `lastName` is blank, set the text of `<p class="last-name-error">` to the error message `"Please enter your last name."`

### 4. Get the text entered
Into the `#email` input and save it into the variable `email`. If `email` is blank, set the text of `<p class="email-error">` to the error message `"Please enter your email address."`

### 5. Get the text entered
Into the `#password` input and save it into the variable `password`. If `password` is blank, set the text of `<p class="password-error">` to the error message `"Please enter a password."`

### 6. If the length
Of the `password` entered is less than eight characters, set the error message text of the `.password-error` element to `"Short passwords are easy to guess. Try one with at least 8 characters."`

### 7. If the email
Entered matches your own email address, set the error message text of the `.email-error` element to `"This email is already taken."`
