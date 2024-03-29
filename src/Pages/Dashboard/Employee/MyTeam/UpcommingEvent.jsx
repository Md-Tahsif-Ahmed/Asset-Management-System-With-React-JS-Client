import { useEffect, useState } from "react";
import SectionTittle from "../../../../Component/SectionTittle";
import useUser from "../../../../Hook/useUser";
import useAuth from "../../../../Hook/useAuth";

const UpcomingEvent = () => {
  const { employee, refetch } = useUser();
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  const {user }= useAuth();

  useEffect(() => {
    // Filter members with birthdays this month
    const filteredMembers = employee.filter((member) => {
      const birthdate = new Date(member.dob);
      return birthdate.getMonth() === new Date().getMonth();
    });

    // Calculate remaining days for upcoming birthdays
    const upcomingBirthdaysData = filteredMembers.map((member) => {
      const birthday = new Date(member.dob);
      const today = new Date();
      birthday.setFullYear(today.getFullYear());

      // Calculate remaining days
      const remainingDays = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

      return {
        ...member,
        remainingDays: remainingDays > 0
          ? `${remainingDays} day${remainingDays !== 1 ? 's' : ''} left for the birthday!`
          : 'Birthday already occurred this month.',
      };
    });

    setUpcomingBirthdays(upcomingBirthdaysData);
  }, [employee]);

  return (
    <div>
      <SectionTittle heading="Upcoming Events" />
      {
        user? <>
        <div className="my-10 grid gap-4 grid-cols-1 lg:grid-cols-3 ml-4">
        {upcomingBirthdays.map((u) => (
          <div key={u._id} className="card w-96 rounded-full bg-[#7E2553] text-white shadow-xl">
            <figure className="px-10 pt-10">
              <img src={u.logo} alt={u.name} className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {u.name}</h2>
              <h3>Date of Birth: {u.dob}</h3>
              <p>Remaining Days: {u.remainingDays}</p>
            </div>
          </div>
        ))}
      </div></>:
      null
      }
    </div>
  );
};

export default UpcomingEvent;
