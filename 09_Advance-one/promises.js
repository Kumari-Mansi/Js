// PROMISE 1
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Async task 1 is completed');
      resolve();
    }, 1000);
  });
  
  promiseOne.then(function () {
    console.log('Promise 1 consumed');
  });
  
  // PROMISE 2
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Async task 2');
      resolve();
    }, 1000);
  }).then(function () {
    console.log('Promise 2 resolved');
  });
  
  // PROMISE 3
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: 'Raj', email: 'raj202@example.com' });
    }, 1000);
  });
  
  promiseThree.then(function (user) {
    console.log('Promise 3 resolved:', user);
  });
  
  // PROMISE 4 (with error flag)
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({ username: 'Rahul', password: '12345' });
      } else {
        reject('ERROR: Something went wrong');
      }
    }, 1000);
  });
  
  promiseFour
    .then((user) => {
      console.log('Promise 4 resolved:', user);
      return user.username;
    })
    .then((username) => {
      console.log('Username from promise 4:', username);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log('Promise 4: either resolved or rejected'));
  
  // PROMISE 5 (using async/await)
  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({ username: 'JavaScript', password: '12345' });
      } else {
        reject('ERROR: JavaScript went wrong');
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promiseFive;
      console.log('Promise 5 resolved:', response);
    } catch (error) {
      console.log(error);
    }
  }
  consumePromiseFive();
  
  // FETCH API USING async/await
  async function getAllUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json(); // ← don't forget await here!
      console.log('Fetched Users:', data);
    } catch (error) {
      console.log('Fetch Error:', error);
    }
  }
  getAllUsers();
  
  // FETCH API USING .then()
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      console.log('Post Data:', data);
    })
    .catch((error) => console.log('Error:', error));
  