"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("./../Models/user.model");
exports.getNotebooks = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }, { notebooks: { name: 1, id: 1 }, name: 1 });
        if (user)
            res.status(200).send(user);
        else
            res.sendStatus(404);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getOneNotebook = async (req, res) => {
    const userId = req.user.id;
    const notebookId = req.params.id;
    try {
        // const user = await User.findById(userId);
        const user = await User.findOne({ _id: userId }, {
            notebooks: {
                $elemMatch: {
                    id: notebookId,
                },
            },
        });
        if (user) {
            const notebook = user.notebooks.filter((notebook) => notebook.id === notebookId);
            res.status(200).send(notebook);
        }
        else
            res.sendStatus(401);
    }
    catch (err) {
        res.send(err);
    }
};
exports.updateNotebook = async (req, res) => {
    const userId = req.user.id;
    const newName = req.body.name;
    const notebookId = req.body.notebook;
    const newContent = req.body.content;
    if (newName && !newContent) {
        //Changes The Name of Notebook
        try {
            await User.updateOne({ _id: userId }, {
                $set: {
                    "notebooks.$[notebook].name": newName,
                },
            }, {
                arrayFilters: [
                    {
                        "notebook.id": notebookId,
                    },
                ],
            });
            res.status(204).send("Document Updated Successfully");
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
    else if (!newName && newContent) {
        //Update sthe content
        try {
            await User.updateOne({ _id: userId }, {
                $set: {
                    "notebooks.$[notebook].content": newContent,
                },
            }, {
                arrayFilters: [
                    {
                        "notebook.id": notebookId,
                    },
                ],
            });
            res.status(204).send("Document Updated Successfully");
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
    else
        res.sendStatus(400);
};
exports.addNotebook = async (req, res) => {
    const id = req.user.id;
    const name = req.body.name;
    const notebookId = req.body.notebookId;
    try {
        await User.updateOne({ _id: id }, {
            $push: {
                notebooks: {
                    name,
                    content: "",
                    id: notebookId,
                },
            },
        });
        res.status(200).send("Notebook Created");
    }
    catch (err) {
        res.sendStatus(500);
    }
};
exports.deleteNotebook = async (req, res) => {
    const id = req.user.id;
    const notebookId = req.body.notebookId;
    try {
        await User.updateOne({ _id: id }, {
            $pull: {
                notebooks: {
                    id: notebookId,
                },
            },
        });
        res.status(202).send("Notebook Deleted");
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
