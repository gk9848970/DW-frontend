import {Infosection1, Infosection2 ,Infosection3,Infosection4  } from "../components/index";
import {homeObjOne} from "../components/InfoSection1/InfosectionData"
export default function HeaDistributor (props)  {
 // console.log(props);
  if (props.name === 1) {
      return <Infosection1 {...homeObjOne}/>
    }
  else if  (props.name === 2) {
    return <Infosection2/>
  }
  else if  (props.name === 3) {
    return <Infosection3/>
  }
  else if  (props.name === 4) {
    return <Infosection4/>
  }
}
