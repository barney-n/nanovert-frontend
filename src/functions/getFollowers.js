const fetch = require("node-fetch");

async function getFollowers(username) {
  let response = await fetch(
    `https://www.instagram.com/${username}/?__a=1`
  ).then(function(response) {
    data = response.json();
    return data;
  });
  return await response;
}

async function main() {
  let f = await getFollowers("nanovertuk")
    .then(function(response) {
      return response["graphql"]["user"]["edge_followed_by"]["count"];
    })
    .then(function(data) {
      console.log(data);
      return data;
    });
}

main();
