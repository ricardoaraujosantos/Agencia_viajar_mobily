import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../Pages/Cadastro";
import Contact from "../Pages/Contact";
import Hosting from "../Pages/Hosting";
import Login from "../Pages/Login";
import Promo from "../Pages/Promo";
import Ticket from "../Pages/Ticket";

const {Screen, Navigator} = createNativeStackNavigator();

const StackRoutes = () => {
    return(
        <Navigator screenOptions={{
           headerShown: false
        }}>
            <Screen name="Hospedagens"
                    component={Hosting}
            />
            <Screen name="Passagens"
                    component={Ticket}
            />
            <Screen name="Contato"
                    component={Contact}
            />
            <Screen name="Promo"
                    component={Promo}
            />
            <Screen name="Cadastro"
                    component={Cadastro}
            />
             <Screen name="Login"
                    component={Login}
            />
        </Navigator>
    )
}

export default StackRoutes;