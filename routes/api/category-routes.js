const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Product
router.get('/', async(req, res) => {
  try {
  const categories = await Category.findAll({include:Product
  })
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
   
  })

  
// find one category by its `id` value
  // be sure to include its associated Products

router.get('/:id', async(req, res) => {
  try {
  const categories = await Category.findByPk(req.params.id,{
    include:Product
  })
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
   
  })
  

 // create a new category;
router.post('/',  async(req, res) => {
  console.log(req.body)
  try{ 
  const categories = await Category.create( {category_name: req.body.category_name})
      res.status(200).json(categories);
      
    } catch (err) {
      res.status(500).json(err);
    }
   
  })
 
  // update a category by its `id` value
router.put('/:id', async(req, res) => {

  try{ 
  const categories = await Category.update(
     {
      category_name: req.body.category_name
    },
    {
      where: { id:req.params.id}
    })
      res.status(200).json("category with id: " + req.params.id + " is updated and has name : " +req.body.category_name);
      
    } catch (err) {
      res.status(500).json(err);
    }
   
  })

// delete a category by its `id` value
router.delete('/:id', async(req, res) => {

  try{ 
  const categories = await Category.destroy(
    {
      where: {id:req.params.id}
    })
      res.status(200).json("category with id :"+ req.params.id+ "is deleted");
      
    } catch (err) {
      res.status(500).json(err);
    }
   
  })
  


module.exports = router;
