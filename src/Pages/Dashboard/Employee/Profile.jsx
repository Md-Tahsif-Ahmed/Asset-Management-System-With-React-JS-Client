import { CiEdit } from "react-icons/ci";
import SectionTittle from "../../../Component/SectionTittle";
import useAuth from "../../../Hook/useAuth";

const Profile = () => {
    const {user} = useAuth();
    return (
        <div>
            <SectionTittle heading="My Profile "></SectionTittle>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
               
              <th>Full name</th>
              <th>Email</th>
              <th>Date of birth</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            
              <tr>
                 
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                 
                <th>
                  <button
                    className="btn"
                     
                  >
                    <CiEdit size={28}></CiEdit>
                  </button>
                </th>
              </tr>
            
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Profile;