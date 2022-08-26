var netInd = 0;
var netfTitle = document.getElementById("netflixTitle");
var netfDesc = document.getElementById("netflixDesc");
var netfdescData = [
    {
        Title:"The Gray Man",
        Descirption:'When a shadowy CIA agent uncovers damning agency secrets,he’s hunted across the globe by a sociopathic rogue operative who’s put a bounty on his head.'
    },{
        Title:'The Batman',
        Descirption:'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.'
    },{
        Title:'Obi-Wan Kenobi',
        Descirption:'Obi-Wan Kenobi is an American television miniseries created for the streaming service Disney+. It is part of the Star Wars franchise and stars Ewan McGregor as Obi-Wan Kenobi, reprising his role from the Star Wars prequel trilogy.'
    }
]
netfTitle.textContent = netfdescData[netInd].Title;
netfDesc.textContent = netfdescData[netInd].Descirption;
function netflixSlideFront(){
    if(netInd!=2){
        let netflixSiderPage = document.getElementById("movie-box");
        netInd+=1;
        netflixSiderPage.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 0),hsla(272, 89%, 11%, 0.812)) ,url(../images/moviebox"+netInd.toString()+".png)  no-repeat center center / cover";
        netfTitle.textContent = netfdescData[netInd].Title;
        netfDesc.textContent = netfdescData[netInd].Descirption;
    }
    else{
        let netflixSiderPage = document.getElementById("movie-box");
        netInd=0;
        netflixSiderPage.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 0),hsla(272, 89%, 11%, 0.812)) ,url(../images/moviebox"+netInd.toString()+".png)  no-repeat center center / cover";
        netfTitle.textContent = netfdescData[netInd].Title;
        netfDesc.textContent = netfdescData[netInd].Descirption;

    }
    console.log(netInd.toString()+' click happend');
}

function netflixSlideBack(){
    if(netInd!=0){
        let netflixSiderPage = document.getElementById("movie-box");
        netInd-=1;
        netflixSiderPage.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 0),hsla(272, 89%, 11%, 0.812)) ,url(../images/moviebox"+netInd.toString()+".png)  no-repeat center center / cover";
        netfTitle.textContent = netfdescData[netInd].Title;
        netfDesc.textContent = netfdescData[netInd].Descirption;
    }
    else{
        let netflixSiderPage = document.getElementById("movie-box");
        netInd=2;
        netflixSiderPage.style.background = "linear-gradient(180deg,rgba(255, 255, 255, 0),hsla(272, 89%, 11%, 0.812)) ,url(../images/moviebox"+netInd.toString()+".png)  no-repeat center center / cover";
        netfTitle.textContent = netfdescData[netInd].Title;
        netfDesc.textContent = netfdescData[netInd].Descirption;
    }
    console.log(netInd.toString()+' click happend');
}

