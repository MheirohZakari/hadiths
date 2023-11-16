import React from "react";
import { Wrapper,Content,Text } from "../Banner/banner.styles";
// import Editions from '../../Editions/editions'
import { Link } from "react-router-dom";
import Editions from "../../Editions/editions";





const Banner =()=>{
    return(
        <Wrapper>
            <Content>
               <Text>
                 <h1>WELCOME TO OUR HADITH COLLECTION!</h1>
                 <p>You're entitled to choose from our editions which are in both English and Arabic.</p>  
                </Text> 

                    <Link to ="/editions">
                    <button style={{backgroundColor:"blue",color:"lightBlue",margin:'30px,20px',borderColor:"blue",borderRadius:'5px' }} onClick={<Editions/>} >Editions</button>
                    </Link>
  
            </Content>
        </Wrapper>
    )
};
export default Banner;