create database goodLayout;
use goodLayout;

CREATE TABLE `cadastro` ( 
  `idCadastro` INT AUTO_INCREMENT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `sobrenome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `endereco` VARCHAR(250) NOT NULL,
  `imgPerfilCadastro` VARCHAR(255), 
  `senha` VARCHAR(45) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCadastro`),
  CONSTRAINT `unique_email` UNIQUE (`email`),
  CONSTRAINT `unique_cpf` UNIQUE (`cpf`)
);


INSERT INTO cadastro (nome, sobrenome, email, telefone, cpf, endereco, imgPerfilCadastro, senha)
VALUES
('Mariana', 'Silva', 'mariana.silva@example.com', '11987654321', '123.456.789-01','Rua das Flores, 123, São Paulo, SP', '/uploads/1730580684780-950340767.png', 'senha123'),
('Pedro', 'Oliveira', 'pedro.oliveira@example.com', '21987654321', '987.654.321-02', 'Avenida Central, 456, Rio de Janeiro, RJ', '/uploads/1730584951091-141192231.png', 'pedro456'),
('Ana', 'Souza', 'ana.souza@example.com', '31987654321', '456.789.123-03', 'Rua dos Pinheiros, 789, Belo Horizonte, MG', '/uploads/1730588286802-758409881.png', 'ana789'),
('Lucas', 'Lima', 'lucas.lima@example.com', '41987654321', '321.654.987-04', 'Avenida Paulista, 1011, São Paulo, SP', '/uploads/1730588791087-425633357.png', 'lucas123'),
('Julia', 'Costa', 'julia.costa@example.com', '51987654321', '654.987.321-05', 'Rua Augusta, 2022, São Paulo, SP', '/uploads/1730590096023-274339815.png', 'julia321'),
('Rafael', 'Mendes', 'rafael.mendes@example.com', '61987654321', '789.123.456-06', 'Rua das Acácias, 3033, Salvador, BA', '/uploads/1730590497286-752398882.png', 'rafa456');


CREATE TABLE `newsletter` ( 
  `idNewsletter` INT AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idNewsletter`),
  CONSTRAINT `unique_email` UNIQUE (`email`)
);

CREATE TABLE `suportePergunta` ( 
  `idSuportePergunta` INT AUTO_INCREMENT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `sobrenome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `pergunta` text NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idSuportePergunta`)
);
