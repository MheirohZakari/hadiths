import React from "react" ;
import Image from '../Images/project galaxy.png'

import {Wrapper,Content} from './header.styles';

const Header = ()=>{
    return(
       <Wrapper>
          <Content>
           <h3 style={{color:"lightblue"}}>Hadith Collection</h3>
               <img src= {Image} alt="project galaxy"  />
          </Content>
       </Wrapper>
    )
};
export default Header  ;