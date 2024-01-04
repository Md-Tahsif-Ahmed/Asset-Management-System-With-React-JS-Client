import { Link } from "react-router-dom";
import useAsset from "../../../../Hook/useAsset";
import { useState } from "react";

const AddEmployee = () => {
const [assetType, setAssetType] = useState('');
const [searchTerm, setSearchTerm] = useState('');
const [sortBy, setSortBy] = useState('');
const { asset } = useAsset({assetType, searchTerm, sortBy});

  // Calculate the sum of quantity using reduce
  const totalQuantity = asset.reduce((sum, ass) => sum + Number(ass.quantity), 0);

  return (
    <div className=" flex item-center justify-around font-bold my-10 text-2xl">
      <p>Total Quantity: {totalQuantity}</p>
      <Link to='/dashboard/payment'><button className="btn bg-red-500 text-white hover:bg-red-500">Increase Limit</button></Link>
    </div>
  );
};

export default AddEmployee;
