export const checkIfUserIsCompany = (req, res, next) => {
  if (req.user.role !== 'company') {
    return res.status(403).json({
      message: 'Insufficient Permissions: Access Denied for Internship Actions',
    });
  }
  next();
};
