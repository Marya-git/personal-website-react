import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Body from "./components/Body";
import Frontend from "./components/Frontend";
import About from "./components/About";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Frontend navPath="/"/>} >
                <Route index={true} element={<Body />}  />
                <Route path="*" element={<Body />} />
            </Route>
            <Route path="/about" element={<Frontend navPath="/about"/>} >
                <Route index={true} element={<About />} />
                <Route path="*" element={<About />} />
            </Route>
            <Route path="/contact" element={<Frontend navPath="/contact"/>} >
                <Route index={true} element={<About />} />
                <Route path="*" element={<About />} />
            </Route>
        </>
    )
);

export default router;