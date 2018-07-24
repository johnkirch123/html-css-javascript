document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file 
function getText() {
  fetch('test.txt').then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  }).catch(function(err) {
    console.log(err);
  });
}

// Get local JSON file
function getJson() {
  fetch('posts.json').then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    let output = "";
    data.forEach(post => {
      output += `<li>${post.title}</li>
                 <li>${post.body}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  }).catch(function(err) {
    console.log(err);
  });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users').then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    let output = "";
    data.forEach(user => {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  }).catch(function(err) {
    console.log(err);
  });
}