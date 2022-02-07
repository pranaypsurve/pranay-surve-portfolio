import { NavLink } from 'react-router-dom';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <section class="page_404">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-12 text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>


                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <NavLink to='/' class="link_404">Go to Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageNotFound;