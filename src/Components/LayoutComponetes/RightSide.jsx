import SocailLogin from "../SocailLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";



const RightSide = () => {
    return (
     <div className="space-y-4">
        <SocailLogin></SocailLogin>
        <FindUs></FindUs>
        <Qzone></Qzone>
     </div>
    );
};

export default RightSide;