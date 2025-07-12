import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

//function  for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Validate input fields
        if (!name || !description || !price || !category || !sizes) {
            return res.status(400).json({ success: false, message: 'All required fields must be provided.' });
        }

        // Check for file uploads
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item != undefined)


        const imagesUrl = await Promise.all( // iterater of arrary
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        )



        // Logging data for debugging
        console.log('Product Data:', { name, description, price, category, subCategory, sizes, bestseller });
        console.log(imagesUrl);

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller == 'true' ? 'true' : 'false',
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()

        }

        const product = new productModel(productData)

        await product.save();

        // Example response
        res.status(200).json({ success: true, message: 'Product added successfully.' });

    } catch (error) {
        console.error('Error in addProduct:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//function  for list product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({ success: true, products })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: error.message });

    }

}

//function  for removing product
const removeProduct = async (req, res) => {

    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "product removed" })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }

}



//function  for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: "product not found" });
    }

}

// NEW: Function for updating a product
const updateProduct = async (req, res) => {
    try {
        const { productId, name, description, price, category, subCategory, sizes, bestseller } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product id is required." });
        }

        // Build update data (parse sizes if sent as JSON string)
        const updateData = {

            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: typeof sizes === 'string' ? JSON.parse(sizes) : sizes,
        };

        // If new images are provided, upload them and update the product images
        if (req.files) {
            const images = [];
            if (req.files.image1 && req.files.image1[0]) images.push(req.files.image1[0]);
            if (req.files.image2 && req.files.image2[0]) images.push(req.files.image2[0]);
            if (req.files.image3 && req.files.image3[0]) images.push(req.files.image3[0]);
            if (req.files.image4 && req.files.image4[0]) images.push(req.files.image4[0]);

            if (images.length > 0) {
                const imagesUrl = await Promise.all(
                    images.map(async (item) => {
                        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                        return result.secure_url;
                    })
                );
                updateData.image = imagesUrl;
            }
        }

        const updatedProduct = await productModel.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found." });
        }
        return res.status(200).json({ success: true, message: "Product updated successfully.", product: updatedProduct });
    } catch (error) {
        console.error("Error in updateProduct:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { addProduct, singleProduct, removeProduct, listProduct, updateProduct };