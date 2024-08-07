import axios from 'axios'
import { useEffect } from 'react'
import { useStore } from '../Store'
function Header(){
    const {pic, setState} = useStore()
    useEffect(()=>{
        const handleSerch = async ()=>{
            
            const response  =  await axios.get('https://dog.ceo/api/breed/labrador/images/random/5')
            
            console.log(response)
            setState((oldState)=>{
                return{
                    ...oldState,
                    pic: response.data.message
                }
            })
            
        }
        handleSerch()
    },[])
    return (
        <>
        <header style={{ alignItems:'center'}}>
            {/* just in case i want one instead of multiple */}
        {/* <img key = {pic} src={item} alt="" style={{width: 500}} /> */}
        <section style={{ display: "flex"}}>
        {pic.map((item , index)=>(

                <img key = {index} src={item} alt="" style={{width: 300, border: "solid", borderWidth: 3}} />
                
                ))}
                </section>
        <p>hi there</p>

        </header>
        
        </>
    )
}

export default Header