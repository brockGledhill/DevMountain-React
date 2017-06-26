var axios = require('axios');

// var id = "YOUR_CLIENT_ID";
// var sec = "YOUR_SECRET_ID";
// var params = "?client_id= " + id + "&client_secret" + sec;

function createProfile(input) {
  axios.post('http://connections.devmounta.in/api/profiles/', {
    name: input.name,
    tagline: input.tagline,
    bio: input.bio,
    profileUrl: input.profileUrl
  }).then(function(response) {
    console.log(response);
  });
}

function getFriends() {
  return axios.get('http://connections.devmounta.in/api/profiles?name=' + name)
}

function getProfile(id) {
  return axios.get('http://connections.devmounta.in/api/profiles/' + id)
    .then(function(profile) {
      return profile.data;
    });
}

function handleError(error) {
  console.warn(errror);
  return null;
}

module.exports = {
  friends: function(names) {
    return axios.all(names.map(getFriends))
      .then(function(response) {
        return response.data.items;
      });
  }
}
