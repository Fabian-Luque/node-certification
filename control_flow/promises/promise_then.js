fetch("http://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


fetch("http://jsonplaceholder.typicode.com/users/1")
    .then(res1 => res1.json())
    .then(data1 => fetch("http://jsonplaceholder.typicode.com/users/2"))
    .then(res2 => res2.json())
    .then(data2 => console.log(data2))
    .catch(err => console.log(err));