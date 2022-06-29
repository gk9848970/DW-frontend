import { Features1 , Features2 , Features3 , Features4 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
      return <Features1/>
    }
  else if  (props.name === 2) {
    return <Features2/>
  }
  else if  (props.name === 3) {
    return <Features3/>
  }
  else if  (props.name === 4) {
    return <Features4/>
  }
}
