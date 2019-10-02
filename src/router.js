import Start from './pages/Start'
import OpenApps from './pages/OpenApps'

export const routes = [
    {
        path:'/',
        name: 'Start',
        component: Start
    },
    {
      path:'/openapps',
      name: 'OpenApps',
      component: OpenApps
    }
];