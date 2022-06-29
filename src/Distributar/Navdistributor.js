import {Navbar1, Navbar2, Navbar3, Navbar4 } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1) {
    return <Navbar1/>
  }
  else if  (props.name === 2) {
    return <Navbar2/>
  }
  else if  (props.name === 3) {
    return <Navbar3/>
  }
  else if  (props.name === 4) {
    return <Navbar4/>
  }
}
