import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import "./post.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import { BsChevronDown } from 'react-icons/bs';

const validationPost = yup.object().shape({
  nomeLoja: yup.string().required("Nome da Loja é obrigatório!").max(40,"Nome da loja precisa ter 40 caracteres no maximo"),
  email: yup.string().email("Digite um e-mail válido!").max(100,"descri de 100 caracteres no maximo"),
  cnpj: yup.string().required("CNPJ obrigatório").max(14,"CNPJ invalido"),
  telefone: yup.number().positive().integer().required("Telefone é obrigatorio!").max(11).min(11,"Formato esperado: (83) XXXX-XXXXX"),
  senha: yup.string().min(6,"Sua senha deve conter apenas 6 digitos").required("A senha é obrigatoria"),
  confirmaSenha: yup.string().required("Confirmação obrigatória de senha.").oneOf([yup.ref("password")],"As senhas devem ser iguais."),
});

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const addPost = (data) => axios.post("https://upload-my-api.herokuapp.com/post/create",data)
.then(() =>{
  console.log("Deu tudo certo!")
})
.catch(()=>{
  console.log("Deu tudo errado :(")
})

  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
         
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Nome da Loja</label>
                <input type="text" name="nomeLoja" {...register("nomeLoja")} />
                <p className="error-message">{errors.nomeLoja?.message}</p>
              </div>

              <div className="fields">
                <label>E-mail</label>
                <input type="text" name="email"{...register("email")}/>
                <p className="error-message">{errors.email?.message}</p>
              </div>

              <div className="fields">
                <label>Cnpj</label>
                <input type="text" name="cnpj" {...register("cnpj")}/>
                <p className="error-message">{errors.cnpj?.message}</p>
              </div>
              
              <div className="fields">
                <label>Telefone</label>
                <input type="text" name="telefone" {...register("telefone")}/>
                <p className="error-message">{errors.telefone?.message}</p>
              </div>

              <div className="fields">
                <label>Senha</label>
                <input type="password" name="senha" {...register("senha")}/>
                <p className="error-message">{errors.senha?.message}</p>
              </div>

              <div className="fields">
                <label>Confirmar Senha</label>
                <input type="password" name="confirmaSenha" {...register("confirmaSenha")}/>
                <p className="error-message">{errors.confirmaSenha?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
                <BsChevronDown/>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
