import { CiMail } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import useAsset from "../../../../Hook/useAsset";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import React from 'react';

const ReqAsset = () => {
    const { asset, refetch } = useAsset();

    // const axiosSecure=useAxiosSecure();
    return (
      <div>
        <SectionTittle heading=" Request Assets"></SectionTittle>
        <div className="overflow-x-auto ml-8">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Asset Name</th>
                <th>Asset Type</th>
                <th>Availability</th>
                <th>Request Button</th>
                {/* <th>Update</th>
                      <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {asset.map((ass, index) => (
                <tr key={ass._id}>
                  <th>{index + 1}</th>
                  <td>{ass.product}</td>
                  <td>{ass.type}</td>
                  <td>{ass.quantity}</td>
  
                  <th>
                  <th>
    {ass.quantity > 0 ? (
      <>
        <button
          // onClick={() => handleRequest(ass)}
          className="btn btn-ghost btn-lg text-red-600"
        >
          <CiMail size={28}></CiMail>
        </button>
      </>
    ) : (
      <>
        <button
          disabled
          className="btn btn-ghost btn-lg text-red-600"
        >
          <CiMail size={28}></CiMail>
        </button>
      </>
    )}
  </th>
  
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default ReqAsset;
