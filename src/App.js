import "./styles.css";
import axios from "axios";
import Card from "./components/Card";
import { useEffect, useState } from "react";
export default function App() {
  const [Playlists, setPlaylists] = useState([]);
  const [userPlaylist, setUserPlaylist] = useState([]);
  const token =
    "BQAB_0Z3oEY25XrZwQb6PJBE_zqDWezklOUurPPUbM-aHAuK5Xn5ql7ZbtJ2_Hqn_gps43unBV54a17nFNcxO05ynUzIJz1aqAL5uykiQgvRHYka2Yph5Nme33yTII99SZMQTMyUQ0VjzszWn6dX7mXov8Fz7g988392vAPTdk5J1RbVY2TbPWkEIfzSukZu2S_yIL35w87vKEQggBtVLLPHyLF5sz9UhW7CY6n4HNUP";
  const url = "https://api.spotify.com/v1/browse/featured-playlists?country=IN";

  const handleClick = (id) => {
    setUserPlaylist(
      Playlists.map((playlist) => {
        if (playlist.props.id === id) {
          console.log(playlist.props.id);
          console.log(playlist.props.description);
          return (
            <Card
              id={playlist.props.id}
              description={playlist.props.description}
            />
          );
        } else {
          return null;
        }
      })
    );
  };
  useEffect(() => {
    const getPlaylists = () => {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          const items = res.data.playlists.items;
          setPlaylists(
            items.map((item, key) => {
              return (
                <Card
                  id={item.id}
                  key={item.id}
                  description={item.description}
                  onClick={handleClick}
                />
              );
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getPlaylists();
  }, []);

  return (
    <>
      <div className="App">{Playlists}</div>
      <div className="App right">{userPlaylist}</div>
    </>
  );
}
