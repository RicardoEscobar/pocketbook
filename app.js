/* The MIT License (MIT)

Copyright (c) 2016 Ricardo Escobar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Initializing error messages with blank text
    $(".first-name-error").text("");
    $(".last-name-error").text("");
    $(".email-error").text("");
    $(".password-error").text("");

    if(firstName === "") {
      $(".first-name-error").text("Please enter your first name.");
    }

    if(lastName === "") {
      $(".last-name-error").text("Please enter your last name.");
    }

    if(email === "") {
      $(".email-error").text("Please enter your email address.");
    } else if (email === "jorge.ricardo.escobar@gmail.com") {
      $(".email-error").text("This email is already taken.");
    }

    if(password === "") {
      $(".password-error").text("Please enter your password.");
    } else if (password.length < 8) {
      $(".password-error").text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }

    return false;
  });
};

$(document).ready(main);
