declare module 'connection-firebase' {
  // Adicione aqui as declarações de tipos para o serviço de conexão com o Firebase

  // Por exemplo, você pode declarar uma interface para representar os dados de configuração do Firebase
  interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }

  // Em seguida, você pode declarar uma classe para o serviço de conexão com o Firebase
  class FirebaseConnection {
    constructor(config: FirebaseConfig);

    // Adicione aqui os métodos e propriedades necessários para a conexão com o Firebase
    // Por exemplo, você pode ter métodos para autenticação, leitura e gravação de dados, etc.
  }

  // Exporte a classe do serviço de conexão com o Firebase
  export default FirebaseConnection;
}