import HomeController from "../controllers/Home";

const homeRoutes = [
    
    {
        name: 'Info',
        method: 'GET',
        path: '/info',
        controller: HomeController.info,
        secure: false
    }

]

export default homeRoutes;