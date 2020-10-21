const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    const products = await Product.paginate({
        limit: 15
    })
    res.json({ products })
}


const getProductPerID = async (req, res) => {
    const products = await Product.findById(req.params.id)
    res.json({ products })
}


const saveProduct = async (req, res) => {
    const { name, description, price } = req.body

    if (!name || !description || !price) {
        res.json({
            success: false,
            error : 'Fields are missing' 
        })
    }

    const newProduct = new Product({
        name,
        description,
        price
    })
    
    await newProduct.save()
    
    res.json({ success: true })
}


const editProduct = async (req, res) => {
    const { name, description, price } = req.body

    if (!name || !description || !price) {
        res.json({
            success: false,
            error : 'Fields are missing' 
        })
    }

    const edtProduct = await Product.findByIdAndUpdate({_id: req.params.id}, { name, description, price}, { new: true })
    res.json({
        success: true,
        edited: edtProduct
    })

}


const deleteProduct = async (req, res) => {
    const eraserProduct = await Product.findByIdAndDelete(req.params.id)
    res.json({
        success: true,
        deleted: eraserProduct
    })

}


module.exports = {
    getAllProducts,
    getProductPerID,
    saveProduct,
    editProduct,
    deleteProduct
}
