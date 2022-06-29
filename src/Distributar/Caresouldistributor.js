import { Caresoul1 ,Caresoul2 ,Caresoul3, Caresoul4 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
    return <Caresoul1/>
  }
  else if  (props.name === 2) {
    return <Caresoul2/>
  }
  else if  (props.name === 3) {
    return <Caresoul3/>
  }
  else if  (props.name === 4) {
    return <Caresoul4/>
  }
}
