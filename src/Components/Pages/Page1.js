import { useNavigate } from "react-router-dom";
import "./Page.css";

const Page1 = ({movie, setPlayer, setTitle}) => {
  const navigate = useNavigate();
 
  
  const handelClick = (link, title) => {
    setPlayer(link);
    setTitle(title)
    navigate("/player")
    
  }
  return (
    <div className="page1">
      <div className="row_posters">
        {movie.map((curr, i) => (
          <div className="row_poster" key = {i} onClick = {() => handelClick(curr.trailer, curr.name)}>
            <img src = {curr.poster} alt ={curr.name}></img>
            <h3>{curr.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
