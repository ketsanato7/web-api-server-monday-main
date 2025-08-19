const Model = require("../../../models/mfi/D/D16.country");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
        id: form.id,
        en_short: form.en_short,
        en_formal: form.en_formal,
                country_code: form.country_code,
                en_code: form.en_code,
                

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
module.exports.update = async (req, res, next) => {
    const form = req.body;

    const data = {
        id: form.id,
        en_short: form.en_short,
        en_formal: form.en_formal,
                        country_code: form.country_code,
                en_code: form.en_code,

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

    Model.find(form).exec((err, data) => {
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