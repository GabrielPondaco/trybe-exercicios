// usersDetails.js
import React, { Component } from 'react';
const AGE = 50;
class App extends Component {

  constructor() {
    super();

    // No construtor, criamos os nossos estados de Loding e users, que vai receber a requisição para a api.
    // Começamos com o Loading como true, pois queremos que ele exiba a nossa mensagem de "carregando" enquanto
    // não renderizamos a primeira tela. Já o users, setamos como um estado vázio, pois ele ira receber a nossa API.

    this.state = {
      loading: true,
      users: [],
    };
  }

  // Como estudamos, o componentDidMount vai disparar ações após o componenete ser inserido no DOM, por isso dizemos que é
  // o ideal para realizar requisições e atribuimos ao nosso estado users o 'data.results' 
  // que trás os nossos dados da API. Além disso, atribuimos como false o Loading, 
  // uma vez que quando a página é renderizada, não teremos mais a mensagem de "carregando".

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    for (let index = 0; index < 5; index += 1) {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Note que, nesse ponto o nosso data retorna um Objeto e, se acessarmos o data.results, teremos nosso array de objetos com
        // as informações das pessoas que são geradas aleatoriamente pela requisição.
        // console.log(data);
        // console.log(data.results);
        this.setState((prevState) => { 
          return {
            users: [...prevState.users, ...data.results],
            loading: false,
        }});
      });
    }
    
  }

  // o shoudComponentUptade irá verificar se a pessoa renderizada pela API tem mais de 50 anos
  // e com isso, irá autorizar se o componente atualiza ou não. Caso não atualize,
  // uma mensagem de "carregando..." será exibida na tela. Caso ocorra essa situação, dê
  // um console.log no nextState e verifique a idade da pessoa que é trazida pela API.
  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const { users } = this.state;
    const filteredUsers = users.filter((user) => user.dob.age <= AGE)
    if (filteredUsers) {
      return true;
    }
    return false;
  }

  render() {
    const { users, loading } = this.state;
    const map = users.filter((user) => user.dob.age <= AGE).map((user) => {
      return (
        <div className="container" key={user.name.first}>
          <img src={user.picture.thumbnail} alt={user.name.first}/>
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <h3>{user.email}</h3>
          <h3>{user.dob.age}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>
          Random User
        </h1>
        <div className="body">
          {loading ? <div>loading...</div> : map}
        </div>
      </div>
    );
  }
  }

export default App;

