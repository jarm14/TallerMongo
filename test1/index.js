var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

app.put('/api/marca', function (req, res) {
    var jsonObj = req.body;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("marca").insertOne(jsonObj, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send("Marca Creada");
            }
            db.close();
        });
    });
});

app.put('/api/modelo', function (req, res) {
    var jsonObj = req.body;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("modelo").insertOne(jsonObj, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send("Modelo creado");
            }
            db.close();
        });
    });
});

app.put('/api/vehiculo', function (req, res) {
    var jsonObj = req.body;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        var marca = null;
        var modelo = null;
        dbo.collection("marca").findOne({ nombre: jsonObj.marca }, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                if (result == null) {
                    res.status(404).send("Marca no encontrada");
                } else {
                    marca = result["_id"];
                    dbo.collection("modelo").findOne({ nombre: jsonObj.modelo }, function (err, result) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            if (result == null) {
                                res.status(404).send("Modelo no encontrado");
                            } else {
                                modelo = result["_id"];
                                if (marca != null && modelo != null) {
                                    jsonObj["marca"] = marca;
                                    jsonObj["modelo"] = modelo;
                                    dbo.collection("vehiculo").insertOne(jsonObj, function (err, result) {
                                        if (err) {
                                            res.status(500).send(err);
                                        } else {
                                            res.status(200).send("Vehiculo creado");
                                            db.close();
                                        }
                                    })
                                } else {
                                    res.status(500).send();
                                }
                            }
                        }
                    });
                }
            }
        });
    });
});

app.get('/api/marca', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("marca").find({}).toArray(function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen Marcas");
            }
            db.close();
        });
    });
});

app.get('/api/modelo', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("modelo").find({}).toArray(function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen Modelos");
            }
            db.close();
        });
    });
});

app.get('/api/vehiculo', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("vehiculo").find({}).toArray(function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen Vehiculos");
            }
            db.close();
        });
    });
});

app.get('/api/marca/:codigo', function (req, res) {
    var codigo = req.params.codigo;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("marca").findOne({ codigo: codigo }, function (err, result) {
            if (err) throw err;
            if (result != null) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen esa marca");
            }
            db.close();
        });
    });
});

app.get('/api/modelo/:codigo', function (req, res) {
    var codigo = req.params.codigo;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("modelo").findOne({ codigoMarca: codigo }, function (err, result) {
            if (err) throw err;
            if (result != null) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen ese modelo");
            }
            db.close();
        });
    });
});

app.get('/api/vehiculo/:placa', function (req, res) {
    var placa = req.params.placa;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("vehiculo").findOne({ placa: placa }, function (err, result) {
            if (err) throw err;
            if (result != null) {
                res.status(200).send(result);
            } else {
                res.status(404).send("No existen el vehiculo");
            }
            db.close();
        });
    });
});

app.post('/api/vehiculo/cambioPropietario', function (req, res) {
    var jsonObj = req.body;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("vehiculo").findOneAndUpdate({ placa: jsonObj.placa }, { $set: { "propietario": jsonObj.propietario } }, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send("Propietario actualizado");
            }
            db.close();
        })
    });
});

app.get('/api/vehiculo/marca/:nombre', function (req, res) {
    var nombre = req.params.nombre;
    var marca = null;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("marca").findOne({ nombre: nombre }, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                if (result == null) {
                    res.status(404).send("Marca no encontrada");
                } else {
                    marca = result["_id"];
                    dbo.collection("vehiculo").find({ marca: marca }).toArray(function (err, result) {
                        if (result.length > 0) {
                            res.status(200).send(result);
                        } else {
                            res.status(404).send("No existen Vehiculos");
                        }
                        db.close();
                    })
                }
            }
        });
    })
});

app.get('/api/vehiculo/modelo/:nombre', function (req, res) {
    var nombre = req.params.nombre;
    var modelo = null;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("modelo").findOne({ nombre: nombre }, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                if (result == null) {
                    res.status(404).send("Modelo no encontrada");
                } else {
                    modelo = result["_id"];
                    dbo.collection("vehiculo").find({ modelo: modelo }).toArray(function (err, result) {
                        if (result.length > 0) {
                            res.status(200).send(result);
                        } else {
                            res.status(404).send("No existen Vehiculos");
                        }
                        db.close();
                    })
                }
            }
        });
    })
});

app.get('/api/vehiculo/edad/:anio', function (req, res) {
    var anio = req.params.anio;
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testRest");
        dbo.collection("vehiculo").find({}).toArray(function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                var listaResultante = [];
                result.forEach(element => {
                    var anioParts = element.propietario.fecha_nacimiento.split("-");
                    var anioProp = new Date(anioParts[0], anioParts[1] - 1, anioParts[2]);
                    var anioActual = new Date();
                    var edad = anioActual.getTime() - anioProp.getTime();
                    edad = Math.round(edad / (1000 * 60 * 60 * 24 * 365));
                    if (edad > anio) {
                        listaResultante.push(element);
                    }
                });
                if (listaResultante.length > 0) {
                    res.status(200).send(listaResultante);
                } else {
                    res.status(404).send("Vehiculos no encontrados");
                }
            }
        })
    })
})
app.listen(4000);
console.log("Server Started...");