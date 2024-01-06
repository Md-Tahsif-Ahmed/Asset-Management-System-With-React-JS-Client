import { useState } from "react";
import SectionTittle from "../../../Component/SectionTittle";
import useAsset from "../../../Hook/useAsset";

const LimitStock = () => {
    const [assetType, setAssetType] = useState('');
    const {asset} = useAsset({assetType});

    // Filter requests for items with limited stock (quantity less than 10)
    const limitedStockItems = asset.filter((ass) => ass.quantity < 10);
    return (
      <div className="mb-20">
        <SectionTittle heading="Limit Stock Items" />
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Quantity</th>
                    <th>Added Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {limitedStockItems.map((ass, index) => (
                    <tr key={ass._id}>
                        <th>{index + 1}</th>
                        <td>
                             {ass.product}
                        </td>
                        <td>{ass.type}</td>
                        <td>
                            {ass.quantity}
                        </td>
                        <td>{ass.date}</td>
                         
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
      </div>  
    );
};

export default LimitStock;

  