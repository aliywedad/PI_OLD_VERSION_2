import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import FormComponent from './listForms';
import CreateForm from './CreateForm';
import { GrDocumentPerformance } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import VoirLesDonnerDuFormilaire from './voirLesDonnerDuFormulaire';
 
export default function FormHomeComponent({ toggle, setToggle, props }) {

    return (
  <>
  <div className='  p-1  '>

<Tabs
      defaultActiveKey="Formulaire"
      id="justify-tab-example"
      className="mb-3 border-1   whitesmoke  "
      justify
    >
      <Tab eventKey="Formulaire"  title={<span style={{ color: 'black' }} className='flex pl-2 align-items-center justify-content-center  '> Les Formulaires  <GrDocumentPerformance className='mt-1 ml-2 text-primary pr-0' /> </span>}  className=''>
         <FormComponent/>
      </Tab>
{/* 
      <Tab eventKey="Cree" title={<span style={{ color: 'black' }} className='flex flex pl-2 align-items-center justify-content-center  '> Créer un Formulaire <BiAddToQueue className='mt-1 ml-2 text-primary '/></span>}  className=''>
        <CreateForm/>
      </Tab> */}
      <Tab eventKey="get" title={<span style={{ color: 'black' }} className='flex flex pl-2 align-items-center justify-content-center  '> Enregistrements<BiAddToQueue className='mt-1 ml-2 text-primary '/></span>}  className=''>
        <VoirLesDonnerDuFormilaire/>
      </Tab>
    </Tabs>
    </div>

  </>
    );
}
