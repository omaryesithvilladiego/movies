const axios = require("axios")


async function getDataMovies() {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}



// homework async await
// async function getDataMovies() {
//     try {
//         const res = await fetch("http://localhost:3000/movies");
//         if (!res.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error; 
//     }
// }

module.exports = getDataMovies;
