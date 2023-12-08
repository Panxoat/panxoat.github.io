const article = document.querySelector("article");
const creator = document.getElementById("creator");
const rawUrl = document.getElementById("raw_url");

const imgList = [
  {
    url: "https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=2467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: "Milad Fakurian",
    link: "https://unsplash.com/photos/blue-and-white-abstract-painting-u8Jn2rzYIps",
  },
  {
    url: "https://images.unsplash.com/photo-1607499699372-7bb722dff7e2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: "engin akyurt",
    link: "https://unsplash.com/photos/blue-and-black-abstract-painting-Hlkuojv_P6I",
  },
  {
    url: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: "Pawel Czerwinski",
    link: "https://unsplash.com/photos/pink-smoke-hR545CzxZxk",
  },
  {
    url: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: "Mike Yukhtenko",
    link: "https://unsplash.com/photos/body-of-water-photo-wfh8dDlNFOk",
  },
  {
    url: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    creator: "Kelly Sikkema",
    link: "https://unsplash.com/photos/white-pencil-on-black-platform-tk9RQCq5eQo",
  },
];

const img = imgList[Math.floor(Math.random() * imgList.length)];

article.style.backgroundImage = `url(${img.url})`;
article.style.backgroundRepeat = "no-repeat";
article.style.backgroundSize = "cover";
article.style.backgroundPosition = "center center";

creator.innerHTML = `By ${img.creator}`;

rawUrl.setAttribute("href", img.link);
