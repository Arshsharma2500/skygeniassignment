import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart.jsx";
import DonutChart from "./components/DonutChart.jsx";
import TableDetails from "./components/TableData";


const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
   
    const server = async () => {
      return new Promise((resolve, reject) => {
        
        fetch(`http://localhost:3001/api/customer`)
          .then(response => {
            
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              return response.json();
            } else {
              return response.text(); 
            }
          })
          .then(data => {
            console.log('Fetch successfully:', data);  
            setData(data);
            resolve(data);
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            reject(error);
          });
      });
    };

    const fetchPromise = server();

  }, []);

  return (
    <div className="justify-between p-10 h-screen w-full flex-col gap-20 flex ">

      <h1 className="text-2xl font-semibold -mt-10 text-center">
        Won ACV mix by Cust Type
      </h1>
      <div className="flex flex-wrap justify-around">
        <div>
          <h1 className="font-semibold underline text-center mb-4">Bar Chart</h1>
          {/* Bar chart */}
          <BarChart data={data}/>
        </div>

        <div >
          <h1>pie Chart</h1>
          <DonutChart data={data} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold underline text-center mb-4">Table Details</h1>
        {/* Table details */}
        <TableDetails data={data} />
      </div>
    </div>
  );
};

export default App;
