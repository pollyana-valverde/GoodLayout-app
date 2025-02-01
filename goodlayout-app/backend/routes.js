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
router.post('/login/:email/:senha', (req, res) => {
    const { email, senha } = req.params;

    connection.query(
        'SELECT * FROM cadastro WHERE email = ? AND senha = ?',
        [email, senha], // ✅ Remove imgPerfilCadastro da consulta
        (err, results) => {
            if (err) {
                console.error('Erro ao buscar o registro do cadastro:', err);
                return res.status(500).json({ error: 'Erro ao buscar o cadastro' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Cadastro não encontrado' });
            }

            const user = results[0];

            res.json({
                idCadastro: user.idCadastro,  // ✅ Agora deve aparecer corretamente
                nome: user.nome,
                sobrenome: user.sobrenome,
                email: user.email,
                telefone: user.telefone,
                cpf: user.cpf,
                endereco: user.endereco,
                imgPerfilCadastro: user.imgPerfilCadastro, // ✅ Pegando do banco de dados corretamente
                senha: user.senha,
                tipoUser: user.tipoUser,
            });
        }
    );
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
    const { nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao } = req.body;

    connection.query('INSERT INTO produto ( nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', idProduto: result.insertId });
        });
});

router.put('/produtos/:idProduto', (req, res) => {
    const { idProduto } = req.params;
    const { nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, rascunho, dataPublicacao, timePublicacao } = req.body;

    connection.query('UPDATE produto SET nomeProduto = ?, descProduto = ?, geralCategoria = ?, subCategoria = ?, peso = ?, altura = ?, largura = ?, profundidade = ?, estoque = ?, madeira = ?, revestimento = ?, ferragem = ?, acabamento = ?, vidro = ?, precoBase = ?, desconto = ?, quantDesconto = ?, tipoDesconto = ?, grupoDesconto = ?, tipoGrupoDesconto = ?, publicacao = ?, rascunho = ?, dataPublicacao = ?, timePublicacao = ?',
        [nomeProduto, descProduto, geralCategoria, subCategoria, peso, altura, largura, profundidade, estoque, madeira, revestimento, ferragem, acabamento, vidro, precoBase, desconto, quantDesconto, tipoDesconto, grupoDesconto, tipoGrupoDesconto, publicacao, , rascunho, dataPublicacao, timePublicacao, idProduto,], (err, result) => {
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

////////////////// cores produto //////////////
router.get('/coresProduto', (req, res) => {
    connection.query('SELECT * FROM coresProduto', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.post('/coresProduto', (req, res) => {
    const { nomeCor } = req.body;
    const query = 'INSERT INTO coresProduto (nomeCor) VALUES (?)';
    connection.query(query, [nomeCor], (error, results) => {
        if (error) return res.status(500).send(error);
        res.status(201).json({ idCoresProduto: results.insertId });
    });
});


////////////////////////////////////////// imagens produto /////////////////////////////
router.get('/imgProduto', (req, res) => {
    connection.query('SELECT * FROM imgProduto', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.post('/imgProduto', upload.single('image'), (req, res) => {
    const imgCaminho = `/uploads/${req.file.filename}`;

    const query = 'INSERT INTO imgProduto (imgCaminho) VALUES (?)';
    connection.query(query, [imgCaminho], (error, results) => {
        if (error) return res.status(500).send(error);
        res.status(201).json({ idImgProduto: results.insertId });
    });
});


//////////////////////////////////// produtos com cores e imagens ////////////////////
// Rota para inserir dados na tabela produtoCorImg
router.post('/produtoCorImg', (req, res) => {
    const { produto_id, cores_id, Img_id } = req.body;
    const query = 'INSERT INTO produtoCorImg (produto_id, cores_id, Img_id) VALUES (?, ?, ?)';
    connection.query(query, [produto_id, cores_id, Img_id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.status(201).json({ idProdutoCorImg: results.insertId });
    });
});


// Rota para buscar os dados do TextAreaForum com tags associadas
router.get('/produtoCorImg', (req, res) => {
    const query = `
        SELECT 
            p.idProduto,
            p.nomeProduto,
            p.descProduto, 
            p.geralCategoria, 
            p.subCategoria,
            p.peso, 
            p.altura, 
            p.largura, 
            p.profundidade, 
            p.estoque, 
            p.madeira,
            p.revestimento, 
            p.ferragem, 
            p.acabamento, 
            p.vidro, 
            p.precoBase,
            p.desconto, 
            p.quantDesconto,
            p.tipoDesconto, 
            p.grupoDesconto, 
            p.tipoGrupoDesconto, 
            p.publicacao, 
            p.rascunho, 
            p.dataPublicacao, 
            p.timePublicacao,
            cp.nomeCor, 
            ip.imgCaminho
        FROM 
            produto p
        LEFT JOIN 
            produtoCorImg pci ON p.idProduto = pci.produto_id
        LEFT JOIN 
            coresProduto cp ON pci.cores_id = cp.idCoresProduto
        LEFT JOIN 
            imgProduto ip ON pci.Img_id = ip.idImgProduto
        ORDER BY 
            p.idProduto
    `;

    connection.query(query, (error, results) => {
        if (error) return res.status(500).send(error);

        const formattedResults = results.reduce((acc, curr) => {
            let existingEntry = acc.find(item => item.idProduto === curr.idProduto);

            if (!existingEntry) {
                existingEntry = {
                    idProduto: curr.idProduto,
                    nomeProduto: curr.nomeProduto,
                    descProduto: curr.descProduto,
                    geralCategoria: curr.geralCategoria,
                    subCategoria: curr.subCategoria,
                    peso: curr.peso,
                    altura: curr.altura,
                    largura: curr.largura,
                    profundidade: curr.profundidade,
                    estoque: curr.estoque,
                    madeira: curr.madeira,
                    revestimento: curr.revestimento,
                    ferragem: curr.ferragem,
                    acabamento: curr.acabamento,
                    vidro: curr.vidro,
                    precoBase: curr.precoBase,
                    desconto: curr.desconto,
                    quantDesconto: curr.quantDesconto,
                    tipoDesconto: curr.tipoDesconto,
                    grupoDesconto: curr.grupoDesconto,
                    tipoGrupoDesconto: curr.tipoGrupoDesconto,
                    publicacao: curr.publicacao,
                    rascunho: curr.rascunho,
                    dataPublicacao: curr.dataPublicacao,
                    timePublicacao: curr.timePublicacao,
                    coresProduto: [],
                    imgProduto: [],
                };
                acc.push(existingEntry);
            }

            // Adiciona a cor ao array, evitando duplicatas
            if (curr.nomeCor && !existingEntry.coresProduto.some(cor => cor.nomeCor === curr.nomeCor)) {
                existingEntry.coresProduto.push({ nomeCor: curr.nomeCor });
            }

            // Adiciona a imagem ao array, evitando duplicatas
            if (curr.imgCaminho && !existingEntry.imgProduto.some(img => img.imgCaminho === curr.imgCaminho)) {
                existingEntry.imgProduto.push({ imgCaminho: curr.imgCaminho });
            }

            return acc;
        }, []);

        res.status(200).json(formattedResults);
    });
});



////////////////////////////////////rotas dos materiais////////////////////
router.get('/tipos_madeiras', (req, res) => {
    connection.query('SELECT * FROM tipos_madeiras', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/tipos_revestimento', (req, res) => {
    connection.query('SELECT * FROM tipos_revestimento', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/tipos_acabamento', (req, res) => {
    connection.query('SELECT * FROM tipos_acabamento', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/tipos_vidro', (req, res) => {
    connection.query('SELECT * FROM tipos_vidro', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/tipos_ferragens', (req, res) => {
    connection.query('SELECT * FROM tipos_ferragens', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/categorias_moveis_externos', (req, res) => {
    connection.query('SELECT * FROM categorias_moveis_externos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/subcategorias_moveis_externos', (req, res) => {
    connection.query('SELECT * FROM subcategorias_moveis_externos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});

router.get('/tipos_desconto', (req, res) => {
    connection.query('SELECT * FROM tipos_desconto', (err, results) => {
        if (err) {
            console.error('Erro ao buscar os registros:', err);
            res.status(500).json({ error: 'Erro ao buscar os registros' });
            return;
        }
        res.json(results);
    });
});




//////////////////////////////////// carrinho de compra ////////////////////////////
router.get('/carrinhocompra', (req, res) => {
    const query = `
           SELECT 
            cc.idCarrinhocompra,
            cc.cliente_id,
            cc.cores_id,
            cc.Img_id,
            cc.quantProduto,
            cc.produto_id,
            p.idProduto,
            p.nomeProduto,
            p.geralCategoria, 
            p.precoBase,
            p.desconto, 
            p.quantDesconto
        FROM 
            carrinhocompra cc
        JOIN 
            produto p ON p.idProduto = cc.produto_id
        ORDER BY 
            cc.idCarrinhocompra;
    `;

    connection.query(query, (error, results) => {
        if (error) return res.status(500).send(error);
        res.status(200).json(results);
    });
});


router.post('/carrinhocompra', (req, res) => {
    const { cliente_id, produto_id, cores_id, Img_id, quantProduto } = req.body;

    connection.query('INSERT INTO carrinhocompra ( cliente_id, produto_id, cores_id, Img_id, quantProduto) VALUES (?, ?, ?, ?, ?)',
        [cliente_id, produto_id, cores_id, Img_id, quantProduto], (err, result) => {
            if (err) {
                console.error('Erro ao criar o registro:', err);
                res.status(500).json({ error: 'Erro ao criar o registro' });
                return;
            }
            res.status(201).json({ message: 'Registro criado com sucesso', idCarrinhocompra: result.insertId });
        });
});


router.delete('/carrinhocompra/:idCarrinhocompra', (req, res) => {
    const { idCarrinhocompra } = req.params;
    connection.query('DELETE FROM carrinhocompra WHERE idCarrinhocompra = ?', [idCarrinhocompra], (err, result) => {
        if (err) {
            console.error('Erro ao excluir o registro:', err);
            res.status(500).json({ error: 'Erro ao excluir o registro' });
            return;
        }
        res.json({ message: 'Registro excluído com sucesso' });
    });
});

module.exports = router;
