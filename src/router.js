import Start from './pages/Start'
import OpenApps from './pages/OpenApps'
import Impressum from './pages/Impressum'

export const routes = [
    {
        path:'/',
        name: 'Start',
        component: Start
    },
    {
      path:'/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path:'/openapps',
      name: 'OpenApps',
      component: OpenApps
    }
];