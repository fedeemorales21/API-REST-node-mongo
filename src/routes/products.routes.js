const { Router } = require('express')
const router = Router()

const {
    getAllProducts,
    getProductPerID,
    saveProduct,
    editProduct,
    deleteProduct

} = require('../controllers/product.controller') 

router.get('/products', getAllProducts)

router.get('/products/:id', getProductPerID)

router.post('/products', saveProduct)

router.put('/products/:id', editProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router