import CountryController from "../controllers/Country";

const countryRoutes = [
    
    {
        name: 'Countries',
        method: 'GET',
        path: '/countries',
        controller: CountryController.countries,
        secure: false
    },

    {
        name: 'Country',
        method: 'GET',
        path: '/country',
        controller: CountryController.countries,
        secure: false
    }

]

export default countryRoutes;