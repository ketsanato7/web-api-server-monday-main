const Model = require("../../../models/mfi/D/D20.document_types");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);
    const data = {
        id: form.id,
        value_LA: form.value_LA,
        value_EN: form.value_EN,
        code_EN: form.code_EN,
        code_LA: form.code_LA,
        status: form.status,

        created_date: new Date()
    }

    Model.create(data, err => {

        if (!err) {
            console.log("Save");
            res.json({
                status: true,
                message: "Saved"


            })
        } else {
            console.log("error ");
            res.json({
                status: false,
                message: err


            })
        }
    })
}
module.exports.read = async (req, res, next) => {

    Model.find().exec((err, data) => {
        if (!err) {

            res.json({
                status: true,
                message: "select all data ",
                data: data
            })
        } else {


            console.log(err);
            res.json({
                status: false,
                message: err
            })
        }
    });

}
module.exports.read1 = async (req, res, next) => {

    Model.aggregate([{
        $lookup: {
            from: "districts",
            localField: "district_id",
            foreignField: "_id",
            as: "district_id"
        }
    }, ]).exec((err, data) => {

        if (!err) {

            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })
        } else {


            console.log("error");
            res.json({
                status: false,
                message: err
            })
        }
    });

}

module.exports.update = async (req, res, next) => {
    const form = req.body;

    const data = {
        id: form.id,
        value_LA: form.value_LA,
        value_EN: form.value_EN,
        code_EN: form.code_EN,
        code_LA: form.code_LA,



        status: form.status,
        updated_date: new Date()

    }
    console.log(form);
    Model.findByIdAndUpdate(form._id, data, {
        useFindAndModify: false
    }).exec((err, data) => {

        if (!err) {

            console.log("Update data complete  ");

            res.json({
                status: true,
                message: "Update data complete",
                data: data

            })

        } else {
            console.log(err);

            res.json({
                status: false,
                message: err
            })


        }
    })



}

module.exports.delete = async (req, res, next) => {

    const form = req.body;


    Model.findByIdAndDelete(form._id, {
        useFindAndModify: false
    }).exec((err) => {

        if (!err) {
            console.log("Delete complete  ");

            res.json({
                status: true,
                message: "Delete complete !",

            })

        } else {
            console.log(error);

            res.json({
                status: false,
                message: err
            })


        }
    })



}
module.exports.readone = async (req, res, next) => {
    const form = req.body;
    console.log(form)

    Model.findOne(form).exec((err, data) => {
        if (!err) {
            console.log(data)

            res.json({
                status: true,
                message: "select all data ",
                data: data
            })

        } else {


            console.log(err);
            res.json({
                status: false,
                message: err
            })
        }
    });

}