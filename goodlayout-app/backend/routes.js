///////////////////////////////////////// cadastro ////////////////////////////////////
const express = require('express');
const connection = require('./db');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configurando o armazenamento do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Pasta onde as imagens serão armazenadas
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Nome único para a imagem
    },
});

const upload = multer({ storage: storage });


// Rota para listar todos os registros
router.get('/cadastros', (req, res) => {
    connection.query('SELECT * FROM cadastro', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastros/:idCadastro', (req, res) => {
    const { idCadastro } = req.params;
    connection.query('SELECT * FROM cadastro WHERE idCadastro = ?', [idCadastro], (err, results) => {
        if (err) {
            console.error('Erro ao buscar o registro:', err);
            res.status(500).json({ error: 'Erro ao buscar o registro' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Registro não encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

// Rota para criar um novo registro
router.post('/cadastroNovoUsuario', upload.single('imgPerfilCadastro'), (req, res) => {
    const { nome, sobrenome, email, cpf, endereco, telefone, senha, tipoUser } = req.body;
    const imgPerfilCadastro = req.file ? `/uploads/${req.file.filename}` : null;

    connection.query('INSERT INTO cadastro (nome, sobrenome, email, cpf, endereco, telefone, senha, tipoUser imgPerfilCadastro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, sobrenome, email, cpf, endereco, telefone, senha, tipoUser, imgPerfilCadastro], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
        });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:idCadastro', upload.single('imgPerfilCadastro'), (req, res) => {
    const { idCadastro } = req.params;
    const { nome, sobrenome, email, cpf, endereco, telefone, senha, tipoUser } = req.body;
    const imgPerfilCadastro = req.file ? `/uploads/${req.file.filename}` : null;

    connection.query('UPDATE cadastro SET nome = ?, sobrenome = ?, email = ?, cpf = ?, endereco = ?, telefone = ?, senha = ?, tipoUser = ?,  imgPerfilCadastro = ? WHERE idCadastro = ?',
        [nome, sobrenome, email, cpf, endereco, telefone, senha, tipoUser, imgPerfilCadastro, idCadastro,], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar o registro:', err);
                res.status(500).json({ error: 'Erro ao atualizar o registro' });
                return;
            }
            res.json({ message: 'Registro atualizado com sucesso' });
        });
});

// Rota para atualizar uma senha existente pelo ID
router.put('/cadastrosSenha/:idCadastro', (req, res) => {
    const { idCadastro } = req.params;
    const { senha } = req.body;

    connection.query('UPDATE cadastro SET  senha = ? WHERE idCadastro = ?',
        [senha, idCadastro,], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar o registro:', err);
                res.status(500).json({ error: 'Erro ao atualizar o registro' });
                return;
            }
            res.json({ message: 'Registro atualizado com sucesso' });
        });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:idCadastro', (req, res) => {
    const { idCadastro } = req.params;
    connection.query('DELETE FROM cadastro WHERE idCadastro = ?', [idCadastro], (err, result) => {
        if (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).json({ error: 'Erro ao excluir o registro' });
            return;
        }
        res.json({ message: 'Registro excluído com sucesso' });
    });
});

/////////////////////////////////////////////login///////////////////////////////////////////////////

//Rota para buscar o cfp e senha necessários no login
router.post('/login/:email/:senha', upload.single('imgPerfilCadastro'), (req, res) => {
    const { email, senha } = req.params;
    const imgPerfilCadastro = req.file ? `/uploads/${req.file.filename}` : null;


    connection.query('SELECT * FROM cadastro WHERE email = ? AND senha = ?', [email, senha, imgPerfilCadastro], (err, results) => {
        if (err) {
            console.error('Erro ao buscar o registro do cadastro:', err);
            res.status(500).json({ error: 'Erro ao buscar o cadastro' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Cadastro não encontrado' });
            return;
        }

        const user = results[0];
        res.json({
            id: user.id,
            nome: user.nome,
            sobrenome: user.sobrenome,
            email: user.email,
            telefone: user.telefone,
            cpf: user.cpf,
            endereco: user.endereco,
            imgPerfilCadastro: imgPerfilCadastro,
            senha: user.senha,
            tipoUser: user.tipoUser,
        });
    });
});


/////////////////////////// new letter //////////////////////////
// Rota para criar um novo registro
router.post('/newsletter', (req, res) => {
    const { email } = req.body;

    connection.query('INSERT INTO newsletter ( email) VALUES (?)',
        [email], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
        });
});

// Rota para listar todos os registros
router.get('/newsletter', (req, res) => {
    connection.query('SELECT * FROM newsletter', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});


//////////////////////////////// suporte pergunta /////////////////////////
// Rota para criar um novo registro
router.post('/suportePergunta', (req, res) => {
    const { nome, sobrenome, email, telefone, pergunta } = req.body;

    connection.query('INSERT INTO suportePergunta ( nome, sobrenome, email, telefone, pergunta ) VALUES (?, ?, ?, ?, ?)',
        [nome, sobrenome, email, telefone, pergunta], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
        });
});

// Rota para listar todos os registros
router.get('/suportePergunta', (req, res) => {
    connection.query('SELECT * FROM suportePergunta', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});


//////////////////////// produtos ///////////////////////
// Rota para listar todos os registros
router.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM produto', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.post('/produtos', (req, res) => {
    const { nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, tipoDesconto, grupoDesconto, publicacao } = req.body;

    connection.query('INSERT INTO produto ( nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, tipoDesconto, grupoDesconto, publicacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, tipoDesconto, grupoDesconto, publicacao], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
        });
});

router.put('/produtos/:idProduto', (req, res) => {
    const { idProduto } = req.params;
    const { nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, tipoDesconto, grupoDesconto, publicacao } = req.body;

    connection.query('UPDATE produto SET nomeProduto = ?, descProduto = ?, geralCategoria = ?, subCategoria = ?, peso = ?, altura = ?, largura = ?, profundidade = ?, estoque = ?, madeira = ?, revestimento = ?, ferragem = ?, acabamento = ?, vidro = ?, precoBase = ?, desconto = ?, tipoDesconto = ?, grupoDesconto = ?, publicacao = ?',
        [nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, tipoDesconto, grupoDesconto, publicacao, idProduto,], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar o registro:', err);
                res.status(500).json({ error: 'Erro ao atualizar o registro' });
                return;
            }
            res.json({ message: 'Registro atualizado com sucesso' });
        });
});

// Rota para excluir um registro pelo ID
router.delete('/produtos/:idProduto', (req, res) => {
    const { idProduto } = req.params;
    connection.query('DELETE FROM produto WHERE idProduto = ?', [idProduto], (err, result) => {
        if (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).json({ error: 'Erro ao excluir o registro' });
            return;
        }
        res.json({ message: 'Registro excluído com sucesso' });
    });
});

module.exports = router;
