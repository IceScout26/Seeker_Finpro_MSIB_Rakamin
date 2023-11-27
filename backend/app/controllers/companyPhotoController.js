const { getCompanyPhotoById, updateCompanyPhotoById } = require('../models/companyPhotoModel');

const getCompanyPhotoController = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const companyPhoto = await getCompanyPhotoById(companyId);

    if (!companyPhoto) {
      return res.status(404).json({ message: 'Company photo not found' });
    }

    // Mendapatkan URL lengkap ke gambar dari folder 'public/upload/photos'
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/photos/${companyPhoto.profile_picture}`;

    // Menambahkan URL ke respons JSON
    const response = { ...companyPhoto, imageUrl };
    
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching company photo.");
  }
};

const updateCompanyPhotoController = async (req, res) => {
  const companyId = req.accountId; 
  const newProfilePicture = req.file.filename;

  try {
    const updateCompany = await updateCompanyPhotoById(companyId, newProfilePicture);

    // Menggunakan URL lengkap untuk gambar yang baru diunggah
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/photos/${newProfilePicture}`;

    // Menambahkan URL ke respons JSON
    const response = { ...updateCompany, imageUrl };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating company photo.");
  }
};

module.exports = {
  getCompanyPhotoController,
  updateCompanyPhotoController,
};
