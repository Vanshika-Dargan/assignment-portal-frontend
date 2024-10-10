import { useGoogleLogin } from "@react-oauth/google"
import axios from 'axios'
function Login() {

    const responseFromGoogle = async(res)=>{
        try{
        if(res['code']){
           console.log(res); 
           const response=await axios.post('http://localhost:8000/portal/v1/auth/login',{
            code: res['code'],
            type: 'google',
            role: 'user'
           })
           console.log(response);
        }
        }
        catch(err){
            console.log(err);
        }
    }

    const loginWithGoogle = useGoogleLogin({
       onSuccess:responseFromGoogle,
       onError:responseFromGoogle,
       flow: 'auth-code',
    })






  return (
<div>
<button onClick={loginWithGoogle}>
  Login With Google
</button>
</div> 
  )
}

export default Login