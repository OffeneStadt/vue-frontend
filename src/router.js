import Start from './pages/Start'
import Home_one from './pages/Home_one'
import Home_two from './pages/Home_two'
import Home_three from './pages/Home_three'
import Forum from './pages/Forum'
import Speaker from './pages/Speaker'
import OpenApps from './pages/OpenApps'

export const routes = [
    {
        path:'/',
        name: 'Start',
        component: Start
    },
    {
        path:'/home-one',
        name: 'Home_one',
        component: Home_one
    },
    {
        path:'/home-two',
        name: 'Home_two',
        component: Home_two
    },
    {
        path:'/home-three',
        name: 'Home_three',
        component: Home_three
    },
    {
      path:'/speaker',
      name: 'Speaker',
      component: Speaker
    },
    {
      path:'/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path:'/openapps',
      name: 'OpenApps',
      component: OpenApps
    }
];