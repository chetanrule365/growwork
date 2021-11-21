const landingInfo = [
    {
        title: "Talk to a contractor today",
        imageURL:
            "https://media.istockphoto.com/photos/yellow-safety-helmet-on-workplace-desk-with-construction-worker-team-picture-id1153235950?k=20&m=1153235950&s=612x612&w=0&h=T9pl2zzJ7LszJoczn6Z-Zyk3UF7aHKvoWVv3JgB0AxY=",
    },
    {
        title: "Find the best barber",
        imageURL:
            "https://i.guim.co.uk/img/media/98129de389ea7d99f8e4a7d1814bd2cb05915ea3/43_80_790_474/master/790.png?width=1200&height=900&quality=85&auto=format&fit=crop&s=9502d0e3924c0271d8fe936354220b37",
    },
    {
        title: "Find Taxis",
        imageURL:
            "https://media.istockphoto.com/photos/taxi-picture-id519870714?k=20&m=519870714&s=612x612&w=0&h=vpuJQ1Uq72ebwJAXQXLPtGYDo1R0dlO_oxhgqlY9ZcQ=",
    },
    {
        title: "Find the best restaurant",
        imageURL:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2236%2Ftrend20200212115158.jpg",
    },
    {
        title: "Find the closest urgent care center",
        imageURL:
            "https://integrauc.com/en/wp-content/uploads/2020/09/urgent-care-services.png",
    },
    {
        title: "Find the best groomer nearby",
        imageURL:
            "https://studyworkgrow.com.au/wp-content/uploads/2020/03/Dog-groomer-1024x681.jpg",
    },
];
const landing_con = document.getElementById("landing-con");
const landing = document.getElementById("landing");
const landingTitleEle = document.querySelector("#landing-title");
window.onload = () => {
    const random = Math.floor(Math.random() * landingInfo.length);
    landingTitleEle.textContent = landingInfo[random].title;
    landing_con.style.backgroundImage = `url(${landingInfo[random].imageURL})`;
    landing.style.backgroundImage = `url(${landingInfo[random].imageURL})`;
};

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.elements);
});
