import { useEffect, useState } from 'react';



export const SpotifyCard = () => {

    type Track = {
        name: string;
        artist: { name: string };
        url: string;
        image: { size: string; "#text": string }[];
        album?: string;
      };
    


    const [tracks, setTracks] = useState<Track[]>([]);

    //Function used to pull my top 3 songs and related info
    useEffect(() => {
        const fetchTopTracks = async () => {
      
          try {
            const res = await 
                fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=jerodrigo06&api_key=cf17c52d09dde6bbba1fb6ce9b65e709&limit=3&period=7&format=json`);
            const data = await res.json();
            const topTracks = data.toptracks.track;

            
            const enrichedTracks = await Promise.all(
                //Method loops through each pulled track and fetches the extra info, album name and image
                topTracks.map(async (track: Track) => {
                  try {
                    const res = await fetch(
                      `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=cf17c52d09dde6bbba1fb6ce9b65e709&artist=${track.artist.name}&track=${track.name}&format=json`);
                    const data = await res.json();
                    return {
                      ...track,
                      album: data.track?.album?.title ?? "Unknown",
                      image: data.track?.album?.image ?? [],
                    };
                  } catch {
                    return {
                      ...track,
                      album: "Unknown",
                      image: [],
                    };
                  }
                })
              );
            


            setTracks(enrichedTracks);
          } catch (err) {
            console.error("Error fetching top tracks:", err);
          }
        };
      
        fetchTopTracks();
      }, []);
     
    
      return (
        <div className="relative rounded-xl bg-[#212121] w-full h-s p-4 pd-16 text-[#b3b3b3] shadow-lg"
            style={{ boxShadow: '0 0 10px #1DB954'}}>
          <h1 className="mb-2 font-semibold text-[#B3B3B3] text-l">My Top Songs (Week)</h1>
          <div className="space-y-3">
            {tracks.map((track) => (
              <div key={track.name} className="flex items-center gap-3 w-full">
                <img src={track.image[3]?.["#text"]} className="w-12 h-12 rounded-md object-cover"/>
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <a className="text-sm font-semibold text-[#1DB954] hover:underline" href={track.url}>{track.name}</a>
                  <p className="text-xs text-[#b3b3b3]">
                    {track.artist.name} • {track.album}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    