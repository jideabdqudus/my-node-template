const AsyncHandler = require('../middleware/async');
const DemographyService = require('../services/demography.service');

class DemographicController {
  constructor() {
    this.demographyService = new DemographyService();
  }

  getNumberOfHouseHolds = AsyncHandler(async (req, res) => {
    const { location } = req.query;

    const proccessedLocation = await this.demographyService.proccessLocation(
      location
    );

    if (!location) {
      return res.status(400).json({ message: 'Location is Incorrect' });
    }

    try {
      const response = {
        data: {
          residents: {
            'Number of households': 86,
          },
          proccessedLocation,
        },
        dataDate: '2021-03-21',
        refreshedDate: '2021-03-21',
      };

      res.status(200).json({
        status: 'success',
        response,
      });
    } catch (error) {
      console.error('Error analyzing Demography:', error);
      res.status(500).json({
        status: 'error',
        error: error.message,
      });
    }
  });
}

const demographicController = new DemographicController();

module.exports = {
  getNumberOfHouseHolds: demographicController.getNumberOfHouseHolds,
};
