import { Brands } from "../components/index";

export default function Distributor (props)  {
 // console.log(props);
  if (props.name === 1 || props.name === 2 || props.name === 3|| props.name === 4) {
      return <Brands/>
    }
}
