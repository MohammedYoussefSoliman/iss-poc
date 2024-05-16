import { route as aboutRoute } from './about/route';
import { route as loginRoute } from './auth/route';
import { route as homeRoute } from './home/route';
import { route as notFoundRoute } from './not-found/route';

const routes = [homeRoute, aboutRoute, loginRoute, notFoundRoute];

export default routes;
