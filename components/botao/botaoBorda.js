import BotaoEstilos from "./botaoStyle"

const BotaoBorda = props => {
    return (
        <TouchableOpacity style={{ borderWidth: props.borderW, borderColor: props.colorBorder, backgroundColor: props.cor, borderRadius: props.radius }}>
            <Text style={estilos.texto}>Register</Text>
        </TouchableOpacity>
    )
}

export default Botao