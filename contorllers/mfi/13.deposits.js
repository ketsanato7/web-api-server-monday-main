const Model = require("../../models/mfi/13.deposits");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
        id: form.id,
        account_no: form.account_no,
        depositor_type_id: form.depositor_type_id,
        deposit_type_id: form.deposit_type_id,
        from_date: form.from_date,
        to_date: form.to_date,
        interest_rate_date: form.interest_rate_date,
        opening_balance: form.opening_balance,
        remaining_balance: form.remaining_balance,
        deposit: form.deposit,
        withdrawal: form.withdrawal,
        interest_rate: form.interest_rate,
        economic_sector_id: form.economic_sector_id,
        economic_branch_id: form.economic_branch_id,

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
                from: "depositor_type",
                localField: "depositor_type_id",
                foreignField: "_id",
                as: "depositor_type_id"
            }
        },
        {
            $lookup: {
                from: "deposit_type",
                localField: "deposit_type_id",
                foreignField: "_id",
                as: "deposit_type_id"
            }
        },
        {
            $lookup: {
                from: "economic_sector",
                localField: "economic_sector_id",
                foreignField: "_id",
                as: "economic_sector_id"
            }
        },
        {
            $lookup: {
                from: "economic_branch",
                localField: "economic_branch_id",
                foreignField: "_id",
                as: "economic_branch_id"
            }
        },

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
        depositor_type_id: form.depositor_type_id,
        deposit_type_id: form.deposit_type_id,
        from_date: form.from_date,
        to_date: form.to_date,
        interest_rate_date: form.interest_rate_date,
        opening_balance: form.opening_balance,
        remaining_balance: form.remaining_balance,
        deposit: form.deposit,
        withdrawal: form.withdrawal,
        interest_rate: form.interest_rate,
        economic_sector_id: form.economic_sector_id,
        economic_branch_id: form.economic_branch_id,
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