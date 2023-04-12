import { StyleSheet, Dimensions } from 'react-native'

// const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    pagina: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    viewImagem: {
        width: '100%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
    },
    imagem: {
        width: '50%',
        height: 70,
        // height: 169 / 61 * width
    },
    titulo: {
        color: '#EDAA25',
        fontSize: 45,
        paddingTop: 30,
        paddingBottom: 20,
    },
    viewTexto:{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    texto: {
        display: 'flex',
        alignSelf: 'flex-start',
        fontSize: 25,
        paddingBottom: 20,
    },
    botaoRegister: {
        height: '5%',
        width: '75%',
        borderWidth: 1,
        borderColor: '#EDAA25',
        borderRadius: 10,
    },
    botaoRegister: {
        height: '5%',
        width: '75%',
        backgroundColor: '#EDAA25',
        borderRadius: 10,
    },
    textoBotao: {
        fontSize: 23,
        height: '100%',
        display: 'flex',

    }
})

export default estilos