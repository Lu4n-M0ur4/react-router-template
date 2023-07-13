import React from "react";
import {StyledButton} from "../style"
import { useNavigate } from "react-router-dom";

export default function ErrPage() {
  
  


  const navigate = useNavigate()
  
  return (
    <>
      <img src="https://nerdweb.com.br/uploads/1578511646-cropit-.jpg"></img>
      <StyledButton onClick={()=>navigate("/")}>Voltar para o inicio</StyledButton>
    </>
  );
}
