import { Testimonial1 , Testimonial2 , Testimonial3 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
    return <Testimonial1/>
  }
  else if  (props.name === 2) {
    return <Testimonial2/>
  }
  else if  (props.name === 3) {
    return <Testimonial3/>
  }
}
