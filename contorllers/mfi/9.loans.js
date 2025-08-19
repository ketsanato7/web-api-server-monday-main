const Model = require("../../models/mfi/9.loans");

module.exports.create = async (req, res, next) => {
    const form = req.body;
    console.log(form);

    const data = {
  id: form.id,
        from_date: form.from_date,
        to_date: form.to_date,
        use_of_loan: form.use_of_loan,
        approved_balance: form.approved_balance,
        remaining_balance: form.remaining_balance,
        allowance_losses: form.allowance_losses,
        interest_rate: form.interest_rate,
        classification_id: form.classification_id,
        classification_date: form.classification_date,
        category_id: form.category_id,
        restructured_date: form.restructured_date,
        write_off_date: form.write_off_date,
        borrower_type_id: form.borrower_type_id,
        economic_sector_id: form.economic_sector_id,
        borrower_connection_id: form.borrower_connection_id,
        funding_source_id: form.funding_source_id,
        enterprise_id: form.enterprise_id,

        funding_org: form.funding_org,
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
                from: "personal_info",
                localField: "owner_id",
                foreignField: "_id",
                as: "personal_info"
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
        from_date: form.from_date,
        to_date: form.to_date,
        use_of_loan: form.use_of_loan,
        approved_balance: form.approved_balance,
        remaining_balance: form.remaining_balance,
        allowance_losses: form.allowance_losses,
        interest_rate: form.interest_rate,
        classification_id: form.classification_id,
        classification_date: form.classification_date,
        category_id: form.category_id,
        restructured_date: form.restructured_date,
        write_off_date: form.write_off_date,
        borrower_type_id: form.borrower_type_id,
        economic_sector_id: form.economic_sector_id,
        borrower_connection_id: form.borrower_connection_id,
        funding_source_id: form.funding_source_id,
        enterprise_id: form.enterprise_id,

        funding_org: form.funding_org,

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