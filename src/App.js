import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Page1 from "./Components/Pages/Page1";
import axios from "axios";
import {Route, Routes} from 'react-router-dom';
import Player from "./Components/Pages/Player";
import ErrorPage from "./Components/Pages/ErrorPage";


function App() {
  const [movie, setMovie] = useState([]);
  const [player, setPlayer] = useState("");
  const [title, setTitle] = useState("");


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList"
      );
      setMovie(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
      <Route path = "/" exact element={<Page1 movie={movie} setPlayer = {setPlayer} setTitle ={setTitle}/>}/>
      <Route path = "/player" element={<Player player = {player} title = {title}/>}/>
      <Route path = "*"  element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
