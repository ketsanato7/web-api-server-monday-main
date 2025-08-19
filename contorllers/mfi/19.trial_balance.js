const Model = require("../../models/mfi/19.trial_balance");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
        id: form.id,
        account_no: form.account_no,
        account_title: form.account_title,
        trial_balance_debit: form.trial_balance_debit,
        trial_balance_credit: form.trial_balance_credit,
        adjustment_debit: form.adjustment_debit,
        adjustment_credit: form.adjustment_credit,
        adjusted_trial_balance_debit: form.adjusted_trial_balance_debit,
        adjusted_trial_balance_credit: form.adjusted_trial_balance_credit,

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
                from: "member_shares",
                localField: "member_shares_id",
                foreignField: "_id",
                as: "member_shares_id"
            }
        },{
            $lookup: {
                from: "enterprise",
                localField: "enterprise_id",
                foreignField: "_id",
                as: "enterprise_id"
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
        account_title: form.account_title,
        trial_balance_debit: form.trial_balance_debit,
        trial_balance_credit: form.trial_balance_credit,
        adjustment_debit: form.adjustment_debit,
        adjustment_credit: form.adjustment_credit,
        adjusted_trial_balance_debit: form.adjusted_trial_balance_debit,
        adjusted_trial_balance_credit: form.adjusted_trial_balance_credit,
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