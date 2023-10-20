const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
    const {title, amount, description, category, date} = req.body
    const income = ExpenseSchema({
        title,
        amount,
        description,
        category,
        date
    })
    // console.log(income)
    try {
        if(!title || !amount || !description || !category || !date) {
            return res.status(400).json({message: "All field are Required"})
        }
        if(amount <= 0 || !amount == 'number') {
            return res.status(400).json({message: "Amount must be positive"})
        }
        await income.save()
        res.status(200).json({message: "Expense Added to Database"})
    } catch {
        res.status(500).json({message: "Server Error"})
    }
    // console.log(req.body)
}

exports.getExpense = async (req, res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch {
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    // console.log(req.params)
    ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: "Expense Deleted"})
    }) .catch ((error) => {
        res.status(500).json({message: "Server Error"})
    })
}