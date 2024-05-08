import { QuizData } from '@/constants';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const QuizProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [loaded, setLoaded] = useState(false)
  const quiz = useParams<{ quiz: string }>().quiz ?? "";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (pathname !== "/") {
      if (quiz === "" || !QuizData.find(q => q.title === quiz)) {
        navigate("/");
      } 
    }
    setLoaded(true)
  }, [navigate, quiz, pathname])

  return (
    loaded ? <>{children}</> : <div></div>
  )
}

export default QuizProvider