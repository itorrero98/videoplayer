import axios from "axios";

const KEY = "AIzaSyDyQZU3JYoMGT8jCl5PhSp-MDmp5Ue8zRI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
    },
});
