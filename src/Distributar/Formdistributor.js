import { Form1 , Form2 , Form3 , Form4 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
      return <Form1/>
    }
  else if  (props.name === 2) {
    return <Form2/>
  }
  else if  (props.name === 3) {
    return <Form3/>
  }
  else if  (props.name === 4) {
    return <Form4/>
  }
}
