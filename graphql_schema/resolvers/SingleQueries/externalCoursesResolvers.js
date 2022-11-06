const {
  getExternalCourse,
} = require("../../../MS_access/externalCoursesAccess.js");

const externalCoursesResolvers = {
  // Queries
  Query: {
    async in_getExternalCourse(_) {
      //   const userId = params.userId;
      const courseData = await getExternalCourse();
      return courseData;
    },
  },
};
module.exports = { externalCoursesResolvers };
