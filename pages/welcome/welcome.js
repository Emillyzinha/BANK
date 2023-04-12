import { Image, Text, TouchableOpacity, View } from "react-native";
import logoTeste from "../../assets/logo.png"
import estilos from "./welcomeStyle";
import BotaoBorda from "../../components/botao/botaoBorda";

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function Welcome() {
    return (
        <View style={estilos.pagina}>
            <View style={estilos.viewImagem}>
                <Image source={logoTeste} style={estilos.imagem} />
            </View>
            <View style={estilos.viewTexto}>
                <Text style={estilos.titulo}>WELCOME!</Text>
                <Text style={estilos.texto}>Hello, welcome to <B>YourBank!</B></Text>
                <Text style={estilos.texto}>We're excited to have you as our newest customer. Our team is dedicated to providing exceptional
                    banking services and helping you achieve your financial goals.
                    Thank you for choosing YourBank!</Text>
            </View>
            <BotaoBorda borderW/>
        </View>
    )
}

export default Welcome
