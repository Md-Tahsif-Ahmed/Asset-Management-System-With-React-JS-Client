import { useState } from "react";
import SectionTittle from "../../../Component/SectionTittle";
import useRequest from "../../../Hook/useRequest";

const TopMostReq = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const { request, refetch } = useRequest({ searchTerm });

  // Calculate the frequency of each asset
  const assetFrequency = request.reduce((acc, curr) => {
    acc[curr.asset] = (acc[curr.asset] || 0) + 1;
    return acc;
  }, {});

  // Sort assets by frequency in descending order
  const sortedAssets = Object.keys(assetFrequency).sort((a, b) => assetFrequency[b] - assetFrequency[a]);

  // Select the top 4 assets
  const topRequests = sortedAssets.slice(0, 4);

  return (
    <div className="mt-20">
      <SectionTittle heading="Top Most Requested Items" />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Total Requests</th>
            </tr>
          </thead>
          <tbody>
            {topRequests.map((asset, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{asset}</td>
                <td>{assetFrequency[asset]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopMostReq;
