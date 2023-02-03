const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
  // be sure to include its associated Product data
router.get('/', async(req, res) => {
  try {
    const tags = await Tag.findAll({include:Product})
   res.status(200).json(tags);
} catch (err) {
  res.status(500).json(err);
}
  
});
 // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async(req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id,{include:Product})
    res.status(200).json(tags);
  }
  catch (err) {
    res.status(500).json(err);
  }
    
  });
 

 // create a new tag
router.post('/', 
  async(req, res) => {
    try {
      const tags = await Tag.create(req.params.id,{include:Product})
      res.status(200).json(tags);
    }
    catch (err) {
      res.status(500).json(err);
    }
      
    });

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
