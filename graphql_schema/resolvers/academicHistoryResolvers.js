const academicHistoryResolvers = {
  // Queries
  Query: {
    getAllUsers () {
      return [{ user: 'fccastrol' }, { user: 'mcrodriguezc' }]
    }
  }
  // Mutations

}
module.exports = { academicHistoryResolvers }
