import  React,{useEffect,useState} from 'react';
import Navbar from './Navebar';
import { useMediaQuery } from 'react-responsive';
import './style.css'
export default function MyContainer({ toggle, setToggle,props }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // for small screens (up to 767px)
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // for medium screens (768px - 991px)
    const isDesktop = useMediaQuery({ minWidth: 992 });
    useEffect(() => {
        if (isMobile) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }, [isMobile, setToggle]);
  return (
    <>

<div className={` ${toggle?"w-full":" sm:ml-64"}  p-0 flex-row  `} >
{/* <Navbar toggle={toggle} setToggle={setToggle} /> */}
<div className="pt-16 mt-10  ">
{props}

</div>

</div>


</>
  );
}