import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import FAQ from '../../components/FAQ/FAQ';
import { ResidentialCleaning, CleaningInstruments, HomeCleaning } from '../../assets';
import "./home.css";
import Footer from '../../components/Footer/Footer';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';


const Home = () => {

    return (

        <div>
            <Navbar />

            <div className="home-main-image"></div>

            <div className="container d-flex justify-content-center home-services-container">
                <div className="row justify-content-center home-services-row">
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575 512" data-icon="fa-light-house" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: 'visible;' }}><path d="M570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1 -1.212 249.8 5.414 244L277.4 4.002C283.5 -1.334 292.5 -1.334 298.6 4.002L570.6 244zM144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7V432C96 458.5 117.5 480 144 480zM240 480H336V320H240V480z"></path></svg>
                        <div className="home-services-name">
                            <div>Home</div>
                            <div>Cleaning</div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-icon="fa-light-buildings" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: "visible;" }}><path d="M320 344C320 330.7 330.7 320 344 320H392C405.3 320 416 330.7 416 344V392C416 405.3 405.3 416 392 416H344C330.7 416 320 405.3 320 392V344zM384 384V352H352V384H384zM320 88C320 74.75 330.7 64 344 64H392C405.3 64 416 74.75 416 88V136C416 149.3 405.3 160 392 160H344C330.7 160 320 149.3 320 136V88zM352 96V128H384V96H352zM344 288C330.7 288 320 277.3 320 264V216C320 202.7 330.7 192 344 192H392C405.3 192 416 202.7 416 216V264C416 277.3 405.3 288 392 288H344zM352 224V256H384V224H352zM448 0C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H288C252.7 512 224 483.3 224 448V64C224 28.65 252.7 0 288 0H448zM448 32H288C270.3 32 256 46.33 256 64V448C256 465.7 270.3 480 288 480H448C465.7 480 480 465.7 480 448V64C480 46.33 465.7 32 448 32zM176 160H64C46.33 160 32 174.3 32 192V448C32 465.7 46.33 480 64 480H192C200.8 480 208 487.2 208 496C208 504.8 200.8 512 192 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H176C184.8 128 192 135.2 192 144C192 152.8 184.8 160 176 160zM136 320C149.3 320 160 330.7 160 344V392C160 405.3 149.3 416 136 416H88C74.75 416 64 405.3 64 392V344C64 330.7 74.75 320 88 320H136zM128 384V352H96V384H128zM136 192C149.3 192 160 202.7 160 216V264C160 277.3 149.3 288 136 288H88C74.75 288 64 277.3 64 264V216C64 202.7 74.75 192 88 192H136zM128 256V224H96V256H128z"></path></svg>
                        <div className="home-services-name">
                            <div>Office</div>
                            <div>Cleaning</div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-icon="fa-light-window-frame" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: "visible;" }}><path d="M496 480H480V64c0 -35.35 -28.65 -64 -64 -64H96C60.65 0 32 28.65 32 64v416H16C7.164 480 0 487.2 0 496C0 504.8 7.164 512 16 512h480c8.836 0 16 -7.164 16 -16C512 487.2 504.8 480 496 480zM240 480H64V288h176V480zM240 256H64V64c0 -17.67 14.33 -32 32 -32h144V256zM448 480h-176V288H448V480zM448 256h-176V32H416c17.67 0 32 14.33 32 32V256z"></path></svg>
                        <div className="home-services-name">
                            <div>Window</div>
                            <div>Cleaning</div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-icon="fa-light-vacuum" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: "visible;" }}><path d="M352 400c-8.875 0 -16 7.125 -16 16s7.125 16 16 16s16 -7.125 16 -16S360.9 400 352 400zM640 112c-0.125 -61.88 -50.13 -111.9 -112 -112H302.1C249.1 0.125 203.4 37.38 192.5 89.25L124.9 416H80C35.88 416 0 451.9 0 496C0 504.9 7.125 512 16 512h192C216.9 512 224 504.9 224 496v-64C224 423.1 216.9 416 208 416H157.6L223.8 95.75C231.6 58.75 264.2 32.12 302.1 32H528C572.1 32 608 67.88 608 112S572.1 192 528 192h-33.13C458.5 151.2 406.5 128 352 128c-17.62 0 -32 14.38 -32 32v165.9C282.9 339.1 256 374.4 256 416c0 53 43 96 96 96h128c35.38 0 64 -28.62 64 -64v-128c0 -33.75 -8.875 -66.88 -25.88 -96H528C589.9 223.9 639.9 173.9 640 112zM192 448v32H34.75C41.5 460.9 59.62 448 80 448H192zM352 480c-35.38 0 -64 -28.62 -64 -64s28.62 -64 64 -64s64 28.62 64 64S387.4 480 352 480zM512 448c0 17.62 -14.38 32 -32 32h-57c25.62 -28 32.13 -68.5 16.75 -103.2C424.4 342.1 389.9 319.9 352 320V160c88.25 0 160 71.75 160 160V448z"></path></svg>
                        <div className="home-services-name">
                            <div>Carpet</div>
                            <div>Cleaning</div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 639 512" data-icon="fa-light-shirt" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: "visible;" }}><path d="M639.7 157.6c-1.406 -12.7 -7.718 -24.06 -17.81 -32.02L486.9 19C471.3 6.75 451.8 0 431.1 0H208c-19.84 0 -39.34 6.75 -54.87 19L18.11 125.6C8.013 133.5 1.701 144.9 0.2948 157.6c-1.406 12.64 2.25 25.06 10.28 34.98l49.97 61.61c16.53 20.44 46.78 23.7 67.31 7.438l32.15 -25.38V448c0 35.3 12.72 64 47.1 64h207.1c35.28 0 63.1 -28.7 63.1 -64V236.3l32.15 25.36c20.56 16.33 50.81 13.02 67.31 -7.406l49.97 -61.63C637.5 182.7 641.1 170.3 639.7 157.6zM381.7 32C374.6 59.53 349.7 80 320 80S265.4 59.53 258.3 32H381.7zM604.6 172.4l-49.97 61.64c-5.531 6.875 -15.75 7.891 -22.62 2.438l-83.97 -66.25V448c0 17.64 -14.34 32 -31.1 32H208c-17.66 0 -15.1 -14.36 -15.1 -32V170.3L108 236.5c-6.937 5.5 -17.09 4.359 -22.62 -2.469l-49.97 -61.63C32.82 169.2 31.64 165.2 32.11 161.1c0.4687 -4.109 2.531 -7.828 5.812 -10.42l135 -106.6C182.8 36.31 195.3 32 208 32h17.62C233.3 77.31 272.5 112 320 112s86.71 -34.69 94.38 -80h17.59c12.72 0 25.19 4.312 35.09 12.12l135 106.6c3.281 2.609 5.344 6.328 5.812 10.44C608.4 165.2 607.2 169.2 604.6 172.4z"></path></svg>
                        <div className="home-services-name">
                            <div>Laundry</div>
                            <div>Service</div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 32 512 448" data-icon="fa-light-bed-front" preserveAspectRatio="xMidYMid" class="bg-user-2" style={{ overflow: "visible;" }}><path d="M480 240.4V96c0 -35.3 -28.72 -64 -64 -64H96C60.72 32 32 60.7 32 96v144.4C12.69 255 0 277.1 0 304v160C0 472.8 7.156 480 16 480S32 472.8 32 464V416h448v48c0 8.844 7.156 16 16 16s16 -7.156 16 -16v-160C512 277.1 499.3 255 480 240.4zM432 224h-160V192c0 -17.64 14.34 -32 32 -32H416c17.66 0 32 14.36 32 32v33.62C442.8 224.6 437.5 224 432 224zM96 64h320c17.66 0 32 14.36 32 32v40.9C438.5 131.4 427.7 128 416 128h-112c-19.2 0 -36.26 8.678 -48 22.12C244.3 136.7 227.2 128 208 128H96C84.29 128 73.45 131.4 64 136.9V96C64 78.36 78.34 64 96 64zM64 192c0 -17.64 14.34 -32 32 -32h112c17.66 0 32 14.36 32 32v32h-160C74.52 224 69.17 224.6 64 225.6V192zM480 384H32V304C32 277.5 53.53 256 80 256h352C458.5 256 480 277.5 480 304V384z"></path></svg>
                        <div className="home-services-name">
                            <div>Furniture</div>
                            <div>Sanitizing</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Testimonials */}
            <CustomerReviews />

            {/* FAQ */}
            <FAQ />

            
            <SocialMediaIcons />

            {/* Footer */}
            <Footer />



        </div>
    )
}

export default Home