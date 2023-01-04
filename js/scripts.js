/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById("demo").onclick = function () { msmeVerify() };

function msmeVerify() {
    // <p id="demo">Click This <a class="text-decoration-none"
    //     href="https://udyamregistration.gov.in/Udyam_Verify.aspx">Link</a> to verify our certificate</p>
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

}

function visibility() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied to clipBoard");
}


// copyText (textToCopy) {
//     this.copied = false
    
//     // Create textarea element
//     const textarea = document.createElement('textarea')
    
//     // Set the value of the text
//     textarea.value = textToCopy
    
//     // Make sure we cant change the text of the textarea
//     textarea.setAttribute('readonly', '');
    
//     // Hide the textarea off the screnn
//     textarea.style.position = 'absolute';
//     textarea.style.left = '-9999px';
    
//     // Add the textarea to the page
//     document.body.appendChild(textarea);
  
//     // Copy the textarea
//     textarea.select()
  
//     try {
//       var successful = document.execCommand('copy');
//       this.copied = true
//     } catch(err) {
//       this.copied = false
//     }
  
//     textarea.remove()
//   }