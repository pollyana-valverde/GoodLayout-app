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
  `nome` VARCHAR(150),
  `sobrenome` VARCHAR(150) ,
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
  `quantDesconto` VARCHAR(50) , 
  `tipoDesconto` VARCHAR(100),
  `grupoDesconto` VARCHAR(100),
  `tipoGrupoDesconto` VARCHAR(100),
  `publicacao` VARCHAR(50),
  `rascunho` VARCHAR(50) NOT NULL,
  `dataPublicacao` VARCHAR(50),
  `timePublicacao` VARCHAR(50),
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idProduto`)
);

CREATE TABLE `coresProduto` ( 
  `idCoresProduto` INT AUTO_INCREMENT NOT NULL,
  `nomeCor` VARCHAR(50) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCoresProduto`)
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


CREATE TABLE tipos_madeiras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_madeira VARCHAR(255) NOT NULL
);

INSERT INTO tipos_madeiras (nome_madeira) VALUES
('Mogno'),
('Carvalho'),
('Cedro'),
('Pinho'),
('Ipê'),
('Eucalipto'),
('Freijó'),
('Jacarandá'),
('Teca'),
('Cumaru'),
('Angelim'),
('Amêndola'),
('Cerejeira'),
('Imbuia'),
('Peroba Rosa'),
('Marfim'),
('Pau-Brasil'),
('Tauari'),
('Bambu'),
('Pinus');

CREATE TABLE tipos_revestimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_revestimento VARCHAR(255) NOT NULL
);

INSERT INTO tipos_revestimento (nome_revestimento) VALUES
('Laca'),
('Verniz fosco'),
('Verniz brilhante'),
('Cera'),
('Melamina'),
('Fórmica'),
('Tecido sintético'),
('Couro natural'),
('Couro sintético'),
('Linho'),
('Veludo'),
('Microfibra'),
('Vinil'),
('Poliéster'),
('Aço inox escovado'),
('Pintura PU'),
('Textura rústica'),
('Madeira laminada'),
('Revestimento em vidro'),
('Pintura UV');

CREATE TABLE tipos_acabamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_acabamento VARCHAR(255) NOT NULL
);

INSERT INTO tipos_acabamento (nome_acabamento) VALUES
('Fosco'),
('Semi-brilho'),
('Alto brilho'),
('Texturizado'),
('Natural'),
('Envernizado'),
('Laqueado'),
('Pintado à mão'),
('Patinado'),
('Decapê'),
('Polido'),
('Rústico'),
('Escovado'),
('Carbonizado'),
('Ebanizado'),
('Cromado'),
('Oxidado'),
('Envelhecido'),
('Vitrificado'),
('Cintilante');

CREATE TABLE tipos_vidro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_vidro VARCHAR(255) NOT NULL
);

INSERT INTO tipos_vidro (nome_vidro) VALUES
('Vidro temperado'),
('Vidro laminado'),
('Vidro jateado'),
('Vidro fumê'),
('Vidro bronze'),
('Vidro refletivo'),
('Vidro fosco'),
('Vidro serigrafado'),
('Vidro incolor'),
('Vidro colorido'),
('Vidro antirreflexo'),
('Vidro aramado'),
('Vidro curvo'),
('Vidro insulado'),
('Vidro acidado'),
('Vidro extra-clear'),
('Vidro espelhado'),
('Vidro blindado'),
('Vidro com proteção UV'),
('Vidro com película de segurança');

CREATE TABLE tipos_ferragens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_ferragem VARCHAR(255) NOT NULL
);

INSERT INTO tipos_ferragens (nome_ferragem) VALUES
('Aço inox'),
('Aço carbono'),
('Alumínio'),
('Bronze'),
('Latão'),
('Plástico'),
('PVC'),
('Zinco'),
('Cobre'),
('Niquelado'),
('Cromo'),
('Ferro fundido'),
('Ferro galvanizado'),
('Aço galvanizado'),
('Aço tratado'),
('Acetal'),
('Nylon'),
('Aço inox escovado'),
('Polipropileno'),
('Silicone');


CREATE TABLE categorias_moveis_externos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL
);

INSERT INTO categorias_moveis_externos (nome_categoria) VALUES
('Mesas externas'),
('Cadeiras externas'),
('Sofás para área externa'),
('Espreguiçadeiras'),
('Bancos de jardim'),
('Conjuntos de jantar para áreas externas'),
('Guarda-sóis'),
('Gazebos'),
('Churrasqueiras'),
('Estantes externas'),
('Armários externos'),
('Pérgulas'),
('Jardineiras'),
('Decoração de parede externa'),
('Tapetes para áreas externas');

CREATE TABLE subcategorias_moveis_externos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_subcategoria VARCHAR(255) NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categorias_moveis_externos(id)
);

INSERT INTO subcategorias_moveis_externos (nome_subcategoria, categoria_id) VALUES
('Mesas de madeira', 1),
('Mesas dobráveis', 1),
('Cadeiras de madeira', 2),
('Cadeiras de metal', 2),
('Sofás modulares', 3),
('Sofás de vime', 3),
('Espreguiçadeiras de plástico', 4),
('Espreguiçadeiras de madeira', 4),
('Bancos rústicos', 5),
('Bancos modernos', 5),
('Conjuntos de jantar com 4 lugares', 6),
('Conjuntos de jantar com 6 lugares', 6),
('Guarda-sóis de lona', 7),
('Guarda-sóis articulados', 7),
('Gazebos de madeira', 8),
('Gazebos de metal', 8),
('Churrasqueiras portáteis', 9),
('Churrasqueiras embutidas', 9),
('Estantes decorativas', 10),
('Estantes funcionais', 10),
('Armários com acabamento resistente à água', 11),
('Pérgulas com cobertura de vidro', 12),
('Pérgulas com cobertura de lona', 12),
('Jardineiras suspensas', 13),
('Jardineiras de chão', 13),
('Decoração com cerâmica', 14),
('Decoração com madeira', 14),
('Tapetes antiderrapantes', 15),
('Tapetes impermeáveis', 15);


CREATE TABLE tipos_desconto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_desconto VARCHAR(255) NOT NULL
);

INSERT INTO tipos_desconto (nome_desconto) VALUES
('Primeira compra'),
('Dia do meio ambiente'),
('Natal'),
('Ano Novo'),
('Páscoa'),
('Dia das Mães'),
('Dia dos Pais'),
('Black Friday'),
('Cyber Monday'),
('Dia das Crianças'),
('Dia dos Namorados'),
('Halloween'),
('Ação de Graças'),
('Dia do Trabalhador');

CREATE TABLE `carrinhocompra` ( 
  `idCarrinhocompra` INT AUTO_INCREMENT NOT NULL,
  cliente_id INT, 
  produto_id INT,
  cores_id VARCHAR(50) not null,
  Img_id VARCHAR(255) NOT NULL,
  `quantProduto` VARCHAR(5) NOT NULL, 
  FOREIGN KEY (cliente_id) REFERENCES cadastro(idCadastro) ON DELETE CASCADE,
  FOREIGN KEY (produto_id) REFERENCES produto(idProduto) ON DELETE CASCADE,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCarrinhocompra`)
);


INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Mesas externas', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;

INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Cadeiras externas', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;

INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Espreguiçadeiras', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;

INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Guarda-sóis', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;

INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Jardineiras', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;

INSERT INTO produto (nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) 
SELECT 
    CONCAT('Produto Modelo ', FLOOR(RAND() * 12 + 1)), 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit voluptas minima fugit quaerat alias numquam dolorem. Beatae nesciunt est consequatur, accusamus dolore, autem magnam adipisci accusantium tempore voluptate ab.', 
    'Pérgulas', 
    'Mesas de madeira', 
    CONCAT(FLOOR(RAND() * 80 + 10), 'kg'), 
    CONCAT(FLOOR(RAND() * 50 + 30), 'cm'), 
    CONCAT(FLOOR(RAND() * 200 + 50), 'cm'), 
    CONCAT(FLOOR(RAND() * 100 + 20), 'cm'), 
    FLOOR(RAND() * 30 + 1), 
    'Mogno', 
    'Laca', 
    'Aço inox', 
    'Fosco', 
    'Vidro temperado', 
    CONCAT(FLOOR(RAND() * 3000 + 500), '.00'), 
    CONCAT(FLOOR(RAND() * 20), '%'), 
    CONCAT(FLOOR(RAND() * 400), ''), 
    'Primeira compra', 
    'Grupo Aleatório', 
    'Tipo Grupo', 
    'Sim', 
    'Não', 
    '2025-03-18', 
    CONCAT(FLOOR(RAND() * 24), ':', FLOOR(RAND() * 60))
FROM information_schema.tables
LIMIT 10;