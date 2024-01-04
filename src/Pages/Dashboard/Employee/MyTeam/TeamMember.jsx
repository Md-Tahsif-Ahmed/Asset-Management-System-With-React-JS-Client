import SectionTittle from "../../../../Component/SectionTittle";
import useUser from "../../../../Hook/useUser";

const TeamMember = () => {
  const { user } = useUser();

  return (
    <div className="mb-10">
        <SectionTittle heading="Team Member List"></SectionTittle>
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 ml-4">
      {user.map((u) => (
        <div key={u._id} className="card w-96 rounded-[50%] bg-base-300 shadow-xl">
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
    </div>
    </div>
  );
};

export default TeamMember;
