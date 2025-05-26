import { useEffect, useState } from 'react';



export const SpotifyCard = () => {

    type Track = {
        name: string;
        artist: { name: string };
        album?: { title: string };
        url: string;
        image: { size: string; "#text": string }[];
      };

    const [tracks, setTracks] = useState<Track[]>([]);

    //Function used to pull my top 3 songs
    useEffect(() => {
        const fetchTopTracks = async () => {
      
          try {
            const res = await 
                fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=jerodrigo06&api_key=cf17c52d09dde6bbba1fb6ce9b65e709&limit=3&period=7&format=json`);
            const data = await res.json();
            const topTracks = data.toptracks.track;
            setTracks(topTracks);
          } catch (err) {
            console.error("Error fetching top tracks:", err);
          }
        };
      
        fetchTopTracks();
      }, []);
    
      return (
        <div className="rounded-xl bg-[#212121] w-64 p-4 text-[#b3b3b3]">
          <h1 className="mb-2 font-semibold text-[#B3B3B3]">My Top Songs (Week)</h1>
          <div className="space-y-3">
            {tracks.map((track) => (
              <div key={track.name} className="flex items-start gap-3">
                <img
                  src={track.image[2]["#text"] || "/placeholder.jpg"}
                  alt={track.name}
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <a className="text-sm font-semibold text-[#1DB954] hover:underline" href={track.url}>{track.name}</a>
                  <p className="text-xs text-[#b3b3b3]">
                    {track.artist.name} • {track.album?.title ?? "Unknown Album"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    