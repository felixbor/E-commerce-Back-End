// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,
  {
    foreignKey: 'Category_id',
    onDelete: 'CASCADE',}) 

Category.hasMany(Product,{
  foreignKey: 'Product_id',
    onDelete: 'CASCADE',

}) 

Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
