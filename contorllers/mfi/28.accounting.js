const Model = require("../../models/mfi/28.accounting");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

     const data = {
     id: form.id,
     account_code: form.account_code,
     account_name: form.account_name,
     account_type_code: form.account_type_code,

     account_type_id: form.account_type_id,
          accounting_group_code: form.accounting_group_code,

     accounting_group_id: form.accounting_group_id,
          accounting_level_code: form.accounting_level_code,
     accounting_level_code: form.accounting_level_code,

     accounting_level: form.accounting_level,
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
                from: "accounting_types",
                localField: "accounting_type_id",
                foreignField: "_id",
                as: "accounting_type_id"
            }
        },{
            $lookup: {
                from: "accounting_group_id",
                localField: "accounting_groups",
                foreignField: "_id",
                as: "accounting_group_id"
            }
        },
        ,{
            $lookup: {
                from: "accounting_level_id",
                localField: "accounting_levels",
                foreignField: "_id",
                as: "accounting_level_id"
            }
        }
    ]).exec((err, data) => {

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
     account_no: form.account_no,
     account_name: form.account_name,
     account_type_id: form.account_type_id,
     accounting_group_id: form.accounting_group_id,
     accounting_levels: form.accounting_levels,
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

    Model.findOne(form).exec((err, data) => {
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