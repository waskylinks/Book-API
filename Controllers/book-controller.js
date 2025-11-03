const Book = require('../Models/book');

const getAllBooks = async (req, res) => {
    try{
        const allBooks = await Book.find()

        if(allBooks.length > 0) {
            res.status(200).json({
                success: true,
                message: 'List of books fetched successfully',
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'No book found in the database'
            })
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
}

const getSingleBookById = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId)

        if(!bookDetailsById){
            res.status(404).json({
                success: false,
                message: 'Book with the current id is not found, please try with a different id'
            })
        } else {
            res.status(200).json({
                success: true,
                data: bookDetailsById
            })
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
}

const addNewBook = async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);

        if(newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: 'Book added successfully',
                data: newlyCreatedBook,
            });
        }

    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
};

const updateBook = async (req, res) => {
    try{
        const getCurrentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

        if(!deleteBook) {
            res.status(404).json({
                success: false,
                message: `Book is not found with this ${getCurrentBookId} id`
            });
        } else {
            res.status(200).json({
                success: true,
                data: deleteBook,
                message: `Book with id ${getCurrentBookId} was deleted successfully`
            });
        }

    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
}

const deleteBook = async (req, res) => {
    try{

    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
}

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
}