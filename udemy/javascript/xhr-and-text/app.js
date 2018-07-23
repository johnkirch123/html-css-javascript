document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  // Onload
  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function() {
    console.log("Request Error...");
  }

  xhr.send();
}