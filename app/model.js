//adding the MVC
var MODEL = (function() {
    var _myVar = "Model";

    // this is where homePage html goes
    var _homePageInfo = 
    `
    <section id="homePage" class="homeContent">
        <div class="homeContent__center">
            <div class="homeContent__headerOne"><h1>Welcome</h1></div>
            <div class="homeContent__subheader">Get your FIFA tips and tricks here</div>
            <div class="home__cta">
                <a href="#"><button class="homeContent__btn">Skills</button></a>
            </div>
        </div>
    </section>
    `;
    
    // aboutPage html
    var _aboutPageInfo = 
    `
    <section id="aboutPage" class="aboutContent">
        <div class="aboutContent__main">
            <div class="aboutContent__headerAndDesc">
                <h3 class="aboutContent__header">The home for all your FIFA <div class="aboutContent--bold">tips and tricks</div> </h3>
                <p class="aboutContent__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga porro quia quibusdam harum quis perferendis labore, aliquid dolorum deleniti, pariatur vel illo, officia tenetur veniam? Corrupti, vel. Explicabo, ipsum blanditiis.
                    Perspiciatis perferendis molestiae sapiente! Ab provident vitae, consequuntur odit enim nihil ipsa id velit laudantium beatae repellendus in adipisci dicta quibusdam! Iusto, sapiente! Sequi ea reprehenderit velit necessitatibus adipisci est!
                    Nulla tenetur sed reprehenderit inventore consectetur labore eveniet deserunt cumque expedita optio recusandae voluptatem cupiditate odio excepturi, ut repellendus ullam, quas doloremque nihil? Porro, repellat debitis molestias adipisci velit doloribus.
                </p>
            </div>
        </div>
    </section>
    `;

    // tipsPage html
    var _tipsPageInfo = 
    `
    <section id="tipsPage" class="tipsContent">
        <div class="tipsContent__main">

            <div class="tipsContent__card tipsContent--cardA">
                    <div class="tipsContent__wrap">
                        <div class="tipsContent__img tipsContent--cardAimg"></div>
                        <div class="tipsContent__text tipsContent--cardAtext">
                            <h1>Shooting and Finishing</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo nostrum eius. Eum optio aperiam aut, deserunt dolore facilis beatae sunt, dicta quo debitis nesciunt inventore quam labore magni aspernatur.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo nostrum eius. Eum optio aperiam aut, deserunt dolore facilis beatae sunt, dicta quo debitis nesciunt inventore quam labore magni aspernatur.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="tipsContent__card tipsContent--cardB">
                    <div class="tipsContent__wrap">
                        <div class="tipsContent__img tipsContent--cardBimg"></div>
                        <div class="tipsContent__text tipsContent--cardBtext">
                            <h1>Dribbling</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo nostrum eius. Eum optio aperiam aut, deserunt dolore facilis beatae sunt, dicta quo debitis nesciunt inventore quam labore magni aspernatur.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="tipsContent__card tipsContent--cardC">
                    <div class="tipsContent__wrap">
                        <div class="tipsContent__img tipsContent--cardCimg"></div>
                        <div class="tipsContent__text tipsContent--cardCtext">
                            <h1>Defending</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="tipsContent__card tipsContent--cardD">
                    <div class="tipsContent__wrap">
                        <div class="tipsContent__img tipsContent--cardDimg"></div>
                        <div class="tipsContent__text tipsContent--cardDtext">
                            <h1>Keeping</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam at ipsum omnis? A in perspiciatis error, voluptate eius dolorum. Rem beatae deserunt omnis, quo aut modi ea hic sequi!
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    `;

    // contactPage html
    var _contactPageInfo = 
    `
    <section id="contactPage" class="contactContent">
        <div class="contactContent__body">
            <div class="contactContent__title">
                <h1>Reach Out</h1>
            </div>
            <div class="contactContent__form">
                <form method="post" action="">
                        <input class="inputBoxes" name="name" type="text" class="form-control" placeholder="Your Name" required><br/>
                        <input class="inputBoxes" name="email" type="text" class="form-control" placeholder="Your Email" required><br/>
                        <textarea class="inputBoxes" name="message" class="form-control" placeholder="Message" rows="4" required></textarea><br/>
                        <input class="formCta" type="submit" value="SEND MESSAGE">
                </form>
            </div>
        </div>
    </section>
    `;


    var _getMyVariable = function (buttonID, callback) {
    console.log("Model.js 6 " + buttonID);
    let newName = "_" + buttonID + "PageInfo";
    $("#content").html(eval(newName));

    if (callback) {
        callback(newName);
    }

    // return _myVar;
}

    return {
        getMyVariable: _getMyVariable,
    };

})();

// this goes outside our MODEL
// it is more universal and should help us not have to rewrite a bunch of code

// var _getMyVariable = function (buttonID, callback) {
//     console.log("Model.js 6 " + buttonID);
//     let newName = "_" + buttonID + "PageInfo";
//     $("#content").html(eval(newName));

//     if (callback) {
//         callback(newName);
//     }

//     return _myVar;
// }


// else {
//     $("#tipsPage").append(buttonID);
// } else {
//     $("#contactPage").append(buttonID);
// }


// var _getMyVariable = function(buttonID, callback) {
//     console.log("Model.js 6 " + buttonID);
//     let newName = buttonID + "Callback";

//     if(buttonID == "home") {
//         $("#homePage").append(buttonID);
//     } else {
//         $("#aboutPage").append(buttonID);
//     } 

//     callback(newName);
// };