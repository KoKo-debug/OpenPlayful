import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);



        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();


    }


    render() {


        return(
            <div className="review-form-container">

                <form onSubmit={this.handleSubmt} className="review-form-box">
                    <section className="review-form-header">

                    </section>
                    <section className="review-form-main">
                        <span>
                            Rate your dining experience
                        </span>

                        <span>
                            <div>
                                Overall
                            </div>
                            <span>
                                <div className="star">
                                    <img className="O-ss1" src={window.singleStar} alt="single star"/>
                                </div>
                                <div className="star">
                                    <img className="O-ss2" src={window.singleStar} alt="single star"/>
                                </div>
                                <div className="star">
                                    <img className="O-ss3" src={window.singleStar} alt="single star"/>
                                </div>
                                <div className="star">
                                    <img className="O-ss4" src={window.singleStar} alt="single star"/>
                                </div>
                                <div className="star">
                                    <img className="O-ss5" src={window.singleStar} alt="single star"/>
                                </div>
                            </span>
                        </span>

                        <span>
                            <div>
                                Food
                            </div>
                            <span>
                                <div>
                                    <img className="F-ss1" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="F-ss2" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="F-ss3" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="F-ss4" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="F-ss5" src={window.singleStar} alt="single star" />
                                </div>
                            </span>
                        </span>

                        <span>
                            <div>
                                Service
                            </div>
                            <span>
                                <div>
                                    <img className="O-ss1" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="O-ss2" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="O-ss3" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="O-ss4" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="O-ss5" src={window.singleStar} alt="single star" />
                                </div>
                            </span>
                        </span>

                        <span>
                            <div>
                                Ambience
                            </div>
                            <span>
                                <div>
                                    <img className="A-ss1" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="A-ss2" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="A-ss3" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="A-ss4" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="A-ss5" src={window.singleStar} alt="single star" />
                                </div>
                            </span>
                        </span>

                        <span>
                            <div>
                                Value
                            </div>
                            <span>
                                <div>
                                    <img className="V-ss1" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="V-ss2" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="V-ss3" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="V-ss4" src={window.singleStar} alt="single star" />
                                </div>
                                <div>
                                    <img className="V-ss5" src={window.singleStar} alt="single star" />
                                </div>
                            </span>
                        </span>

                        <button>Next</button>

                    </section>
                </form>
            </div>

        )
    }


}

export default ReviewForm;