import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/Homepage';

const router = createBrowserRouter([{ element: <HomePage />, path: '/' }]);

export default router;
