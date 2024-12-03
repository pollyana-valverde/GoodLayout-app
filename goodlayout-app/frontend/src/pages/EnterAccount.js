import { useNavigate } from "react-router-dom";
import { useAuth } from '../provider/AuthProvider';

const EnterAccount = () => {
  const { tokenGL } = useAuth();
  const userData = tokenGL ? JSON.parse(tokenGL) : null;
  const navegacao = useNavigate();

  const handleLogout = () => {
    navegacao("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1500);

  return (
    <div className="intermediarioPage flex flex-column justify-content-center align-items-center mt-8">
      <div className="flex align-items-center gap-2">
        {userData.tipoUser === 'cliente' && (<h4>Entrando na sua conta</h4>)}
        {userData.tipoUser === 'admin' && (<h4>Bem-vindo de volta!</h4>)}
        <i className="pi pi-spin pi-spinner-dotted" style={{ fontSize: '2rem' }}></i>
      </div>
      <p>Aguarde alguns instantes ...</p>
    </div>
  );
};

export default EnterAccount;
