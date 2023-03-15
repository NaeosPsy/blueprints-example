module.exports = {

  friendlyName: 'Destroy',


  description: 'Deletes books with the provided title.',


  inputs: {

    title: {
      description: 'The title of the book to delete.',
      type: 'string',
      required: true
    }
  },

  

  fn: async function ({title}) {

    var destroyedBooks = await Book.destroy({where: {title: title}}).fetch();

    return destroyedBooks;
  }


};
