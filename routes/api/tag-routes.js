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
 //{tag_name: New Tag }
  

router.post('/', 
  async(req, res) => {
    try {
      const tags = await Tag.create({tag_name: req.body.tag_name})
      res.status(200).json( "a new tag with name :" + req.body.tag_name + " has been created");
    }
    catch (err) {
      res.status(500).json(err);
    }
      
    });


// update a tag's name by its `id` value
//{tag_name:  Very New Tag }
router.put('/:id', async(req, res) => {
  try{ const tags = await Tag.update({
   tag_name: req.body.tag_name
  },
  {
    where: { id:req.params.id}
  })
    res.status(200).json("tag with id: " + req.params.id + " is updated and has name : " +req.body.tag_name);
    
  }catch(err)
   {
    res.status(500).json(err);
  }
});
 // delete on tag by its `id` value
router.delete('/:id', async(req, res) => {

  try{ 
  const categories = await Tag.destroy(
    {
      where: {id:req.params.id}
    })
      res.status(200).json("category with id :"+ req.params.id+ "  is deleted");
      
    } catch (err) {
      res.status(500).json(err);
    }
  
});

module.exports = router;
