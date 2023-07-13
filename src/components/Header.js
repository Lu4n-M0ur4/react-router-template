import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import { Loguin, goToHome, goToProfile } from "../routes/coordinator";

function Header() {

  const navigate = useNavigate()

 
  
  return (
    <StyledHeader>

      <StyledButton onClick={()=>goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>

      <StyledButton  onClick={()=>goToProfile(navigate,"Easley")}>
        Ir para página de perfil
      </StyledButton>

      <StyledButton  onClick={()=>Loguin(navigate)}>
        Loguin
      </StyledButton>

    </StyledHeader>
  );
}

export default Header;
