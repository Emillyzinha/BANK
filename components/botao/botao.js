import BotaoEstilos from "./botaoStyle"

const Botao = props => {
    return (
        <TouchableOpacity style={{ backgroundColor: props.cor, borderRadius: props.radius }}>
            <Text style={estilos.texto}>Register</Text>
        </TouchableOpacity>
    )
}

export default Botao