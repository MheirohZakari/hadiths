import React from "react";
import { Link } from "react-router-dom"


const Editions = () => {

    return (
        <>

            <div>

                <ul>
                    <Link to='/Books/Sunan Abu Dawud'>
                        <li><a href="../Books/Sunan Abu Dawud">Sunan Abu Dawud</a></li>
                    </Link>
                    <Link to='/sahihbukhari'>
                        <li><a href="../Books/Sahih Bukhari">Sahih Bukhari</a></li>
                    </Link>
                    <Link to='/ibnmajah'>
                        <li><a href="../Books/Sunan Ibn Majah">Sunan Ibn Majah</a></li>
                    </Link>
                    <Link to='/malik'>
                        <li><a href="../Books/Muwatta Malik">Muwatta Malik</a></li>
                    </Link>
                    <Link to='/muslim'>
                        <li><a href="../Books/Sahih Muslim">Sahih Muslim</a></li>
                    </Link>
                    <Link to='/nasai'>
                        <li><a href="../Books/Sunan Nasai">Sunan Nasai</a></li>
                    </Link>
                    <Link to='/jamitirmidhi'>
                        <li><a href="../Books/Jami Tirmidhi">Jami Tirmidhi</a></li>
                    </Link>
                </ul>


            </div>



            {/* <div className="dropdown" style={{position:"relative",display:"inline-block"}}> */}
            {/* <button className="dropbtn" style={{cursor:"pointer"}}>Sunan Abu Dawud</button> */}
            {/* <div className="dropdown-content" style={{display:"none",position:"absolute"}}> */}
            {/* <a href="./Books/Sunan Abu Dawud/ara-abudawud"> Arabic</a> */}
            {/* </div> */}
            {/* </div> */}

        </>








    )
}

export default Editions;