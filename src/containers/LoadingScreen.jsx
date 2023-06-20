import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import TituloPokedex from '../components/TituloPokedex'
import '../styles/LoadingScreen.scss'

function LoadingScreen() {

    const navigate = useNavigate();

    const passLoading = () => {
      navigate('/home');
    };

    useEffect(()=>{
        setTimeout(passLoading,3000)
    },[])

  return (
    <div className='LoadingScreen'>
        <TituloPokedex/>
    </div>
  )
}

export default LoadingScreen