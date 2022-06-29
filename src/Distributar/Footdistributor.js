import { Footer1 , Footer2 , Footer3 , Footer4 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
    return <Footer1/>
  }
  else if  (props.name === 2) {
    return <Footer2/>
  }
  else if  (props.name === 3) {
    return <Footer3/>
  }
  else if  (props.name === 4) {
    return <Footer4/>
  }
}
