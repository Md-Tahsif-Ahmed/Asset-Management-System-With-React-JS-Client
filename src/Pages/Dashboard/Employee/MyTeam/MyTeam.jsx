import SectionTittle from "../../../../Component/SectionTittle";
import TeamMember from "./TeamMember";
import UpcommingEvent from "./UpcommingEvent";


const MyTeam = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
            
            <UpcommingEvent></UpcommingEvent>
            <TeamMember></TeamMember>
             
        </div>
    );
};

export default MyTeam;