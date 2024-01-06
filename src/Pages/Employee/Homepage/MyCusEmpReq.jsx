import SectionTittle from "../../../Component/SectionTittle";
import useUserCustom from "../../../Hook/useUserCustom";


const MyCusEmpReq = () => {
    const { custom, refetch } = useUserCustom();
    return custom.length === 0? null:
        (
        <div className="mt-20">
        <SectionTittle heading="My Custom Request"></SectionTittle>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Asset name</th>
                <th>Asset Type</th>
                <th>Price</th>
                 
              </tr>
            </thead>
            <tbody>
              {custom.map((ass, index) => (
                <tr key={ass._id}>
                  <th>{index + 1}</th>
                  <td>{ass.asset}</td>
                  <td>{ass.type}</td>
                  <td>{ass.price}</td>
                  <td>{ass.status}</td>
                   
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        )
       
    
};

export default MyCusEmpReq;