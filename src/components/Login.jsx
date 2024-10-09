import { useGoogleLogin } from "@react-oauth/google"


function Login() {

    const responseFromGoogle = async(res)=>{
        try{
        if(res['code']){
           console.log(); 
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