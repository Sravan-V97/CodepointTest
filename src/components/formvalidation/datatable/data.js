
import React, { useEffect, useState } from "react";
import axios from 'axios';

function DataTable() {
    const [data, setData] = useState([]);
    const loadData=async()=>
    {
        let response=await axios.get('https://run.mocky.io/v3/e54a22b7-ee7c-429f-b3cd-333a5c7145c2')
        console.log(response);
        setData(response.data)
    }

    useEffect(() => {
        loadData()
       
    }, [])
  return (
    <div className="card">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Value</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
      {data.map((item,index)=>
       <tr key={index}>
       <th scope="row">{index+1}</th>
       <td>{item.value}</td>
       <td>{item.title}</td>
     </tr> )}
    
    
  </tbody>
</table>
    </div>
  );
}

export default DataTable;
