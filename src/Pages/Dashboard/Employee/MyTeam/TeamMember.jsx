import SectionTittle from "../../../../Component/SectionTittle";
import useUser from "../../../../Hook/useUser";

const TeamMember = () => {
  const { employee } = useUser();

  return (
    <div className="mb-10">
        <SectionTittle heading="Team Member List"></SectionTittle>
    {
        employee? <>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 ml-4">
      {employee.map((u) => (
        <div key={u._id} className="card w-96 rounded-[50%] bg-[#7E2553] text-white shadow-xl">
          <figure className="px-10 pt-10">
            <img src={u.photo} alt={u.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{u.name}</h2>
            <p>What's Role: {
                (u.role !=='admin'? 'Employee' :'Admin')}</p>
          </div>
        </div>
      ))}
    </div></>: null
    }
    </div>
  );
};

export default TeamMember;
