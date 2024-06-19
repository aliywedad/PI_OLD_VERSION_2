import MyContainer from "../component/MyContainer";
import Side from "../component/Side";
import Users from "../component/list_users";
import Navebar from '../component/NavebarForms';

export default function UsersPage({ toggle, setToggle,props }) {
    // const [toggle, setToggle] = useState(false); 
  
    return (
  <>
  <Side toggle={toggle} setToggle={setToggle} />
  <Navebar toggle={toggle} setToggle={setToggle}  />

  <MyContainer toggle={toggle} props={<Users/>} setToggle={setToggle}/>
  </>
    );}