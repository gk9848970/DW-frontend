import NavDistributor  from "./Distributar/Navdistributor";
import Headistributor from "./Distributar/Headistributor" ;
import FeaturesDistributor from "./Distributar/Featuredistributor";
import Caresouldistributor from "./Distributar/Caresouldistributor";
import Formdistributor from "./Distributar/Formdistributor";
import Testdistributor from "./Distributar/Testdistributor";
import Branddistributor from "./Distributar/Branddistributor";
import Footdistributor from "./Distributar/Footdistributor";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {useState,useEffect} from 'react';
import axios from "axios";
import GlobalSyle from "./globalStyles.js";

export let Ndata = null;
export let Navlogo = null;
export let Navbuttom = null;
export let BrandData = null;
export let HeadData = null;
export let Tdata = null;
export let FeatureData = null;
export let Cdata = null;
export let FootData = null;
export let FootSicon = null;
export let NSText = null;
export let FormData = null;
export let ColorData = null;
export let typeOfDataNeeded = []

export function App() {
  const [navbarType, setNavType] = useState(null);
  const [headerType, setHeaderType] = useState(null);
  const [carouselType, setCarouselType] = useState(null);
  const [formType, setFormType] = useState(null);
  const [testimonialType, setTestimonialType] = useState(null);
  const [brandType, setClientType] = useState(null);
  const [footerType, setFooterType] = useState(null);
  const [featureType, setFeatureType] = useState(null);
  useEffect(() => {
    axios
    .post('https://speedlabs-server-host.herokuapp.com/getAllData',{Domain: 'www.leo.com'})
    .then(res => {
        console.log(res );
        setNavType(res.data.navbar.navbarType);
        setHeaderType(res.data.header.headerType);
        setTestimonialType(res.data.testimonial.testimonialType);
        setClientType(res.data.brand.brandType);
        setFormType(res.data.form.formType);
        setFooterType(res.data.footer.footerType);
        setCarouselType(res.data.carousel.carouselType);
        setFeatureType(res.data.feature.featureType);
        NSText = res.data.navbar.navbarData.searchText;
        BrandData = res.data.brand.brandData;
        Ndata = res.data.navbar.navbarData.links;
        Navlogo = res.data.navbar.navbarData.logoImgURL;
        Navbuttom = res.data.navbar.navbarData.button;
        HeadData = res.data.header.headerData.blocks;
        Tdata = res.data.testimonial.testimonialData;
        Cdata = res.data.carousel.carouselData;
        FormData = res.data.form.formData;
        FootData = res.data.footer.footerData;
        FootSicon = res.data.footer.footerData.socialLinks;
        FeatureData = res.data.feature.featureData;
        ColorData = res.data.colors;
    
        const reactIconName = {
          facebook: "Facebook",
          instagram: "Instagram",
          youtube: "YouTube",
          twitter: "Twitter",
          linkedin: "LinkedIn",
          }
          
          const reactIconCode = {
          facebook: iconStyle(FaFacebook),
          instagram: iconStyle(FaInstagram),
          youtube: iconStyle(FaYoutube),
          twitter: iconStyle(FaTwitter),
          linkedin: iconStyle(FaLinkedin),
          }
          
          typeOfDataNeeded = [];
          
          for (let key in FootSicon) {
          const keyURL = FootSicon[key].linkURL.trim();
          if(keyURL === "") {
            continue;
          }
          let tempObj = {};
          tempObj.linkURL = keyURL;
          tempObj.name = reactIconName[key];
          tempObj.icon = reactIconCode[key];
          typeOfDataNeeded.push(tempObj);
          }
    })
    .catch(err => {
        console.log(err);
    })
}, [])

  return (
    <div className="App">
      <GlobalSyle/>
      <NavDistributor name={navbarType}/>
      <Headistributor name={headerType} />
      <Branddistributor name={brandType}/>
      <Testdistributor name={testimonialType}/>
      <FeaturesDistributor name={featureType}/>
      <Formdistributor name={formType}/>
      <Caresouldistributor name={carouselType}/>
      <Footdistributor name={footerType}/>
    </div>
  );
}

const iconStyle = (Icon) => <Icon />;
