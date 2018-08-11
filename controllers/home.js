const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const axios = require('axios')





router.get('/:params', (req, res) => {
  axios.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + req.params)
    .then(res => {
      res.send(res.data);
    }).catch(err => {
      throw err;
    })
});


router.get('/', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route fasdfasd",
    id: req.params.id
  });
});





router.get('/', (req, res) => {
  axios.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=hungry')
    .then(dogres => {
      res.json(dogres.data);
    }).catch(err => {
      throw err;
    })
});



  // res.json({
  //   msg: "Successful GET to '/' route Luis"
  // });

//   fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// });


// var json = {
//     json: JSON.stringify({
//         a: 1,
//         b: 2
//     }),
//     delay: 1
// };

// axio('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=hungry', {
//     method: 'post',
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//     },
//     body: 'json=' + encodeURI(JSON.stringify(json.json)) + '&delay=' + json.delay
// })
//     .then(function (response) {
//     return response.json();
// })
//     .then(function (result) {
//     alert(result)
// })
//     .
// catch (function (error) {
//     console.log('Request failed', error);
// });

// });




router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});



router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});


module.exports = router;
