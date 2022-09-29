import React from "react";
import{ Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import { useState } from "react";
import COLORS from "../colors/colors"
import Input from "../componentes/Input";
import Layout from "../componentes/Layout";
import Button from "../componentes/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";

const cadastro =() =>{

    const [inputs, setInputs] = React.useState({
        nome_paciente:'',
        telefone_paciente:'',
        celular_paciente:'',
        email_paciente:'',
        nome_responsavel:'',
        telefone_responsavel:''
    });

    //função que manipula a entrada de dados na 
    //state  no método onChangeText
    const handlerOnChange = (text, input)=>{

        setInputs((prevState)=>(
            console.log(prevState),

            {...prevState, [input]:text}
        ));
    }

    /**validação dos dados de cadastro **/

    //state de erro de preenchimento
    const [errors, setErrors] = React.useState({});

    //função handler que configura as mensagens de erro na state
    const handlerErrors = (errorMesage, input)=>{
        setErrors((prevState)=>({...prevState, [input]:errorMesage}));
    }

    //função de validação
    const validate = ()=>{
        let validate = true;

      if (!inputs.nome_paciente) {
        validate = false;
        handlerErrors('Informe o título do livro.', 'titulo');
        // console.log('TITULO EM BRANCO.');
      }

      if (!inputs.telefone_paciente) {
        validate = false;
        handlerErrors('Informe a descrição do livro.', 'descricao');
        // console.log('DESCRIÇÃO EM BRANCO.');
      }

      if (!inputs.celular_paciente) {
        validate = false;
        handlerErrors('Informe a capa do livro.', 'capa');
        // console.log('CAPA EM BRANCO.');
      }
      if (!inputs.email_paciente) {
        validate = false;
        handlerErrors('Informe o título do livro.', 'titulo');
        // console.log('TITULO EM BRANCO.');
      }

      if (!inputs.nome_responsavel) {
        validate = false;
        handlerErrors('Informe a descrição do livro.', 'descricao');
        // console.log('DESCRIÇÃO EM BRANCO.');
      }

      if (!inputs.telefone_responsavel) {
        validate = false;
        handlerErrors('Informe a capa do livro.', 'capa');
        // console.log('CAPA EM BRANCO.');
      }
 
      if(validate){
        cadastrar();
        console.log('Cadastrou');
      }
      console.log(errors);

    const cadastrar =()=>{
        try{
            const response = apiLivraria.post('/cadastrarLivros', 
            {
              nome: inputs.nome_paciente,
              telefone: inputs.telefone_paciente,
              celular: inputs.capa,
            });
          }catch(error){}
  
      }
    }
    }
    return(

        <Layout>   
            <View style={estilos.cadastro}>
                <Text style={estilos.TextTitle}>Cadastro</Text> 
            </View> 
            <View>
                <Input style={estilos.Inputs} placeholder="Nome:"></Input>
                <Input placeholder="telefone"></Input>
                <Input placeholder="celular"></Input>
                <Input placeholder="email" ></Input>
                <Input placeholder="Nome do responsavel"></Input>
                <Input placeholder="telefone do responsavel"></Input>
            </View>
            <View>
                <Button style={estilos.botoes}title="registrar-se"></Button>
            </View>
        </Layout>
 
    )
}

const estilos =StyleSheet.create({
    cadastro:{

    },
    TextTitle:{
        color:COLORS.black,
        fontSize:25,
        fontWeight:"bold"
    },
    Inputs:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
    },
    botoes: {
        flexDirection: "row",
        width: 265,
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      },
});

export default cadastro;