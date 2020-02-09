const fetch = require("node-fetch");

async function getFollowersAsync(username) {
    
        let response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
        let data = await response.json();
        return data;
};

function getFollowers(username) {
        getFollowersAsync(username).then(data => {
                followers = data['graphql']['user']['edge_followed_by']['count'];
                return followers;
        })
}

const allUsers = UserModel.find({})

for (user in allUsers) {
        user.followers = getFollowers(user.username);
        console.log("Completed:  " + user.username)
}



   




    
