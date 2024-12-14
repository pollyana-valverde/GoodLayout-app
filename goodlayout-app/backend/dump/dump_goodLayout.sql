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
  `tipoUser` ENUM('admin', 'cliente') NOT NULL DEFAULT 'cliente',
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCadastro`),
  CONSTRAINT `unique_email` UNIQUE (`email`),
  CONSTRAINT `unique_cpf` UNIQUE (`cpf`)
);


INSERT INTO cadastro (nome, sobrenome, email, telefone, cpf, endereco, imgPerfilCadastro, senha, tipoUser)
VALUES
('Mariana', 'Silva', 'mariana.silva@example.com', '11987654321', '123.456.789-01','Rua das Flores, 123, São Paulo, SP', '/uploads/1730580684780-950340767.png', 'senha123', 'cliente'),
('Pedro', 'Oliveira', 'pedro.oliveira@example.com', '21987654321', '987.654.321-02', 'Avenida Central, 456, Rio de Janeiro, RJ', '/uploads/1730584951091-141192231.png', 'pedro456', 'cliente'),
('Ana', 'Souza', 'ana.souza@example.com', '31987654321', '456.789.123-03', 'Rua dos Pinheiros, 789, Belo Horizonte, MG', '/uploads/1730588286802-758409881.png', 'ana789', 'cliente'),
('Lucas', 'Lima', 'lucas.lima@example.com', '41987654321', '321.654.987-04', 'Avenida Paulista, 1011, São Paulo, SP', '/uploads/1730588791087-425633357.png', 'lucas123', 'cliente'),
('Julia', 'Costa', 'julia.costa@example.com', '51987654321', '654.987.321-05', 'Rua Augusta, 2022, São Paulo, SP', '/uploads/1730590096023-274339815.png', 'julia321', 'cliente'),
('Julia', 'Costa', 'administradora@admin.com', '51987654321', '654.987.321-07', 'Rua Augusta, 2022, São Paulo, SP', '/uploads/1730590096023-274339815.png', 'adm123', 'admin'),
('Rafael', 'Mendes', 'rafael.mendes@example.com', '61987654321', '789.123.456-06', 'Rua das Acácias, 3033, Salvador, BA', '/uploads/1730590497286-752398882.png', 'rafa456', 'cliente');


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


CREATE TABLE `produto` ( 
  `idProduto` INT AUTO_INCREMENT NOT NULL,
  `nomeProduto` VARCHAR(150) NOT NULL,
  `descProduto` text NOT NULL,
  `geralCategoria` VARCHAR(100) NOT NULL,
  `subCategoria` VARCHAR(100) NOT NULL,
  `peso` VARCHAR(50) NOT NULL,
  `altura` VARCHAR(50) NOT NULL,
  `largura` VARCHAR(50) NOT NULL,
  `profundidade` VARCHAR(50) NOT NULL,
  `estoque` VARCHAR(50) NOT NULL, 
  `madeira` VARCHAR(50) NOT NULL, 
  `revestimento` VARCHAR(50) NOT NULL, 
  `ferragem` VARCHAR(50) NOT NULL, 
  `acabamento` VARCHAR(50) NOT NULL, 
  `vidro` VARCHAR(50) NOT NULL, 
  `precoBase` VARCHAR(20) NOT NULL, 
  `desconto` VARCHAR(50) NOT NULL, 
  `quantDesconto` VARCHAR(50) NOT NULL, 
  `tipoDesconto` VARCHAR(100) NOT NULL,
  `grupoDesconto` VARCHAR(100) NOT NULL,
  `tipoGrupoDesconto` VARCHAR(100) NOT NULL,
  `publicacao` VARCHAR(50) NOT NULL,
  `rascunho` VARCHAR(50) NOT NULL,
  `dataPublicacao` VARCHAR(50) NOT NULL,
  `timePublicacao` VARCHAR(50) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idProduto`)
);

CREATE TABLE `coresProduto` ( 
  `idCoresProduto` INT AUTO_INCREMENT NOT NULL,
  `nomeCor` VARCHAR(50) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCoresProduto`),
);

CREATE TABLE `imgProduto` (
`idImgProduto` INT AUTO_INCREMENT NOT NULL,
`imgCaminho` VARCHAR(255),  
CONSTRAINT `PRIMARY` PRIMARY KEY (`idImgProduto`)
);


CREATE TABLE produtoCorImg (
    idProdutoCorImg INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    cores_id INT,
    Img_id INT,
    FOREIGN KEY (produto_id) REFERENCES produto(idProduto) ON DELETE CASCADE,
    FOREIGN KEY (cores_id) REFERENCES coresProduto(idCoresProduto) ON DELETE CASCADE,
    FOREIGN KEY (Img_id) REFERENCES imgProduto(idImgProduto) ON DELETE CASCADE
);
