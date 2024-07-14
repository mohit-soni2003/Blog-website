
import { useEffect, useState } from "react";

import NavigationBar from "./Nav"


function Fashion() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8080/categories/fashion");
        const data = await response.json();
        setData(data);
      };
  
      fetchData();
    }, []);

    
    console.log(data);
    
    return (
    
    <>
    
            <NavigationBar></NavigationBar>
    
            <h1>Hello</h1>

            </> 
  )
}

export default Fashion;