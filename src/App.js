import './App.css';
import React, { useState} from 'react';


//              <<****************** App function starts here ****************>>

function App() {

  //        << ************************* JS starts here  *********************** >>

  const [Sentiment,setSentiment] = useState([]); // -------> Setting outer Sentiment  😅
  const [Lyric,setLyric] = useState([]);   //  -------> Setting outer Lyric  🎹
  const [Yts , setYts] = useState([]); // -------> Setting outer Yts 🔴
  const [Keyword, setKeyword] = useState([]);   // -------> Setting outer Keywords 🔑
  const [Similar, setSimilar] = useState([]);   // -------> Setting outer Similar 🤝
  const [Endsong,setEndsong]  = useState([]);   // -------> Setting outer End song

  

  



  const [Search, setSearch] = useState([]);   // search values are stored here 😈 😈 😈 😈 😈 😈 😈 


  const click = ()=>{
    
    console.log(Search);  // function for the button 

    sentiment(Search);   //checks the sentiment of the function .. the main fucntion is below..
    lyric(Search); //checks the lyric of the function .. the main fucntion is below..
    keyword(Search); //gets the main keywords of the function .. the main fucntion is below..
    yts(Search); //gets the results of the main string.. the main fucntion is below..
    similar(Search); //gets the results of the similar things.. the main fucntion is below..
    getmusic();



  }



  //        <<    ****** API section  ******* >>

  //***************   sentiment:  😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅

  

  const sentiment = (n)=>{
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      body: '{"language":"english","text":"'+n+'"}'
    };
    
    fetch('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response.sentiment);
        setSentiment(response.sentiment);
      })
      .catch(err => console.error("the error is from sentiment"));
      
      }
    

                //sentiment ends here  ***********************

      // lyric finder starts here ***********************🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹🎹

      const lyric = (k)=>{


        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          }
        };
        
        fetch(`https://shazam.p.rapidapi.com/search?term=${k}&locale=en-US&offset=0&limit=5`, options)
          .then(response => response.json())
          .then(response =>{
          console.log(response.tracks.hits[0].track.title);
          console.log(response.tracks.hits[0].track.subtitle)
          let combine_string = response.tracks.hits[0].track.title + " " + response.tracks.hits[0].track.subtitle;
          setLyric(combine_string);
          
          }
          
          )
          .catch(err => console.error("the error is from lyric finder"));
          
        }
        // lyric finder ends here ***********************

        //text splitter keyword  starts here ***********************🔑 🔑 🔑 🔑

        const keyword = (l)=>{

          const options = {
            method: 'POST',
            headers: {
              'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
              'X-RapidAPI-Host': 'webit-text-analytics.p.rapidapi.com'
            }
          };
          
          fetch(`https://webit-text-analytics.p.rapidapi.com/key-phrases?text=${l}&language=en`, options)
            .then(response => response.json())
            .then(response => {
              console.log(response.data.key_phrases)
              setKeyword(response.data.key_phrases)
            })
            .catch(err => console.error("this error is from keyword "));
            
            }

            //text splitter ends here ***********************

            //yts search starts here ********************🔴🔴🔴🔴🔴🔴🔴

            const yts = (vaar)=>{
              const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
                  'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
                }
              };
              
              const yts_arr = [];
              
              
              fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${vaar}`, options)
                .then(response => response.json())
                .then(response => {
                for(var i=0;i<10;i++){
                // console.log(response.result.songs[i].title);
                yts_arr.push(response.result.songs[i].title);
                
                }
                console.log(yts_arr);
                
                setYts(yts_arr);

                       

                
                })
                .catch(err => console.error("the error is from yts finder"));
                
                }

                //yts search ends here ******************** 🔴🔴🔴🔴🔴🔴🔴


                //similar array starts here ******************** 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝

                const similar=(strrn)=>{  
                  const options = {
                    method: 'POST',
                    headers: {
                      'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
                      'X-RapidAPI-Host': 'webit-text-analytics.p.rapidapi.com'
                    }
                  };
                  
                  let similar_arr = [];
                  
                  fetch(`https://webit-text-analytics.p.rapidapi.com/match?needle_string=${strrn}&haystack_strings%5B0%5D=happy&haystack_strings%5B1%5D=sad&haystack_strings%5B2%5D=lonely&haystack_strings%5B3%5D=exited&haystack_strings%5B4%5D=rap&haystack_strings%5B5%5D=anime&haystack_strings%5B6%5D=chill&haystack_strings%5B7%5D=vibes&haystack_strings%5B8%5D=aesthetic&haystack_strings%5B9%5D=pride&haystack_strings%5B10%5D=mood&haystack_strings%5B11%5D=beautiful&haystack_strings%5B12%5D=party&haystack_strings%5B13%5D=romance&haystack_strings%5B14%5D=ambient&haystack_strings%5B15%5D=workout`, options)
                    .then(response => response.json())
                    .then(response => {
                    console.log(response.data.matches)
                    for(var i=0;i<16;i++){
                         if(response.data.matches[i].score>0.6){
                       console.log(response.data.matches[i].match)
                       similar_arr.push(response.data.matches[i].match);
                       }
                  }
                  console.log(similar_arr);
                  setSimilar(similar_arr);
                   
                    })
                    .catch(err => console.error("the error is from similar queries finder"));
                    
                    }

                     //similar array ends here ******************** 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝 🤝



            // getting Music 🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷  starts here ********************

      const getmusic = () =>{
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '377e8c583bmsh48fa1b5176f4fbbp17000fjsn01d2f730baeb',
            'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
          }
        };
          
          for (var i=0;i<3;i++){
            
            fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud?track=${Yts[i]}`, options)
              .then(response => response.json())
              .then(response => console.log(response))
              .catch(err => console.error(err));


          }
          
        }

            


            // getting Music 🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷  ENDS here ********************














  //        <<    ****** API section ends ******* >>
 


  //         << ************************* JS ends here  ************************* >>



  //  👇 👇 👇    << ************************* HTML starts here  *********************** >> 👇 👇 👇
  return (
    <div className="App">

      
      <h1>Muzic</h1>   {/* heading  */}

      <input className="entry" placeholder="Search for music" type="text" onChange={(e)=>{setSearch(e.target.value)}}></input> {/* Music Search input */}
        
        <button onClick={()=>{click()}}>search</button>       {/* Music Search button */}



    </div>
    //      << ************************* HTML ends here  *********************** >>
  );
}

export default App;
