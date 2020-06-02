import Start from './pages/Start'
import OpenApps from './pages/OpenApps'
import Impressum from './pages/Impressum'
import Start2019 from './pages/Start2019'

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
    },
    {
      path:'/rueckblick',
      name: 'Rückblick 2019',
      component: Start2019
  },
];