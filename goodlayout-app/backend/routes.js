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
  const { nome, email, cpf, endereco, telefone, senha, nomeEspecialidade } = req.body;
  const imgPerfilCadastro = req.file ? `/uploads/${req.file.filename}` : null;

  connection.query('INSERT INTO cadastro (nome, email, cpf, endereco, telefone, senha, nomeEspecialidade, imgPerfilCadastro) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [nome, email, cpf, endereco, telefone, senha, nomeEspecialidade, imgPerfilCadastro], (err, result) => {
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
  const { nome, email, cpf, endereco, telefone, senha, nomeEspecialidade } = req.body;
  const imgPerfilCadastro = req.file ? `/uploads/${req.file.filename}` : null;

  connection.query('UPDATE cadastro SET nome = ?,  email = ?, cpf = ?, endereco = ?, telefone = ?, senha = ?,nomeEspecialidade = ?, imgPerfilCadastro = ? WHERE idCadastro = ?',
    [nome, email, cpf, endereco, telefone, senha,nomeEspecialidade,imgPerfilCadastro, idCadastro, ], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

router.put('/cadastrosSenha/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  const { senha} = req.body;

  connection.query('UPDATE cadastro SET  senha = ? WHERE idCadastro = ?',
    [ senha , idCadastro, ], (err, result) => {
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
  connection.query('DELETE FROM cadastro WHERE idCadastro = ?',' DELETE FROM UsuarioEditavel WHERE idUser = idCadastro',  [idCadastro], (err, result) => {
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
router.post('/login/:cpf/:senha', (req, res) => {
    const { cpf, senha } = req.params;
  
    connection.query('SELECT * FROM cadastro WHERE cpf = ? and senha = ?', [cpf, senha], (err, results) => {
      if (err) {
        console.error('Erro ao buscar o registro do cadastro:', err);
        res.status(500).json({ error: 'Erro ao buscar o cadastro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Cadastro não encontrado' });
        return;
      }
      res.json(results);
    });
  });
  

module.exports = router;
