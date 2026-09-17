 // To resolve callback hell we can use promises or async await
 
function getuser(id, callback) {
    setTimeout(() => {

        console.log("User Fetched");

        const user = {
            id: id,
            username: "Mayank"
        };

        callback(null, user);

    }, 1000);
}


function getprofile(id, callback) {

    setTimeout(() => {

        console.log("Profile Fetched");

        const profile = {
            id: 1,
            location: "India",
            interests: ["Coding", "Gaming"]
        };

        callback(null, profile);

    }, 1000);
}


function getposts(username, callback) {

    setTimeout(() => {

        console.log("Posts Fetched");

        const posts = ["Post1", "Post2", "Post3"];

        callback(null, posts);

    }, 1000);
}


getuser(10101, (error, user) => {

    if (error) {
        console.log(error);
        return;
    }

    getprofile(user.id, (error, profile) => {

        if (error) {
            console.log(error);
            return;
        }

        getposts(user.username, (error, posts) => {

            if (error) {
                console.log(error);
                return;
            }

            console.log("Posts:", posts);

        });

    });

});